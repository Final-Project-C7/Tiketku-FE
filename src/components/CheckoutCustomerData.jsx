import React, { useState, useEffect } from "react";
import { Image, Button, Container, Form, Modal } from "react-bootstrap";
import NavbarHomepage from "./NavbarHomepage";
import NavbarUser from "../components/NavbarUser";
import SeatCustomer from "./SeatCustomer";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";
import Moment from "moment";

import "./CheckoutCustomerData.css";

const CheckoutCustomerData = (props) => {
  // uselocation dari react router untuk ambil data dari overan state di LINK resultFlight
  const location = useLocation();
  console.log(location);
  console.log(location?.state?.business_price);

  const [user, setUser] = useState(null);
  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);
  const [isChecked3, setIsChecked3] = useState(false);

  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [name, setName] = useState("");
  const [born_date, setBornDate] = useState("");
  const [citizen, setCitizen] = useState("");
  const [identity_number, setIdentityNumber] = useState("");
  const [publisher_country, setPublisherCountry] = useState("");
  const [valid_until, setValidUntil] = useState("");
  const [booking_id, setBookingId] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State untuk menyimpan status login pengguna
  const [passengers, setPassengers] = useState([]);
  const { passenger } = useSelector((state) => state);

  const selectedClass = useSelector((state) => state.class.selectedClass);
  const { adult, children, baby } = useSelector((state) => state.passenger);
  const [forms, setForms] = useState([]);
  const [isFormFilled, setIsFormFilled] = useState(false);
  const [isFormFilled2, setIsFormFilled2] = useState(false);
  const [successMessages, setSuccessMessages] = useState([]);

  const token = localStorage.getItem("token");

  useEffect(() => {
    const initialForms = Array.from({ length: adult + children + baby }, () => ({
      name: "",
      born_date: "",
      citizen: "",
      identity_number: "",
      publisher_country: "",
      valid_until: "",
      booking_id: "",
    }));
    setForms(initialForms);
  }, [adult, children, baby]);

  const handleFormChange = (index, field, value) => {
    setForms((prevForms) => prevForms.map((form, i) => (i === index ? { ...form, [field]: value } : form)));

    const isFilled = forms.every((form) => form.name && form.born_date && form.citizen && form.identity_number && form.publisher_country && form.valid_until);
    setIsFormFilled(isFilled);
  };

  const handleInputChange = (event) => {
    const isFilled = event.target.value !== "";
    setIsFormFilled2(isFilled);
  };

  useEffect(() => {
    const getUserData = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get("https://c7-tiketku.up.railway.app/api/v1/user/user-info", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUser(response.data.data.user);
      } catch (error) {
        // Handle error jika terjadi masalah saat mengambil data pengguna
        console.log("Error:", error);
      }
    };

    getUserData();
  }, []);

  const handleSwitchToggle1 = () => {
    setIsChecked1(!isChecked1);
  };
  const handleSwitchToggle2 = () => {
    setIsChecked2(!isChecked2);
  };
  const handleSwitchToggle3 = () => {
    setIsChecked3(!isChecked3);
  };

  const handleSubmit = async (e, index) => {
    e.preventDefault();
    const form = forms[index];

    try {
      const response = await axios.post(
        "https://c7-tiketku.up.railway.app/api/v1/passengers",
        {
          name: form.name,
          born_date: form.born_date,
          citizen: form.citizen,
          identity_number: form.identity_number,
          publisher_country: form.publisher_country,
          valid_until: form.valid_until,
          booking_id: "1",
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const { newPassengers } = response.data.data;
      console.log(newPassengers);

      setSuccessMessage(""); // Hapus setSuccessMessage yang ada sekarang

      setSuccessMessages((prevSuccessMessages) => {
        const updatedMessages = [...prevSuccessMessages];
        updatedMessages[index] = "Data berhasil disimpan";
        return updatedMessages;
      });

      setError("");
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        setError(error.response.data.message);
      } else {
        setError("Gagal menyimpan data");
      }
      setSuccessMessage("");
    }
  };

  useEffect(() => {
    // Cek apakah pengguna sudah login atau memiliki token di lokal
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true); // Jika ada token, pengguna dianggap sudah login
    }
  }, []);

  return (
    <>
      {isLoggedIn ? <NavbarUser /> : <NavbarHomepage />}
      <div className="border-bottom shadow-sm">
        <Container className="checkout-breadcrumbs">
          <div className="checkout-breadcrumbs-1 d-flex">
            <h4 className="fw-bold">
              Isi Data Diri
              <span className="mx-sm-2" style={{ color: "#8A8A8A" }}>
                &gt;
              </span>
            </h4>
            <h4 className="fw-bold">
              Bayar
              <span className="mx-sm-2" style={{ color: "#8A8A8A" }}>
                &gt;
              </span>
            </h4>
            <h4 className="fw-bold" style={{ color: "#8A8A8A" }}>
              Selesai
            </h4>
          </div>
        </Container>
      </div>
      <Container className="checkout-biodata">
        <div className="row d-flex mt-4">
          <div className=" col-md-7">
            <Form className="border rounded-1 p-4 mb-4">
              <h4 className="fw-bold">Isi Data Pemesan</h4>
              <div className="mt-4">
                <div className="d-flex align-items-start bg-dark rounded-top-4 py-3 ">
                  <h5 className="me-auto text-white ms-4 mb-0">Data Diri Pemesan</h5>
                  {user || isFormFilled2 ? <Image className="checkout-biodata__checklist me-4" src="/Suffix.svg" alt="checklist logo" /> : ""}
                </div>
                <div className="mx-4 mt-3">
                  <p className="fw-bold mb-1">Nama Lengkap</p>
                  <div className="border rounded-1 border-2 mb-2">
                    <input className="border-0 mx-2 p-2" type="text" value={user ? user.name : ""} onChange={handleInputChange} />
                  </div>
                </div>
                <div className="mx-4 mt-3">
                  <p className="fw-bold mb-1">Nomor Telepon</p>
                  <div className="border rounded-1 border-2 mb-2">
                    <input className="border-0 mx-2 p-2" type="text" value={user ? user.phoneNumber : ""} onChange={handleInputChange} />
                  </div>
                </div>
                <div className="mx-4 mt-3 pb-3">
                  <p className="fw-bold mb-1">Email</p>
                  <div className="border rounded-1 border-2 mb-2">
                    <input className="border-0 mx-2 p-2" type="email" value={user ? user.email : ""} onChange={handleInputChange} />
                  </div>
                </div>
              </div>
            </Form>

            {forms.map((form, index) => (
              <Form className="form-passengers border rounded-1 p-4 mb-3" key={index} onSubmit={(e) => handleSubmit(e, index)}>
                <h4 className="fw-bold">Isi Data Penumpang</h4>
                <div className="mt-4">
                  <div className="d-flex align-items-start bg-dark rounded-top-4 py-3">
                    <h5 className="me-auto text-white ms-4 mb-0">Data Diri Penumpang {index + 1}</h5>
                    {successMessages[index] && <Image className="checkout-biodata__checklist me-4" src="/Suffix.svg" alt="checklist logo" />}
                    {/* {isFormFilled ? (
                      <Image
                        className="checkout-biodata__checklist me-4"
                        src="/Suffix.svg"
                        alt="checklist logo"
                      />
                    ) : (
                      ""
                    )} */}
                  </div>
                </div>
                <div className="mx-4 mt-3">
                  <p className="fw-bold mb-1">Nama</p>
                  <div className="border rounded-1 border-2 mb-2">
                    <input className="border-0 mx-2 p-2" type="text" value={form.name} onChange={(e) => handleFormChange(index, "name", e.target.value)} />
                  </div>
                  <p className="fw-bold mb-1">Tanggal Lahir</p>
                  <div className="border rounded-1 border-2 mb-2">
                    <input className="border-0 opacity-50 mx-2 p-2" type="date" value={form.born_date} onChange={(e) => handleFormChange(index, "born_date", e.target.value)} />
                  </div>
                  <p className="fw-bold mb-1">Kewarganegaraan</p>
                  <div className="border rounded-1 border-2 mb-2">
                    <input className="border-0 mx-2 p-2" type="text" value={form.citizen} onChange={(e) => handleFormChange(index, "citizen", e.target.value)} />
                  </div>
                  <p className="fw-bold mb-1">KTP/Paspor</p>
                  <div className="border rounded-1 border-2 mb-2">
                    <input className="border-0 mx-2 p-2" type="text" value={form.identity_number} onChange={(e) => handleFormChange(index, "identity_number", e.target.value)} />
                  </div>
                  <p className="fw-bold mb-1">Negara Penerbit</p>
                  <div className="border rounded-1 border-2 mb-2">
                    <input className="border-0 mx-2 p-2" name="issuing-country" id="issuing-country" value={form.publisher_country} onChange={(e) => handleFormChange(index, "publisher_country", e.target.value)}></input>
                  </div>
                  <p className="fw-bold mb-1">Berlaku Sampai</p>
                  <div className="border rounded-1 border-2 mb-2">
                    <input className="border-0 opacity-50 mx-2 p-2" type="date" value={form.valid_until} onChange={(e) => handleFormChange(index, "valid_until", e.target.value)} />
                  </div>
                  <div className="d-flex justify-content-end">
                    <button className="btn btn-primary" type="submit" style={{ background: "#7126b5", border: "none" }}>
                      Simpan
                    </button>
                  </div>

                  {error && <div className="alert alert-danger mt-3">{error}</div>}
                </div>
              </Form>
            ))}

            <Form className="border rounded-1 p-4 mb-4">
              <h4 className="fw-bold">Pilih Kursi</h4>
              <div className="mt-4">
                <div className="d-flex align-items-start bg-dark rounded-top-2 py-3 ">
                  <p className="me-auto text-white ms-4 mb-0">
                    {selectedClass} - {passenger.adult + passenger.children} Seats Chosen
                  </p>
                  <Image className="checkout-biodata__checklist me-4" src="/Suffix.svg" alt="checklist logo" />
                </div>
                <div className="mx-4 mt-3">
                  <SeatCustomer passenger={passenger.adult + passenger.children} />
                </div>
              </div>
            </Form>
            <Button className="checkout-biodata__btn-1 border-0 d-flex align-items-center justify-content-center mt-4 py-4 mb-5">Simpan</Button>
          </div>
          <div className="col-md-5 mt-md-0 mt-lg-4">
            <h4 className="fw-bold">Detail Penerbangan</h4>
            <div className="d-flex">
              <h5 className="fw-bold me-auto mb-0">{Moment(location?.state?.departure_time).format("HH:mm")}</h5>
              <p className="fw-bold mb-0" style={{ fontSize: "12px", color: "#a06ece" }}>
                Keberangkatan
              </p>
            </div>
            <p className="mb-0">{Moment(location?.state?.departure_time).format("dddd, Do MMMM  YYYY")}</p>
            <p className="fw-medium mb-0">{location?.state?.departureAirport.airport_name}</p>
            <div className="border-bottom my-2"></div>
            <div className="d-flex align-items-center">
              <div className="col-1">
                <Image className="checkout-biodata__img" src="/Image-1.svg" />
              </div>
              <div className="col-12">
                <p className="fw-bold mb-0" style={{ padding: "0" }}>
                  {location?.state?.airline.airline_name} - {selectedClass}
                </p>
                <p className="fw-bold mb-3" style={{ padding: "0" }}>
                  {location?.state?.flight_code}
                </p>
                <p className="fw-bold mb-0" style={{ padding: "0" }}>
                  Informasi:
                </p>
                <p className="mb-0">Baggage {location?.state?.airline.baggage} kg</p>
                <p className="mb-0">Cabin baggage {location?.state?.airline.cabin_baggage} kg</p>
                <p className="mb-0">In Flight Entertainment</p>
              </div>
            </div>
            <div className="border-bottom my-2"></div>
            <div className="d-flex">
              <h5 className="fw-bold me-auto mb-0">{Moment(location?.state?.arrival_time).format("HH:mm")}</h5>
              <p className="fw-bold mb-0" style={{ fontSize: "12px", color: "#a06ece" }}>
                Kedatangan
              </p>
            </div>
            <p className="mb-0">{Moment(location?.state?.arrival_time).format("dddd, Do MMMM  YYYY")}</p>
            <p className="fw-medium mb-0">{location?.state?.arrivalAirport.airport_name}</p>
            <div className="border-bottom my-2"></div>
            <div className="mx-2">
              <p className="fw-bold mb-0">Rincian Harga</p>
              <div className="d-flex">
                <p className="mb-0 me-auto">{adult} Adults</p>
                <p className="mb-0">IDR {location?.state?.business_price}</p>
              </div>
              <div className="d-flex">
                <p className="mb-0 me-auto">{children} Children</p>
                <p className="mb-0">IDR {location?.state?.business_price}</p>
              </div>
              <div className="d-flex">
                <p className="mb-0 me-auto">{baby} Baby</p>
                <p className="mb-0">IDR 0</p>
              </div>
              <div className="d-flex">
                <p className="mb-0 me-auto">Tax</p>
                <p className="mb-0">IDR {Number(location?.state?.business_price) * Number(adult + children) * 0.1}</p>
              </div>
              <div className="border-bottom my-2"></div>
              <div className="d-flex">
                <p className="mb-0 me-auto">Total</p>
                <h5 className="fw-bold mb-0" style={{ fontSize: "18px", color: "#7126B5" }}>
                  IDR {Number(location?.state?.business_price) * Number(adult + children) + Number(location?.state?.business_price) * Number(adult + children) * 0.1}
                </h5>
              </div>
              {isFormFilled && (user || isFormFilled2) ? (
                <Link to="/payment" state={location} className="text-decoration-none">
                  <Button className="checkout-biodata__btn-2 border-0 d-flex align-items-center justify-content-center mt-4 py-4">Lanjut Bayar</Button>
                </Link>
              ) : (
                <Button className="checkout-biodata__btn-3 border-0 d-flex align-items-center justify-content-center mt-4 py-4" disabled>
                  Lanjut Bayar
                </Button>
              )}
            </div>
          </div>
        </div>
      </Container>
      {token ? (
        ""
      ) : (
        <div className="position-fixed bg-dark bg-opacity-75 top-0 start-0 end-0 bottom-0 overflow-hidden d-flex justify-content-center align-items-center" style={{ zIndex: "9999" }}>
          <div className="bg-secondary-subtle d-flex justify-content-center align-items-center flex-column opacity-100 rounded-3 p-4 pt-0" style={{ height: "55%", width: "25%" }}>
            <Image src="/logofinal.png" style={{ width: "40%" }} />
            <p className="text-dark-emphasis mb-5">Your Best Traveling Partner</p>
            <h4 className="opacity-75 fw-bold mb-4">Register now to continue</h4>
            <Link to="/register" className="text-decoration-none rounded-5 text-white shadow px-4 py-2 mb-3" style={{ backgroundColor: "#A06ECE" }}>
              REGISTER NOW
            </Link>
            <Link to="/login" style={{ color: "#A06ECE" }}>
              ALREADY HAVE AN ACCOUNT?
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default CheckoutCustomerData;
