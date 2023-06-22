import React, { useState, useEffect } from "react";
import { Image, Button, Container, Form, Modal } from "react-bootstrap";
import NavbarHomepage from "./NavbarHomepage";
import NavbarUser from "../components/NavbarUser";
import SeatCustomer from "./SeatCustomer";
import { Link } from "react-router-dom";
import axios from "axios";

import "./CheckoutCustomerData.css";

const CheckoutCustomerData = () => {
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

  const handleSwitchToggle1 = () => {
    setIsChecked1(!isChecked1);
  };
  const handleSwitchToggle2 = () => {
    setIsChecked2(!isChecked2);
  };
  const handleSwitchToggle3 = () => {
    setIsChecked3(!isChecked3);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // setIsLoading(true);

    try {
      const response = await axios.post(
        "http://localhost:8000/api/v1/passengers",
        {
          name,
          born_date,
          citizen,
          identity_number,
          publisher_country,
          valid_until,
          booking_id: "1",
        }
      );

      // Handle successful registration
      const { newPassengers } = response.data.data;
      console.log(newPassengers); // Do something with newUser

      // Reset form field
      setName("");
      setBornDate("");
      setCitizen("");
      setIdentityNumber("");
      setPublisherCountry("");
      setValidUntil("");
      setBookingId("");
      setSuccessMessage("registrasi berhasil");
      setError("");
      // setShowModal(true);
    } catch (error) {
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        setError(error.response.data.message);
      } else {
        setError("Failed to register");
      }
      setSuccessMessage("");
    }

    // setIsLoading(false);
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
          <div className="checkout-breadcrumbs__alert mt-2 mb-4 mx-4">
            <h5 className="col-12 text-center text-white py-3 rounded-4">
              Data Anda berhasil tersimpan!
            </h5>
          </div>
        </Container>
      </div>
      <Container className="checkout-biodata">
        <Form className="row d-flex mt-4" onSubmit={handleSubmit}>
          <div className=" col-md-7">
            <div className="border rounded-1 p-4 mb-4">
              <h4 className="fw-bold">Isi Data Pemesan</h4>
              <div className="mt-4">
                <div className="d-flex align-items-start bg-dark rounded-top-4 py-3 ">
                  <h5 className="me-auto text-white ms-4 mb-0">
                    Data Diri Pemesan
                  </h5>
                  <Image
                    className="checkout-biodata__checklist me-4"
                    src="/Suffix.svg"
                    alt="checklist logo"
                  />
                </div>
                <div className="mx-4 mt-3">
                  <p className="fw-bold mb-1">Nama Lengkap</p>
                  <div className="border rounded-1 border-2 mb-2">
                    <input
                      className="border-0 mx-2 p-2"
                      type="text"
                      defaultValue="Harry"
                    />
                  </div>
                  <div className="d-flex">
                    <p className="me-auto mb-0">Punya Nama Keluarga?</p>
                    <label className="switch me-1">
                      <input
                        className="switch__input"
                        type="checkbox"
                        checked={isChecked1}
                        onChange={handleSwitchToggle1}
                      />
                      <span className="slider"></span>
                    </label>
                  </div>
                </div>
                <div className="mx-4 mt-3">
                  <p className="fw-bold mb-1">Nama Keluarga</p>
                  <div className="border rounded-1 border-2 mb-2">
                    <input
                      className="border-0 mx-2 p-2"
                      type="text"
                      defaultValue="Potter"
                    />
                  </div>
                </div>
                <div className="mx-4 mt-3">
                  <p className="fw-bold mb-1">Nomor Telepon</p>
                  <div className="border rounded-1 border-2 mb-2">
                    <input
                      className="border-0 mx-2 p-2"
                      type="text"
                      defaultValue="Potter"
                    />
                  </div>
                </div>
                <div className="mx-4 mt-3 pb-3">
                  <p className="fw-bold mb-1">Email</p>
                  <div className="border rounded-1 border-2 mb-2">
                    <input
                      className="border-0 mx-2 p-2"
                      type="email"
                      defaultValue="Johndoe@gmail.com"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="border rounded-1 p-4 mb-3">
              <h4 className="fw-bold">Isi Data Penumpang </h4>
              <div className="mt-4">
                <div className="d-flex align-items-start bg-dark rounded-top-4 py-3 ">
                  <h5 className="me-auto text-white ms-4 mb-0">
                    Data Diri Penumpang 1 - Adult
                  </h5>
                  <Image
                    className="checkout-biodata__checklist me-4"
                    src="/Suffix.svg"
                    alt="checklist logo"
                  />
                </div>
                <div className="mx-4 mt-3">
                  <p className="fw-bold mb-1">Title</p>
                  <div className="border rounded-1 border-2 mb-2">
                    <select
                      className="border-0 mx-2 p-2"
                      name="title"
                      id="title"
                    >
                      <option value="mr">Mr.</option>
                      <option value="ms">Ms.</option>
                      <option value="mrs">Mrs</option>
                    </select>
                  </div>
                </div>
                <div className="mx-4 mt-3">
                  <p className="fw-bold mb-1">Nama Lengkap</p>
                  <div className="border rounded-1 border-2 mb-2">
                    <input
                      className="border-0 mx-2 p-2"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="d-flex">
                    <p className="me-auto mb-0">Punya Nama Keluarga?</p>
                    <label className="switch me-1">
                      <input
                        className="switch__input"
                        type="checkbox"
                        checked={isChecked2}
                        onChange={handleSwitchToggle2}
                      />
                      <span className="slider"></span>
                    </label>
                  </div>
                </div>
                <div className="mx-4 mt-3">
                  <p className="fw-bold mb-1">Nama Keluarga</p>
                  <div className="border rounded-1 border-2 mb-2">
                    <input
                      className="border-0 mx-2 p-2"
                      type="text"
                      defaultValue="Potter"
                    />
                  </div>
                </div>
                <div className="mx-4 mt-3">
                  <p className="fw-bold mb-1">Tanggal Lahir</p>
                  <div className="border rounded-1 border-2 mb-2">
                    <input
                      className="border-0 opacity-50 mx-2 p-2"
                      type="date"
                      value={born_date}
                      onChange={(e) => setBornDate(e.target.value)}
                    />
                  </div>
                </div>
                <div className="mx-4 mt-3">
                  <p className="fw-bold mb-1">Kewarganegaraan</p>
                  <div className="border rounded-1 border-2 mb-2">
                    <input
                      className="border-0 mx-2 p-2"
                      type="text"
                      value={citizen}
                      onChange={(e) => setCitizen(e.target.value)}
                    />
                  </div>
                </div>
                <div className="mx-4 mt-3">
                  <p className="fw-bold mb-1">KTP/Paspor</p>
                  <div className="border rounded-1 border-2 mb-2">
                    <input
                      className="border-0 mx-2 p-2"
                      type="text"
                      value={identity_number}
                      onChange={(e) => setIdentityNumber(e.target.value)}
                    />
                  </div>
                </div>
                <div className="mx-4 mt-3">
                  <p className="fw-bold mb-1">Negara Penerbit</p>
                  <div className="border rounded-1 border-2 mb-2">
                    <input
                      className="border-0 mx-2 p-2"
                      name="issuing-country"
                      id="issuing-country"
                      value={publisher_country}
                      onChange={(e) => setPublisherCountry(e.target.value)}
                    >
                      {/* <option value=""></option> */}
                    </input>
                  </div>
                </div>
                <div className="mx-4 mt-3">
                  <p className="fw-bold mb-1">Berlaku Sampai</p>
                  <div className="border rounded-1 border-2 mb-2">
                    <input
                      className="border-0 opacity-50 mx-2 p-2"
                      type="date"
                      value={valid_until}
                      onChange={(e) => setValidUntil(e.target.value)}
                    />
                  </div>
                </div>
                {/* <div className="mx-4 mt-3">
                  <p className="fw-bold mb-1">booking id</p>
                  <div className="border rounded-1 border-2 mb-2">
                    <input className="border-0 mx-2 p-2" name="issuing-country" id="issuing-country" value={booking_id} onChange={(e) => setPublisherCountry(e.target.value)}>
                      <option value=""></option>
                    </input>
                  </div>
                </div> */}
              </div>
              <div className="mt-4">
                <div className="d-flex align-items-start bg-dark rounded-top-3 py-3 ">
                  <h5 className="me-auto text-white ms-4 mb-0">
                    Data Diri Penumpang 2 - Adult
                  </h5>
                  <Image
                    className="checkout-biodata__checklist me-4"
                    src="/Suffix.svg"
                    alt="checklist logo"
                  />
                </div>
                <div className="mx-4 mt-3">
                  <p className="fw-bold mb-1">Title</p>
                  <div className="border rounded-1 border-2 mb-2">
                    <select
                      className="border-0 mx-2 p-2"
                      name="title"
                      id="title"
                    >
                      <option value="mr">Mr.</option>
                      <option value="ms">Ms.</option>
                      <option value="mrs">Mrs</option>
                    </select>
                  </div>
                </div>
                <div className="mx-4 mt-3">
                  <p className="fw-bold mb-1">Nama Lengkap</p>
                  <div className="border rounded-1 border-2 mb-2">
                    <input
                      className="border-0 mx-2 p-2"
                      type="text"
                      defaultValue="Harry"
                    />
                  </div>
                  <div className="d-flex">
                    <p className="me-auto mb-0">Punya Nama Keluarga?</p>
                    <label className="switch me-1">
                      <input
                        className="switch__input"
                        type="checkbox"
                        checked={isChecked3}
                        onChange={handleSwitchToggle3}
                      />
                      <span className="slider"></span>
                    </label>
                  </div>
                </div>
                <div className="mx-4 mt-3">
                  <p className="fw-bold mb-1">Nama Keluarga</p>
                  <div className="border rounded-1 border-2 mb-2">
                    <input
                      className="border-0 mx-2 p-2"
                      type="text"
                      defaultValue="Potter"
                    />
                  </div>
                </div>
                <div className="mx-4 mt-3">
                  <p className="fw-bold mb-1">Tanggal Lahir</p>
                  <div className="border rounded-1 border-2 mb-2">
                    <input
                      className="border-0 opacity-50 mx-2 p-2"
                      type="date"
                    />
                  </div>
                </div>
                <div className="mx-4 mt-3">
                  <p className="fw-bold mb-1">Kewarganegaraan</p>
                  <div className="border rounded-1 border-2 mb-2">
                    <input
                      className="border-0 mx-2 p-2"
                      type="text"
                      defaultValue="Indonesia"
                    />
                  </div>
                </div>
                <div className="mx-4 mt-3">
                  <p className="fw-bold mb-1">KTP/Paspor</p>
                  <div className="border rounded-1 border-2 mb-2">
                    <input className="border-0 mx-2 p-2" type="text" />
                  </div>
                </div>
                <div className="mx-4 mt-3">
                  <p className="fw-bold mb-1">Negara Penerbit</p>
                  <div className="border rounded-1 border-2 mb-2">
                    <select
                      className="border-0 mx-2 p-2"
                      name="issuing-country"
                      id="issuing-country"
                    >
                      <option value=""></option>
                    </select>
                  </div>
                </div>
                <div className="mx-4 mt-3">
                  <p className="fw-bold mb-1">Berlaku Sampai</p>
                  <div className="border rounded-1 border-2 mb-2">
                    <input
                      className="border-0 opacity-50 mx-2 p-2"
                      type="date"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="border rounded-1 p-4 mb-4">
              <h4 className="fw-bold">Pilih Kursi</h4>
              <div className="mt-4">
                <div className="d-flex align-items-start bg-dark rounded-top-2 py-3 ">
                  <p className="me-auto text-white ms-4 mb-0">
                    Economy - 2 Seats Chosen
                  </p>
                  <Image
                    className="checkout-biodata__checklist me-4"
                    src="/Suffix.svg"
                    alt="checklist logo"
                  />
                </div>
                <div className="mx-4 mt-3">
                  <SeatCustomer />
                </div>
              </div>
            </div>
            <Button
              className="checkout-biodata__btn-1 border-0 d-flex align-items-center justify-content-center mt-4 py-4 mb-5"
              type="submit"
            >
              Simpan
            </Button>
          </div>
          <div className="col-md-5 mt-md-0 mt-lg-4">
            <h4 className="fw-bold">Detail Penerbangan</h4>
            <div className="d-flex">
              <h5 className="fw-bold me-auto mb-0">07:00</h5>
              <p
                className="fw-bold mb-0"
                style={{ fontSize: "12px", color: "#a06ece" }}
              >
                Keberangkatan
              </p>
            </div>
            <p className="mb-0">3 Maret 2023</p>
            <p className="fw-medium mb-0">
              Soekarno Hatta - Terminal 1A Domestik
            </p>
            <div className="border-bottom my-2"></div>
            <div className="d-flex align-items-center">
              <div className="col-1">
                <Image className="checkout-biodata__img" src="/Image-1.svg" />
              </div>
              <div className="col-12">
                <p className="fw-bold mb-0">Jet Air - Economy</p>
                <p className="fw-bold mb-3">JT - 203</p>
                <p className="fw-bold mb-0">Informasi:</p>
                <p className="mb-0">Baggage 20 kg</p>
                <p className="mb-0">Cabin baggage 7 kg</p>
                <p className="mb-0">In Flight Entertainment</p>
              </div>
            </div>
            <div className="border-bottom my-2"></div>
            <div className="d-flex">
              <h5 className="fw-bold me-auto mb-0">11:00</h5>
              <p
                className="fw-bold mb-0"
                style={{ fontSize: "12px", color: "#a06ece" }}
              >
                Keberangkatan
              </p>
            </div>
            <p className="mb-0">3 Maret 2023</p>
            <p className="fw-medium mb-0">Melbourne International Airport</p>
            <div className="border-bottom my-2"></div>
            <div className="mx-2">
              <p className="fw-bold mb-0">Rincian Harga</p>
              <div className="d-flex">
                <p className="mb-0 me-auto">2 Adults</p>
                <p className="mb-0">IDR 9.550.000</p>
              </div>
              <div className="d-flex">
                <p className="mb-0 me-auto">1 Baby</p>
                <p className="mb-0">IDR 0</p>
              </div>
              <div className="d-flex">
                <p className="mb-0 me-auto">Tax</p>
                <p className="mb-0">IDR 300.000</p>
              </div>
              <div className="border-bottom my-2"></div>
              <div className="d-flex">
                <p className="mb-0 me-auto">Total</p>
                <h5
                  className="fw-bold mb-0"
                  style={{ fontSize: "18px", color: "#7126B5" }}
                >
                  IDR 9.850.000
                </h5>
              </div>
              <Link to="/payment" className="text-decoration-none">
                <Button className="checkout-biodata__btn-2 border-0 d-flex align-items-center justify-content-center mt-4 py-4">
                  Lanjut Bayar
                </Button>
              </Link>
            </div>
          </div>
        </Form>
      </Container>
    </>
  );
};

export default CheckoutCustomerData;
