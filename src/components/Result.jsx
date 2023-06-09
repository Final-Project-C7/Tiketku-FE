import React, { useState } from "react";
import "./Result.css";
import { Card, Button, Row, Col } from "react-bootstrap";
import loading from "/Airlane.png";
import koper from "/Koper.svg";
import panah from "/expand_circle_down.svg";

function Result() {
  const [expanded, setExpanded] = useState(false);

  const handleExpand = () => {
    setExpanded(!expanded);
  };

  return (
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
            <div>
              <Card.Img
                variant="top"
                src={loading}
                style={{ width: "24px", marginRight: "10px" }}
              />
              Jet Air - Economy
            </div>
            <div className="float-right">
              <Card.Img
                variant="top"
                src={panah}
                style={{ width: "30px", marginLeft: "500px" }}
                onClick={handleExpand}
              />
            </div>
          </Col>
        </Card.Title>
        <Row
          className="d-flex justify-content-between"
          style={{ marginLeft: "20px", marginTop: 0 }}
        >
          <Col className="col-8 d-flex gap-3 align-items-center">
            <div>
              <Card.Text className="fw-bold mb-1"> 07:00 </Card.Text>
              <Card.Text className="fw-bold mb-1"> JKT </Card.Text>
            </div>
            <div style={{ width: "100%" }}>
              <Card.Text
                className="title-departure text-center"
                style={{ marginBottom: "1px" }}
              >
                4h 0m
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
                <Card.Text className="fw-bold mb-1"> 11:00 </Card.Text>
                <Card.Text className="fw-bold mb-1"> MLB </Card.Text>
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
                color: "rgba(113, 38, 181, 0.5)",
                fontWeight: "bold",
                fontSize: "16px",
              }}
            >
              IDR 4.950.000{" "}
            </Card.Text>
            <Button className="col-3 py-1.5 btn-ticket" variant="primary">
              Pilih
            </Button>
          </Col>
        </Row>
        {expanded && (
          <>
            <hr className="divider-ticket" />
            <div className="detail-flight">
              <p
                style={{
                  color: "#4B1979",
                  fontSize: "14px",
                  fontWeight: "700",
                }}
              >
                Detail Penerbangan
              </p>
              <Row>
                <Col className="col-6 text-start">
                  <p>07.00</p>
                </Col>
                <Col className="col-6 text-end">
                  <p>Keberangkatan</p>
                </Col>
              </Row>
              <Row>
                <p>3 Maret 2023</p>
                <p>Soekarno Hatta - Terminala 1A Domestik</p>
                <hr className="divider-ticket" />
              </Row>
              <Row className="d-flex align-items-center">
                <Col>
                  <Card.Img
                    variant="top"
                    src={loading}
                    style={{ width: "24px" }}
                  />
                </Col>
                <Col>
                  <p className="fw-bold">Jet Air-Economy</p>
                  <p className="fw-bold">JT-203</p>
                  <div className="detail-information">
                    <p className="fw-bold">Informasi:</p>
                    <p>Baggage 20kg</p>
                    <p>Cabin Baggage 7 kg</p>
                    <p>In Flight Entertainment</p>
                  </div>
                </Col>
              </Row>
              <hr className="divider-ticket" />
              <Row>
                <Col>
                  <p>11:00</p>
                </Col>
                <Col className="text-end">
                  <p>Kedatangan</p>
                </Col>
              </Row>
              <Row>
                <p>3 Maret 2023</p>
                <p>Melbourne International Airport</p>
              </Row>
            </div>
          </>
        )}
      </Card.Body>
    </Card>
  );
}

export default Result;
