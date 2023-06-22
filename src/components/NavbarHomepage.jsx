import React from "react";
import { Container, Navbar, Image, Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./NavbarHomepage.css";

const NavbarHomepage = () => {
  return (
    <Navbar className="fixed-top border-bottom shadow-sm bg-white">
      <Container>
        <Navbar.Brand className="d-flex">
          <Link to="/">
            <Image className="navbar__img" src="/logofinal.png" alt="logo Tiketku" />
          </Link>
        </Navbar.Brand>
        <Navbar.Collapse>
          <Form className="nav-search col-6 col-xxl-5 d-flex align-items-center rounded-4 ms-3 py-1 ps-4 pe-5 pe-lg-4">
            <input className="col-11" type="search" placeholder="Cari di sini ..." aria-label="Search" />
            <Button>
              <Image className="nav-search__img" src="/search.svg" alt="search" />
            </Button>
          </Form>
        </Navbar.Collapse>
        <Navbar.Brand>
          <Link to="/login" className="btn-sign__link">
            <Button className="btn-sign d-flex align-items-center justify-content-center" type="submit">
              <Image className="login_img" src="/login.svg" alt="login icon" />
              Masuk
            </Button>
          </Link>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default NavbarHomepage;
