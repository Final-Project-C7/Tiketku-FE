import React, { useState } from "react";
import "./Result.css";
import { Card, Button, Row, Col } from "react-bootstrap";
import loading from "/Airlane.svg";
import koper from "/Koper.svg";
import panah from "/expand_circle_down.svg";
import NavbarHomepage from "./NavbarHomepage";
import SelectDay from "./Filter/SelectDay";
import MyModal from "./Beranda/MyModal";
import Filter from "./Filter/Filter";
import { Link } from "react-router-dom";

function Result() {
  const [expanded, setExpanded] = useState(false);

  const handleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <NavbarHomepage />
      <div className="container-fluid" id="select-flight">
        <p className="title1">Pilih Penerbangan</p>
        <SelectDay />
        <div className="d-flex justify-content-end">
          <MyModal />
        </div>
        <div className="row filter-loading mt-4">
          <div className="col-3 filter-l">
            <Filter />
          </div>
          <div className="col-9 text-center mb-5">
            <Card
              style={{
                width: "100%",
                border: expanded ? "2px solid rgba(113, 38, 181, 0.5)" : "none",
              }}
              className="filter-2"
            >
              <Card.Body>
                <Card.Title className="title">
                  <Col className="col-12 d-flex gap-2">
                    <Row style={{ width: "100%" }}>
                      <Col md={4} className="d-flex align-items-center">
                        <Card.Img variant="top" src={loading} style={{ width: "24px", marginRight: "10px" }} />
                        <p className="fw-medium mb-0" style={{ fontSize: "12px" }}>
                          Jet Air - Economy
                        </p>
                      </Col>
                      <Col md={{ span: 1, offset: 7 }} className="d-flex justify-content-end">
                        <Card.Img variant="top" src={panah} style={{ width: "30px", cursor: "pointer" }} onClick={handleExpand} />
                      </Col>
                    </Row>
                  </Col>
                </Card.Title>
                <Row className="d-flex justify-content-between" style={{ marginLeft: "20px", marginTop: 0 }}>
                  <Col className="col-8 d-flex gap-3 align-items-center">
                    <div>
                      <Card.Text className="fw-bold mb-1" style={{ fontSize: "14px" }}>
                        07:00
                      </Card.Text>
                      <Card.Text className="fw-semibold mb-1" style={{ fontSize: "12px" }}>
                        JKT
                      </Card.Text>
                    </div>
                    <div style={{ width: "100%" }}>
                      <Card.Text className="title-departure text-center" style={{ marginBottom: "1px" }}>
                        4h 0m
                      </Card.Text>
                      <hr align="center" color="green" size="2" width="100%" style={{ margin: 0 }} />
                      <Card.Text className="title-departure text-center">Direct</Card.Text>
                    </div>
                    <div className="d-flex gap-3 align-items-center">
                      <div>
                        <Card.Text className="fw-bold mb-1" style={{ fontSize: "14px" }}>
                          11:00
                        </Card.Text>
                        <Card.Text className="fw-semibold mb-1" style={{ fontSize: "12px" }}>
                          MLB
                        </Card.Text>
                      </div>
                      <Card.Img variant="top" src={koper} style={{ width: "24px", marginRight: "10px" }} />
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
                    <Link to="/checkout">
                      <Button className="col-3 py-1.5 btn-ticket text-white" variant="primary">
                        Pilih
                      </Button>
                    </Link>
                    {/* <Button className="col-3 py-1.5 btn-ticket text-white" variant="primary">
                      Pilih
                    </Button> */}
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
                            <p className="mb-0 me-auto" style={{ fontSize: "16px", fontWeight: "700" }}>
                              07.00
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
                          <p className="mb-0" style={{ fontSize: "14px", fontWeight: "400" }}>
                            3 Maret 2023
                          </p>
                          <p style={{ fontSize: "14px", fontWeight: "500" }}>Soekarno Hatta - Terminal 1A Domestik</p>
                        </Col>
                        <div className="d-flex justify-content-center mb-3">
                          <div className="col-8" style={{ borderBottom: "1px solid #D0D0D0" }}></div>
                        </div>
                      </Row>
                      <Row className="d-flex align-items-center">
                        <Col className="col-1">
                          <Card.Img src={loading} style={{ width: "24px" }} />
                        </Col>
                        <Col>
                          <p className="fw-bold mb-0">Jet Air-Economy</p>
                          <p className="fw-bold mb-0">JT-203</p>
                          <div className="detail-information">
                            <p className="fw-bold mb-0">Informasi:</p>
                            <p className="mb-0">Baggage 20kg</p>
                            <p className="mb-0">Cabin Baggage 7 kg</p>
                            <p className="mb-0">In Flight Entertainment</p>
                          </div>
                        </Col>
                        <div className="d-flex justify-content-center my-3">
                          <div className="col-8" style={{ borderBottom: "1px solid #D0D0D0" }}></div>
                        </div>
                      </Row>
                      <Row>
                        <Col className="text-start">
                          <div className="d-flex align-items-center">
                            <p className="mb-0 me-auto" style={{ fontSize: "14px", fontWeight: "700" }}>
                              11.00
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
                          <p className="mb-0" style={{ fontSize: "14px", fontWeight: "400" }}>
                            3 Maret 2023
                          </p>
                          <p style={{ fontSize: "14px", fontWeight: "500" }}>Melbourne International Airport</p>
                        </Col>
                      </Row>
                    </div>
                  </>
                )}
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}

export default Result;
