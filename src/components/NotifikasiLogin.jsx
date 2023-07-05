import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import { Navigate } from "react-router-dom";
import NavbarUser from "./NavbarUser";
import Header from "./Header";

import "bootstrap/dist/css/bootstrap.min.css";
import "./NavbarHomepage.css";

import bel from "/bel.svg";
import buletijo from "/buletijo.svg";
import buletmerah from "/buletmerah.svg";

const style = `
@media only screen and (min-width: 1200px) {
  .content{
      padding-left:150px !important;
    }
}  
  `;

const NotifikasiLogin = () => {
  const token = localStorage.getItem("token");
  return (
    <>
      <style>{style}</style>
      <NavbarUser />
      {token ? (
        <div>
          <div className="border-bottom shadow-sm">
            <Container className="history mb-10">
              <div className="d-flex">
                <h4 className="fw-bold"> Notifikasi</h4>
              </div>
              <Header />
            </Container>
          </div>

          <div className="">
            <Container className="d-flex justify-content-center">
              <Row className="d-flex mt-4" style={{ width: "100%" }}>
                <Col xs={1} sm={1} md={1} className="d-flex justify-content-end">
                  <div>
                    <img src={bel} />
                  </div>
                </Col>
                <Col md={10} xs={10} sm={10}>
                  <Row>
                    <Col md={3} xs={3} sm={3} className="m-0 p-0" style={{ fontSize: "14px", color: "#8A8A8A" }}>
                      Promosi
                    </Col>
                    <Col md={{ span: 3, offset: 6 }} xs={{ span: 6, offset: 3 }} sm={{ span: 6, offset: 3 }} className="justify-content-end d-flex" style={{ fontSize: "14px", color: "#8A8A8A" }}>
                      20 Maret, 14:04 <img src={buletijo} className="m-1" />
                    </Col>
                    <Col md={12} xs={12} sm={12} className="m-0 p-0" style={{ fontSize: "16px" }}>
                      <p className="m-0 p-0">Dapatkan Potongan Tiket 50% Tiket !</p>
                      <p className="m-0 p-0" style={{ fontSize: "14px", color: "#8A8A8A" }}>
                        Syarat Dan Ketentuan berlaku
                      </p>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>

            <Container>
              <hr />
            </Container>

            <Container className="d-flex justify-content-center">
              <Row className="d-flex mt-4" style={{ width: "100%" }}>
                <Col md={1} xs={1} sm={1} className="d-flex justify-content-end">
                  <div>
                    <img src={bel} />
                  </div>
                </Col>
                <Col md={10} xs={10} sm={10}>
                  <Row>
                    <Col md={3} xs={3} sm={3} className="m-0 p-0" style={{ fontSize: "14px", color: "#8A8A8A" }}>
                      Notifikasi
                    </Col>
                    <Col md={{ span: 3, offset: 6 }} xs={{ span: 6, offset: 3 }} sm={{ span: 6, offset: 3 }} className="justify-content-end d-flex" style={{ fontSize: "14px", color: "#8A8A8A" }}>
                      5 Maret, 14:04 <img src={buletmerah} className="m-1" />
                    </Col>
                    <Col md={12} xs={12} sm={12} className="m-0 p-0" style={{ fontSize: "16px" }}>
                      <p className="m-0 p-0">Terdapat perubahan pada jadwal penerbangan kode booking 45GT6. Cek jadwal perjalanan Anda disini!</p>
                      <p className="m-0 p-0" style={{ fontSize: "14px", color: "#8A8A8A" }}>
                        Syarat Dan Ketentuan berlaku
                      </p>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      ) : (
        <Navigate to="/login" />
      )}
    </>
  );
};

export default NotifikasiLogin;
