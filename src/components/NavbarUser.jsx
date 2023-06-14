import React, { useState } from "react";
import {
  Container,
  Navbar,
  Image,
  Button,
  Form,
  Toast,
  Row,
  Col,
} from "react-bootstrap";
import { Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import bel from "/bel.svg";
import "./NavbarHomepage.css";
import buletijo from "/buletijo.svg";
import buletmerah from "/buletmerah.svg";

const NavbarUser = () => {
  const [showToast, setShowToast] = useState(false);
  const handleClick = () => {
    setShowToast(true);
  };
  const handleClose = () => {
    setShowToast(false);
  };
  return (
    <>
      <Navbar className="fixed-top border-bottom shadow-sm bg-white">
        <Container>
          <Navbar.Brand href="/" className="d-flex">
            <Image className="navbar__img" src="/logo.svg" alt="logo Tiketku" />
          </Navbar.Brand>
          {/* <Navbar.Collapse>
          <Form className="nav-search d-flex ms-3 align-items-center py-1 px-4 rounded-4">
            <input type="search" placeholder="Cari di sini ..." aria-label="Search" />
            <Button>
              <Image className="nav-search__img" src="/search.svg" alt="search" />
            </Button>
          </Form>
        </Navbar.Collapse> */}
          <Navbar.Brand>
            <Link to="/userhistory">
              <Image className="navu" src="/fi_list.svg" alt="login icon" />
            </Link>
            <Link>
              <Image
                className="navu"
                onClick={handleClick}
                src="/fi_bell.svg"
                alt="login icon"
              />
            </Link>
            <Link to="/">
              <Image className="navu" src="/fi_user_org.svg" alt="login icon" />
            </Link>
          </Navbar.Brand>
        </Container>
      </Navbar>
      {showToast && (
        <Toast
          style={{
            position: "absolute",
            top: "90px",
            right: "150px",
            backgroundColor: "white",
          }}
          show={showToast}
          onClose={handleClose}
        >
          <Toast.Header>
            <strong className="me-auto"></strong>
          </Toast.Header>
          <Toast.Body>
            <Container>
              <Row>
                <Col md={1} className="d-flex justify-content-end">
                  <div>
                    <img src={bel} />
                  </div>
                </Col>
                <Col md={11}>
                  <Row>
                    <Col
                      md={6}
                      className="m-0 p-0"
                      style={{ fontSize: "10px", color: "#8A8A8A" }}
                    >
                      Status Pembayaran (Unpaid)
                    </Col>
                    <Col
                      md={6}
                      className="d-flex justify-content-end p-0"
                      style={{ fontSize: "10px", color: "#8A8A8A" }}
                    >
                      20 Maret, 14:04 <img src={buletijo} className="ms-1" />
                    </Col>
                    <Col
                      md={11}
                      className="m-0 p-0"
                      style={{ fontSize: "14px" }}
                    >
                      <p className="m-0 p-0">
                        Selesaikan pembayaran Anda sebelum tanggal 10 Maret
                        2023!
                      </p>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
            <hr />
          </Toast.Body>
        </Toast>
      )}
    </>
  );
};

export default NavbarUser;
