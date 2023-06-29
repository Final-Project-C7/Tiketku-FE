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
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Result from "./Result";
import CheckoutCustomerData from "./CheckoutCustomerData";

const ResultFlightList = (props) => {
  const [expanded, setExpanded] = useState(false);

  const [user_id, setUserId] = useState("");
  const [flight_id, setFlightId] = useState("");
  const [order_date, setOrderDate] = useState("");
  const [amount, setAmount] = useState("");

  const handleExpand = () => {
    setExpanded(!expanded);
  };

  console.log(user_id);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://c7-tiketku.up.railway.app/api/v1/bookings",
        {
          user_id,
          flight_id,
          order_date: new Date(),
          amount,
        }
      );

      // Handle successful registration
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

  return (
    <>
      <div className="col-9 text-center mb-5">
        {props?.items?.map((flight) => (
          <Card
            key={flight.id}
            md={4}
            style={{
              width: "100%",
              border: expanded ? "2px solid rgba(113, 38, 181, 0.5)" : "none",
            }}
            className="filter-2 mb-2"
          >
            <Card.Body>
              <Card.Title className="title">
                <Col className="col-12 d-flex gap-2">
                  <Row style={{ width: "100%" }}>
                    <Col md={4} className="d-flex align-items-center">
                      <Card.Img
                        variant="top"
                        src={loading}
                        style={{ width: "24px", marginRight: "10px" }}
                      />
                      <p
                        className="fw-medium mb-0"
                        style={{ fontSize: "12px" }}
                      >
                        {flight.airline.airline_name} - Kelas
                      </p>
                    </Col>
                    <Col
                      md={{ span: 1, offset: 7 }}
                      className="d-flex justify-content-end"
                    >
                      <Card.Img
                        variant="top"
                        src={panah}
                        style={{ width: "30px", cursor: "pointer" }}
                        onClick={handleExpand}
                      />
                    </Col>
                  </Row>
                </Col>
              </Card.Title>
              <Row
                className="d-flex justify-content-between"
                style={{ marginLeft: "20px", marginTop: 0 }}
              >
                <Col className="col-8 d-flex gap-3 align-items-center">
                  <div>
                    <Card.Text
                      className="fw-bold mb-1"
                      style={{ fontSize: "14px" }}
                    >
                      {flight.departure_time}
                    </Card.Text>
                    <Card.Text
                      className="fw-semibold mb-1"
                      style={{ fontSize: "12px" }}
                    >
                      {flight.departureAirport.city}
                    </Card.Text>
                  </div>
                  <div style={{ width: "100%" }}>
                    <Card.Text
                      className="title-departure text-center"
                      style={{ marginBottom: "1px" }}
                    >
                      {/* 4h 0m */}
                    </Card.Text>
                    <hr
                      align="center"
                      color="green"
                      size="2"
                      width="100%"
                      style={{ margin: 0 }}
                    />
                    <Card.Text className="title-departure text-center">
                      Direct
                    </Card.Text>
                  </div>
                  <div className="d-flex gap-3 align-items-center">
                    <div>
                      <Card.Text
                        className="fw-bold mb-1"
                        style={{ fontSize: "14px" }}
                      >
                        {flight.arrival_time}
                      </Card.Text>
                      <Card.Text
                        className="fw-semibold mb-1"
                        style={{ fontSize: "12px" }}
                      >
                        {flight.arrivalAirport.city}
                      </Card.Text>
                    </div>
                    <Card.Img
                      variant="top"
                      src={koper}
                      style={{ width: "24px", marginRight: "10px" }}
                    />
                  </div>
                </Col>
                <Col className="col-4 d-flex flex-column align-items-end">
                  <Card.Text
                    className="fw-bold mb-1"
                    style={{
                      color: "rgba(113, 38, 181, 1)",
                      fontWeight: "bold",
                      fontSize: "16px",
                    }}
                  >
                    IDR 4.950.000{" "}
                  </Card.Text>
                  <Link to="/checkout" state={flight}>
                    <Button
                      className="col-3 py-1.5 btn-ticket text-white"
                      variant="primary"
                      value={flight.id}
                      onClick={(e) => setFlightId(e.target.value)}
                      oncClick={handleSubmit}
                    >
                      Pilih
                    </Button>
                  </Link>
                </Col>
              </Row>
              {expanded && (
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
                            {new Date(flight.departure_time).toLocaleDateString(
                              "en-GB",
                              {
                                day: "2-digit",
                                month: "2-digit",
                                year: "numeric",
                              }
                            )}
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
                          {flight.departure_time.toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
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
                      <Col className="col-1">
                        <Card.Img src={loading} style={{ width: "24px" }} />
                      </Col>
                      <Col>
                        <p className="fw-bold mb-0">
                          {flight.airline.airline_name} - Kelas
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
                      </Col>
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
                            {flight.arrival_time}
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
                          {flight.arrival_time}
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
