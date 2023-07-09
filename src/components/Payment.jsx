import React, { useState, useEffect } from "react";
import { Image, Button, Container, Form } from "react-bootstrap";
import NavbarUser from "./NavbarUser";
import NavbarHomepage from "./NavbarHomepage";
import NotifModal from "./Beranda/NotifModal";
import { Link, useLocation } from "react-router-dom";
import "./Payment.css";
import Moment from "moment";
import axios from "axios";
import { useSelector } from "react-redux";

const Payment = (props) => {
  const [expanded, setExpanded] = useState(false);

  const [isLoggedIn, setIsLoggedIn] = useState(false); // State untuk menyimpan status login pengguna

  useEffect(() => {
    // Cek apakah pengguna sudah login atau memiliki token di lokal
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true); // Jika ada token, pengguna dianggap sudah login
    }
  }, []);

  const location = useLocation();
  // console.log(location);
  // console.log(location?.state?.state?.business_price);
  const { selectedClass } = useSelector((state) => state.class);
  const { items } = useSelector((state) => state.booking);
  const bookingId = items[0].newBookings.id;
  const { adult, children, baby } = useSelector((state) => state.passenger);
  const [bookingData, setBookingData] = useState(null);

  useEffect(() => {
    const fetchBookingData = async () => {
      try {
        const token = localStorage.getItem("token");
        const headers = { Authorization: `Bearer ${token}` };
        const response = await axios.get(
          `https://c7-tiketku.up.railway.app/api/v1/bookings/${bookingId}`,
          { headers }
        );
        setBookingData(response.data.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchBookingData();
  }, []);

  const handleExpand = () => {
    setExpanded(!expanded);
  };

  const handleSubmit = async (e, index) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");
      const headers = { Authorization: `Bearer ${token}` };
      const response = await axios.post(
        "https://c7-tiketku.up.railway.app/api/v1/payments",
        {
          order_id: bookingData.id,
        },
        { headers }
      );

      const redirectUrl = response.data; // URL yang akan dituju
      window.open(redirectUrl, "_blank");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      {isLoggedIn ? <NavbarUser /> : <NavbarHomepage />}
      <div className="border-bottom shadow-sm">
        <Container className="checkout-breadcrumbs">
          <div className="d-flex">
            <h4 className="fw-bold">
              Isi Data Diri
              <span className="mx-2" style={{ color: "#8A8A8A" }}>
                &gt;
              </span>
            </h4>
            <h4 className="fw-bold">
              Bayar
              <span className="mx-2" style={{ color: "#8A8A8A" }}>
                &gt;
              </span>
            </h4>
            <h4 className="fw-bold" style={{ color: "#8A8A8A" }}>
              Selesai
            </h4>
          </div>
          {/* <div className="checkout-breadcrumbs__alert mt-2 mb-4 mx-4">
            <h5 className="col-12 text-center text-white py-3 rounded-4">
              Data Anda berhasil tersimpan!
            </h5>
          </div> */}
        </Container>
      </div>
      <Container className="payment">
        <div className="row d-flex my-5">
          <div className="payment-booking-code col-6 mt-5 mt-md-0">
            <h4 className="fw-bold mb-3">
              Booking Code:
              <span className="fw-bold" style={{ color: "#7126B5" }}>
                6723y2GHK
              </span>
            </h4>
            <div className="d-flex align-items-center">
              <h5 className="fw-bold me-auto mb-0">
                {Moment(location?.state?.state?.departure_time).format("HH:mm")}
              </h5>
              <p
                className="fw-bold mb-0"
                style={{ fontSize: "12px", color: "#a06ece" }}
              >
                Keberangkatan
              </p>
            </div>
            <p className="mb-0">
              {Moment(location?.state?.state?.arrival_time).format(
                "dddd, Do MMMM  YYYY"
              )}
            </p>
            <p className="fw-medium mb-0">
              {location?.state?.state?.departureAirport.airport_name}
            </p>
            <div className="border-bottom my-2"></div>
            <div className="d-flex align-items-center">
              <div className="col-1">
                <Image
                  className="payment-booking-code__img"
                  src="/Image-1.svg"
                />
              </div>
              <div className="col-12">
                <p className="fw-bold mb-0">
                  {location?.state?.state?.airline.airline_name} -{" "}
                  {selectedClass}
                </p>
                <p className="fw-bold mb-3">
                  {location?.state?.state?.flight_code}
                </p>
                <p className="fw-bold mb-0">Informasi:</p>
                <p className="mb-0">
                  Baggage {location?.state?.state?.airline.baggage} kg
                </p>
                <p className="mb-0">
                  Cabin baggage {location?.state?.state?.airline.cabin_baggage}{" "}
                  kg
                </p>
                <p className="mb-0">In Flight Entertainment</p>
              </div>
            </div>
            <div className="border-bottom my-2"></div>
          </div>
          <div className="payment-booking-code col-6 mt-5 mt-md-0">
            <div className="d-flex align-items-center mt-5">
              <p className="fw-bold me-auto mb-0">
                {/* {Moment(location?.state?.state?.arrival_time).format("HH:mm")} */}
              </p>
              <p
                className="fw-bold mb-0"
                style={{ fontSize: "12px", color: "#a06ece" }}
              >
                Kedatangan
              </p>
            </div>
            <p className="mb-0">
              {Moment(location?.state?.state?.arrival_time).format(
                "dddd, Do MMMM  YYYY"
              )}
            </p>
            <p className="fw-medium mb-0">
              {location?.state?.state?.arrivalAirport.airport_name}
            </p>
            <div className="border-bottom my-2"></div>
            <div className="mx-2">
              <p className="fw-bold mb-0">Rincian Harga</p>
              <div className="d-flex">
                <p className="mb-0 me-auto">{adult} Adults</p>
                <p className="mb-0">
                  IDR {location?.state?.state?.business_price}
                </p>
              </div>
              <div className="d-flex">
                <p className="mb-0 me-auto">{children} Children</p>
                <p className="mb-0">
                  IDR {location?.state?.state?.business_price}
                </p>
              </div>
              <div className="d-flex">
                <p className="mb-0 me-auto">{baby} Baby</p>
                <p className="mb-0">IDR 0</p>
              </div>
              <div className="d-flex">
                <p className="mb-0 me-auto">Tax</p>
                <p className="mb-0">
                  IDR{" "}
                  {Number(location?.state?.state?.business_price) *
                    Number(adult + children) *
                    0.1}
                </p>
              </div>
              <div className="border-bottom my-2"></div>
              <div className="d-flex">
                <h5 className="fw-bold mb-0 me-auto">Total</h5>
                <h5
                  className="fw-bold mb-0"
                  style={{ fontSize: "18px", color: "#7126B5" }}
                >
                  IDR{" "}
                  {Number(location?.state?.state?.business_price) *
                    Number(adult + children) +
                    Number(location?.state?.state?.business_price) *
                      Number(adult + children) *
                      0.1}
                </h5>
              </div>
            </div>
          </div>

          <Form onSubmit={handleSubmit}>
            <Button
              className="checkout-biodata__btn-2 border-0 d-flex align-items-center justify-content-center mt-4 py-4"
              type="submit"
            >
              Bayar
            </Button>
            {/* <button className="btn-pay mt-3 text-white mx-2 py-rounded-2" type="submit">Bayar Lah</button> */}
          </Form>
        </div>
      </Container>
      {isLoggedIn ? (
        ""
      ) : (
        <div
          className="position-fixed bg-dark bg-opacity-75 top-0 start-0 end-0 bottom-0 overflow-hidden d-flex justify-content-center align-items-center"
          style={{ zIndex: "9999" }}
        >
          <div
            className="bg-secondary-subtle d-flex justify-content-center align-items-center flex-column opacity-100 rounded-3 p-4 pt-0"
            style={{ height: "55%", width: "25%" }}
          >
            <Image src="/logofinal.png" style={{ width: "40%" }} />
            <p className="text-dark-emphasis mb-5">
              Your Best Traveling Partner
            </p>
            <h4 className="opacity-75 fw-bold mb-4">
              Register now to continue
            </h4>
            <Link
              to="/register"
              className="text-decoration-none rounded-5 text-white shadow px-4 py-2 mb-3"
              style={{ backgroundColor: "#A06ECE" }}
            >
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

export default Payment;
