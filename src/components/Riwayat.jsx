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
  const [selectedBookingId, setSelectedBookingId] = useState(null);
  const [selectedBooking, setSelectedBooking] = useState(null);

  const handleCardClick = (bookingId) => {
    const selectedBooking = bookingData.find(
      (booking) => booking.id === bookingId
    );
    setSelectedBookingId(bookingId);
    setSelectedBooking(selectedBooking);
  };

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

  const calculateDuration = (departureTime, arrivalTime) => {
    const departureMoment = Moment(departureTime);
    const arrivalMoment = Moment(arrivalTime);

    const durationMilliseconds = arrivalMoment.diff(departureMoment);
    const duration = Moment.duration(durationMilliseconds);

    return `${duration.hours()}h ${duration.minutes()}m`;
  };

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
              <div className="col-7 mt-0">
                {Array.isArray(bookingData) &&
                  bookingData.map((booking) => (
                    <div
                      key={booking.id}
                      onClick={() => handleCardClick(booking.id)}
                    >
                      <div className="mb-3">
                        <h4 className="fw-bold">
                          {" "}
                          {Moment(booking.createdAt).format(
                            "dddd, Do MMMM  YYYY"
                          )}
                        </h4>
                        <div
                          className={`checkout-biodata-card border border-3 ${
                            selectedBookingId === booking.id
                              ? "checkout-biodata-card__selected"
                              : ""
                          } rounded-3 p-3  mb-2`}
                        >
                          {booking?.payment?.payment_status === "settlement" ||
                          booking?.payment?.payment_status === "capture" ? (
                            <p
                              className="col-2 rounded-5 text-white text-center p-1 mb-4 text-un"
                              style={{ backgroundColor: "#73ca5c" }}
                            >
                              Success
                            </p>
                          ) : booking?.payment?.payment_status === "cancel" ? (
                            <p
                              className="col-2 rounded-5 text-white text-center p-1 mb-4 text-un"
                              style={{ backgroundColor: "#ff0000" }}
                            >
                              Unpaid
                            </p>
                          ) : booking?.payment?.payment_status === "expire" ? (
                            <p
                              className="col-2 rounded-5 text-white text-center p-1 mb-4 text-un"
                              style={{ backgroundColor: "#DF9947" }}
                            >
                              Expired
                            </p>
                          ) : (
                            <p
                              className="col-2 rounded-5 text-white text-center p-1 mb-4 text-un"
                              style={{ backgroundColor: "#c0c0c0" }} // Gray color
                            >
                              Cancel
                            </p>
                          )}

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
                              <p className="mb-0">
                                {Moment(booking?.flight?.departure_time).format(
                                  "HH:mm"
                                )}
                              </p>
                              <p className="mb-0"></p>
                            </div>
                            <div className="col-4 d-flex flex-column justify-content-center align-items-center mb-4">
                              <p className="mb-0">
                                {calculateDuration(
                                  booking?.flight?.departure_time,
                                  booking?.flight?.arrival_time
                                )}
                              </p>
                              <Image src="/Union.svg" />
                              <p className="mb-0">Direct</p>
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
                              <p className="mb-0">
                                {Moment(booking?.flight?.arrival_time).format(
                                  "HH:mm"
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
                                {"IDR " +
                                  Number(booking.amount)
                                    .toLocaleString("en-ID")
                                    .replace(/,/g, ".")}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>

              {/* DETAIL PESANAN */}
              {selectedBooking && (
                <div className="col-5 mt-0">
                  <div className="d-flex card-pad-1">
                    <h4 className="me-auto fw-bold">Detail Pesanan</h4>
                    {/* Payment status */}
                    {selectedBooking?.payment?.payment_status ===
                      "settlement" ||
                    selectedBooking?.payment?.payment_status === "capture" ? (
                      <p
                        className="d-inline-block rounded-5 text-white text-center px-3 py-1 mb-2 text-un"
                        style={{
                          backgroundColor: "#73ca5c",
                        }}
                      >
                        Success
                      </p>
                    ) : selectedBooking?.payment?.payment_status ===
                      "cancel" ? (
                      <p
                        className="d-inline-block rounded-5 text-white text-center px-3 py-1 mb-2 text-un"
                        style={{ backgroundColor: "#ff0000" }}
                      >
                        Unpaid
                      </p>
                    ) : selectedBooking?.payment?.payment_status ===
                      "expire" ? (
                      <p
                        className="d-inline-block rounded-5 text-white text-center px-3 py-1 mb-2 text-un"
                        style={{ backgroundColor: "#DF9947" }}
                      >
                        Expired
                      </p>
                    ) : (
                      <p
                        className="d-inline-block rounded-5 text-white text-center px-3 py-1 mb-2 text-un"
                        style={{ backgroundColor: "#c0c0c0" }} // Gray color
                      >
                        Cancel
                      </p>
                    )}
                  </div>
                  <div className="d-flex">
                    <h6 className="me-1 mb-2">Booking Code :</h6>
                    <p className="bookingtext fw-bold mb-2">
                      {selectedBooking?.payment?.payment_code}
                    </p>
                  </div>
                  <div className="d-flex">
                    <h5 className="fw-bold me-auto mb-0">
                      {Moment(selectedBooking?.flight?.departure_time).format(
                        "HH:mm"
                      )}
                    </h5>
                    <p
                      className="fw-bold mb-0"
                      style={{ fontSize: "12px", color: "#a06ece" }}
                    >
                      Keberangkatan
                    </p>
                  </div>
                  <p className="mb-0 text-dark">
                    {Moment(selectedBooking?.flight?.departure_time).format(
                      "D MMMM YYYY"
                    )}
                  </p>
                  <p className="fw-medium mb-0 text-dark">
                    {selectedBooking?.flight?.departureAirport?.airport_name} -{" "}
                    {selectedBooking?.flight?.departureAirport?.city}
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
                      <p className="fw-bold mb-2 text-dark">
                        {selectedBooking?.flight?.airline?.airline_name} -{" "}
                        {selectedBooking?.flight?.flight_code}
                      </p>
                      <p className="fw-bold mb-0 text-dark">Informasi:</p>
                      <p className="fw-medium text-dark mb-0">
                        Baggage {selectedBooking?.flight?.airline?.baggage}
                      </p>
                      <p className="fw-medium text-dark mb-0">
                        Cabin Baggage{" "}
                        {selectedBooking?.flight?.airline?.cabin_baggage}
                      </p>
                      <p className="fw-medium text-dark mb-0">
                        In Flight Entertainment
                      </p>
                    </div>
                  </div>
                  <div className="border-bottom my-2"></div>
                  <div className="d-flex">
                    <h5 className="fw-bold me-auto mb-0">
                      {Moment(selectedBooking?.flight?.arrival_time).format(
                        "HH:mm"
                      )}
                    </h5>
                    <p
                      className="fw-bold mb-0"
                      style={{ fontSize: "12px", color: "#a06ece" }}
                    >
                      Kedatangan
                    </p>
                  </div>
                  <p className="mb-0 text-dark">
                    {Moment(selectedBooking?.flight?.arrival_time).format(
                      "D MMMM YYYY"
                    )}
                  </p>
                  <p className="fw-medium mb-0 text-dark">
                    {selectedBooking?.flight?.arrivalAirport?.airport_name} -{" "}
                    {selectedBooking?.flight?.arrivalAirport?.city}
                  </p>
                  <div className="border-bottom my-2"></div>
                  <div className="mx-2">
                    <p className="fw-bold mb-0 text-dark">Rincian Harga</p>
                    <div className="d-flex">
                      <p className="mb-0 me-auto text-dark">
                        {selectedBooking?.passengers?.length} Adults
                      </p>
                      <p className="mb-0">
                        IDR{" "}
                        {Number(selectedBooking?.amount)
                          .toLocaleString("en-ID")
                          .replace(/,/g, ".")}
                      </p>
                    </div>
                    {/* Add other pricing details based on your API response */}
                    <div className="border-bottom my-2"></div>
                    <div className="d-flex">
                      <p className="mb-0 me-auto text-dark">Total</p>
                      <h5
                        className="fw-bold mb-0"
                        style={{ fontSize: "18px", color: "#7126B5" }}
                      >
                        IDR{" "}
                        {Number(selectedBooking?.amount)
                          .toLocaleString("en-ID")
                          .replace(/,/g, ".")}
                      </h5>
                    </div>
                    <Button className="checkout-biodata__btn-21 border-0 d-flex align-items-center justify-content-center mt-4 py-4">
                      Cetak Tiket
                    </Button>
                  </div>
                </div>
              )}
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
