import React, { useEffect, useState } from "react";
import "./Result.css";
import { Card, Button, Row, Col } from "react-bootstrap";
import loading from "/Airlane.svg";
import koper from "/Koper.svg";
import panah from "/expand_circle_down.svg";
import NavbarHomepage from "./NavbarHomepage";
import SelectDay from "./Filter/SelectDay";
import MyModal from "./Beranda/MyModal";
import Filter from "./Filter/Filter";
import Moment from "moment";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Result from "./Result";
import CheckoutCustomerData from "./CheckoutCustomerData";
import { useSelector } from "react-redux";

const ResultFlightList = (props) => {
  const [expandedCards, setExpandedCards] = useState([]);

  const [user_id, setUserId] = useState("");
  const [flight_id, setFlightId] = useState("");
  const [order_date, setOrderDate] = useState("");
  const [amount, setAmount] = useState("");
  const [error, setError] = useState();
  const [successMessage, setSuccessMessage] = useState();
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State untuk menyimpan status login pengguna

  const handleExpand = (cardId) => {
    if (expandedCards.includes(cardId)) {
      setExpandedCards(expandedCards.filter((id) => id !== cardId));
    } else {
      setExpandedCards([...expandedCards, cardId]);
    }
  };
  const { selectedClass } = useSelector((state) => state.class);

  const [user, setUser] = useState(null);
  useEffect(() => {
    const getUserData = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(
          "https://c7-tiketku.up.railway.app/api/v1/user/user-info",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setUser(response.data.data.user);
      } catch (error) {
        // Handle error jika terjadi masalah saat mengambil data pengguna
        console.log("Error:", error);
      }
    };

    getUserData();
  }, []);

  const handleSubmit = async (data) => {
    console.log(data)

    try {
      const token = localStorage.getItem("token");
      const headers = { Authorization: `Bearer ${token}` };
      const response = await axios.post(
        "https://c7-tiketku.up.railway.app/api/v1/bookings",
        {
          user_id,
          flight_id: data.id,
          order_date: new Date(),
          amount: 5000,
        },
        { headers }
      );

      // Handle successful registration
      console.log(response)
      const { newPassengers } = response.data.data;
      console.log(newPassengers); // Do something with newUser

      // Reset form field
      setUserId("");
      setFlightId("");
      setOrderDate("");
      setAmount("");

      setSuccessMessage("registrasi berhasil");
      setError("");
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
      <div className="col-12 col-md-9 text-center mt-3 mb-5">
        {props?.items?.map((flight) => (
          <Card
            key={flight.id}
            // md={4}
            style={{
              width: "100%",
              border: expandedCards.includes(flight.id)
                ? "2px solid rgba(113, 38, 181, 0.5)"
                : "none",
            }}
            className="filter-2"
          >
            <Card.Body>
              <Card.Title className="title">
                <div className="col-12 d-flex">
                  <Row style={{ width: "100%", height: "100%" }}>
                    <Col xs={8} className="d-flex align-items-center">
                      <Card.Img
                        variant="top"
                        src={loading}
                        style={{ width: "24px", marginRight: "10px" }}
                      />
                      <p
                        className="fw-medium mb-0"
                        style={{ fontSize: "12px" }}
                      >
                        {flight.airline.airline_name} - {selectedClass}
                      </p>
                    </Col>
                    <Col
                      md={{ span: 1, offset: 3 }}
                      xs={4}
                      className="d-flex justify-content-end"
                    >
                      <Card.Img
                        variant="top"
                        src={panah}
                        style={{ width: "30px", cursor: "pointer" }}
                        onClick={() => handleExpand(flight.id)}
                      />
                    </Col>
                  </Row>
                </div>
              </Card.Title>

              <div className="container-fluid">
                <Row className="d-flex justify-content-between">
                  <div className="col-10">
                    <div className="row">
                      <div className="col-3" style={{ padding: "0" }}>
                        <Card.Text
                          className="fw-bold mb-1"
                          style={{ fontSize: "14px" }}
                        >
                          {Moment(flight.departure_time).format("HH:mm")}
                        </Card.Text>
                        <Card.Text
                          className="fw-semibold mb-1"
                          style={{ fontSize: "12px" }}
                        >
                          {flight.departureAirport.city}
                        </Card.Text>
                      </div>
                      <div
                        className="col-3 d-flex align-items-center"
                        style={{ padding: "0" }}
                      >
                        <Card.Text
                          className="title-departure text-center"
                          style={{ marginBottom: "1px" }}
                        >
                          {/* 4h 0m */}
                        </Card.Text>

                        <Card.Text className="title-departure text-center border-top w-100">
                          Direct
                        </Card.Text>
                      </div>
                      <div className="col-3" style={{ padding: "0" }}>
                        <Card.Text
                          className="fw-bold mb-1"
                          style={{ fontSize: "14px" }}
                        >
                          {Moment(flight.arrival_time).format("HH:mm")}
                        </Card.Text>
                        <Card.Text
                          className="fw-semibold mb-1"
                          style={{ fontSize: "12px" }}
                        >
                          {flight.arrivalAirport.city}
                        </Card.Text>
                      </div>
                      <div className="col-3" style={{ padding: "0" }}>
                        <Card.Img
                          variant="top"
                          src={koper}
                          style={{ width: "24px", marginRight: "10px" }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-1 d-flex flex-column align-items-end">
                    <Card.Text
                      className="fw-bold mb-1"
                      style={{
                        color: "rgba(113, 38, 181, 1)",
                        fontWeight: "bold",
                        fontSize: "16px",
                      }}
                    >
                      IDR {flight.business_price}{" "}
                    </Card.Text>
                    <Link to="/checkout" state={flight}>
                      <Button type="submit"
                        className="col-3 py-1.5 btn-ticket text-white"
                        variant="primary"
                        value={flight.id}
                        onClick={(e) => setFlightId(e.target.value)}
                        onSubmit={handleSubmit(flight)}
                      >
                        Pilih
                      </Button>
                    </Link>
                  </div>
                </Row>
              </div>
              {expandedCards.includes(flight.id) && (
                <>
                  <hr className="divider-ticket" />
                  <div className="detail-flight d-flex flex-column text-start">
                    <p
                      className="mb-2"
                      style={{
                        color: "#4B1979",
                        fontSize: "14px",
                        fontWeight: "700",
                      }}
                    >
                      Detail Penerbangan
                    </p>
                    <Row>
                      <Col className="text-start">
                        <div className="d-flex align-items-center">
                          <p
                            className="mb-0 me-auto"
                            style={{ fontSize: "16px", fontWeight: "700" }}
                          >
                            {Moment(flight.departure_time).format("HH:mm")}
                          </p>
                          <p
                            className="mb-0"
                            style={{
                              color: "#A06ECE",
                              fontSize: "12px",
                              fontWeight: "700",
                            }}
                          >
                            Keberangkatan
                          </p>
                        </div>
                        <p
                          className="mb-0"
                          style={{ fontSize: "14px", fontWeight: "400" }}
                        >
                          {Moment(flight.departure_time).format("DD MMMM YYYY")}
                        </p>
                        <p style={{ fontSize: "14px", fontWeight: "500" }}>
                          {flight.departureAirport.airport_name}
                        </p>
                      </Col>
                      <div className="d-flex justify-content-center mb-3">
                        <div
                          className="col-8"
                          style={{ borderBottom: "1px solid #D0D0D0" }}
                        ></div>
                      </div>
                    </Row>
                    <Row className="d-flex align-items-center">
                      <div className="col-1">
                        <Card.Img src={loading} style={{ width: "24px" }} />
                      </div>
                      <div className="col-10">
                        <p className="fw-bold mb-0">
                          {flight.airline.airline_name} - {selectedClass}
                        </p>
                        <p className="fw-bold mb-0">{flight.flight_code}</p>
                        <div className="detail-information">
                          <p className="fw-bold mb-0">Informasi:</p>
                          <p className="mb-0">
                            Baggage {flight.airline.baggage} Kg
                          </p>
                          <p className="mb-0">
                            Cabin Baggage {flight.airline.cabin_baggage} kg
                          </p>
                          <p className="mb-0">In Flight Entertainment</p>
                        </div>
                      </div>
                      <div className="d-flex justify-content-center my-3">
                        <div
                          className="col-8"
                          style={{ borderBottom: "1px solid #D0D0D0" }}
                        ></div>
                      </div>
                    </Row>
                    <Row>
                      <Col className="text-start">
                        <div className="d-flex align-items-center">
                          <p
                            className="mb-0 me-auto"
                            style={{ fontSize: "14px", fontWeight: "700" }}
                          >
                            {Moment(flight.arrival_time).format("HH:mm")}
                          </p>
                          <p
                            className="mb-0"
                            style={{
                              color: "#A06ECE",
                              fontSize: "12px",
                              fontWeight: "700",
                            }}
                          >
                            Keberangkatan
                          </p>
                        </div>
                        <p
                          className="mb-0"
                          style={{ fontSize: "14px", fontWeight: "400" }}
                        >
                          {Moment(flight.arrival_time).format("DD MMMM YYYY")}
                        </p>
                        <p style={{ fontSize: "14px", fontWeight: "500" }}>
                          {flight.arrivalAirport.airport_name}
                        </p>
                      </Col>
                    </Row>
                  </div>
                </>
              )}
            </Card.Body>
          </Card>
        ))}
      </div>
    </>
  );
};

export default ResultFlightList;
