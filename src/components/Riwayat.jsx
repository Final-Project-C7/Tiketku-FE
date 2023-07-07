import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { Image, Button, Container, Form, Card } from "react-bootstrap";
import NavbarUser from "./NavbarUser";
import Header from "./Header";
import axios from "axios";
import jwt_decode from "jwt-decode";
import Moment from "moment";

import "./Riwayat.css";

const Riwayat = () => {
  const token = localStorage.getItem("token");
  const [bookingData, setBookingData] = useState();

  useEffect(() => {
    const fetchBookingData = async () => {
      try {
        const token = localStorage.getItem("token");
        const decodedToken = jwt_decode(token);
        const user_id = decodedToken.id;
        const headers = { Authorization: `Bearer ${token}` };
        console.log(user_id);
        const response = await axios.get(
          `https://c7-tiketku.up.railway.app/api/v1/bookings?user_id=${user_id}`,
          { headers }
        );
        setBookingData(response.data.data.bookings);
        console.log(response.data.data.bookings[2]);
      } catch (error) {
        console.error(error);
      }
    };

    fetchBookingData();
  }, []);
  return (
    <>
      <NavbarUser />
      {token ? (
        <div>
          <div className="border-bottom shadow-sm">
            <Container className="history">
              <div className="d-flex">
                <h4 className="fw-bold"> Riwayat Pemesanan</h4>
              </div>
              <Header />
            </Container>
          </div>
          <Container className="checkout-biodata">
            <Form className="row d-flex mt-4">
              {Array.isArray(bookingData) &&
                bookingData.map((booking) => (
                  <div className="col-12 mt-0" key={booking.id}>
                    <div className="mb-3">
                      <h4 className="fw-bold">
                        {" "}
                        {Moment(booking.createdAt).format(
                          "dddd, Do MMMM  YYYY"
                        )}
                      </h4>
                      <div
                        className="p-3 rounded-3 mb-2"
                        style={{ border: "2px solid rgba(113, 38, 181, 0.75)" }}
                      >
                        <p
                          className="col-2 rounded-5 text-white text-center p-1 mb-4 text-un"
                          style={{ backgroundColor: "#73ca5c" }}
                        >
                          Success
                        </p>
                        <div className="d-flex">
                          <div className="col-1 text-center">
                            <Image src="/Live-area.svg" />
                          </div>
                          <div className="col-3">
                            <p className="fw-bold mb-0 text-dark">
                              {booking?.flight?.departureAirport?.city}
                            </p>
                            <p className="mb-0">
                              {Moment(booking?.flight?.departure_time).format(
                                "dddd, Do MMMM  YYYY"
                              )}
                            </p>
                            <p className="mb-0"></p>
                          </div>
                          <div className="col-4 d-flex flex-column justify-content-center align-items-center mb-4">
                            <p className="mb-0"></p>
                            <Image src="/Union.svg" />
                          </div>
                          <div className="col-1 text-center">
                            <Image src="/Live-area.svg" />
                          </div>
                          <div className="col-3 d-flex flex-column">
                            <p className="fw-bold mb-0 text-dark">
                              {booking?.flight?.arrivalAirport?.city}
                            </p>
                            <p className="mb-0">
                              {Moment(booking?.flight?.arrival_time).format(
                                "dddd, Do MMMM  YYYY"
                              )}
                            </p>
                            <p className="mb-0"></p>
                          </div>
                        </div>
                        <div className="border-bottom border-2 mt-1 mb-3"></div>
                        <div className="d-flex align-items-center">
                          <div className="col-4">
                            <p className="fw-bold mb-0 text-dark">
                              Booking Code:
                            </p>
                            <p className="mb-0">
                              {booking?.payment?.payment_code}
                            </p>
                          </div>
                          <div className="col-4 offset-1">
                            <p className="fw-bold mb-0 text-dark">Class:</p>
                            <p className="mb-0">Economy</p>
                          </div>
                          <div className="col-3">
                            <p
                              className="fw-bold mb-0"
                              style={{ color: "#4B1979" }}
                            >
                              IDR {booking.amount}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

              {/* DETAIL PESANAN */}
              {/* <div className="col-5 mt-0">
                <div className="d-flex card-pad-1">
                  <h4 className="me-auto fw-bold">Detail Pesanan</h4>
                  <p
                    className="col-2 rounded-5 text-white text-center p-1 mb-4 text-un"
                    style={{ backgroundColor: "#73ca5c" }}
                  >
                    Issued
                  </p>
                </div>
                <div className="d-flex">
                  <h6 className="me-1 mb-2">Booking Code :</h6>
                  <p className="bookingtext fw-bold mb-2">6723y2GHK</p>
                </div>
                <div className="d-flex">
                  <h5 className="fw-bold me-auto mb-0">19:10</h5>
                  <p
                    className="fw-bold mb-0"
                    style={{ fontSize: "12px", color: "#a06ece" }}
                  >
                    Keberangkatan
                  </p>
                </div>
                <p className="mb-0 text-dark">3 Maret 2023</p>
                <p className="fw-medium mb-0 text-dark">
                  Soekarno Hatta - Terminal 1A Domestik
                </p>
                <div className="border-bottom my-2"></div>
                <div className="d-flex align-items-center">
                  <div className="col-1">
                    <Image
                      className="checkout-biodata__img"
                      src="/Image-1.svg"
                    />
                  </div>
                  <div className="col-12">
                    <p className="fw-bold mb-0 text-dark">Jet Air - Economy</p>
                    <p className="fw-bold mb-3 text-dark">JT - 203</p>
                    <p className="fw-bold mb-0 text-dark">Informasi:</p>
                    <p className="mb-0">Penumpang 1 : Mr. Harry Potter</p>
                    <p className="mb-0 text-dark">Id : 123456</p>
                    <p className="mb-0">Penumpang 2 : Mrs. Harry Potter</p>
                    <p className="mb-0 text-dark">Id : 123456</p>
                  </div>
                </div>
                <div className="border-bottom my-2"></div>
                <div className="d-flex">
                  <h5 className="fw-bold me-auto mb-0">21:10</h5>
                  <p
                    className="fw-bold mb-0"
                    style={{ fontSize: "12px", color: "#a06ece" }}
                  >
                    Kedatangan
                  </p>
                </div>
                <p className="mb-0 text-dark">3 Maret 2023</p>
                <p className="fw-medium mb-0 text-dark">
                  Melbourne International Airport
                </p>
                <div className="border-bottom my-2"></div>
                <div className="mx-2">
                  <p className="fw-bold mb-0 text-dark">Rincian Harga</p>
                  <div className="d-flex">
                    <p className="mb-0 me-auto text-dark">2 Adults</p>
                    <p className="mb-0">IDR 9.550.000</p>
                  </div>
                  <div className="d-flex">
                    <p className="mb-0 me-auto text-dark">1 Baby</p>
                    <p className="mb-0 text-dark">IDR 0</p>
                  </div>
                  <div className="d-flex">
                    <p className="mb-0 me-auto text-dark">Tax</p>
                    <p className="mb-0 text-dark">IDR 300.000</p>
                  </div>
                  <div className="border-bottom my-2"></div>
                  <div className="d-flex">
                    <p className="mb-0 me-auto text-dark">Total</p>
                    <h5
                      className="fw-bold mb-0"
                      style={{ fontSize: "18px", color: "#7126B5" }}
                    >
                      IDR 9.850.000
                    </h5>
                  </div>
                  <Button className="checkout-biodata__btn-21 border-0 d-flex align-items-center justify-content-center mt-4 py-4">
                    Cetak Tiket
                  </Button>
                </div>
              </div> */}
            </Form>
          </Container>
        </div>
      ) : (
        <Navigate to="/login" />
      )}
    </>
  );
};

export default Riwayat;
