import React from "react";
import { Container, Navbar, Image, Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./NavbarHomepage.css";

const NavbarHomepage = () => {
  return (
    <Navbar className="fixed-top border-bottom shadow-sm">
      <Container>
        <Navbar.Brand href="/" className="d-flex">
          <Image className="navbar__img" src="/logo.svg" alt="logo Tiketku" />
        </Navbar.Brand>
        <Navbar.Collapse>
          <Form className="nav-search d-flex ms-3 align-items-center py-1 px-4 rounded-4">
            <input type="search" placeholder="Cari di sini ..." aria-label="Search" />
            <Button>
              <Image className="nav-search__img" src="/search.svg" alt="search" />
            </Button>
          </Form>
        </Navbar.Collapse>
        <Navbar.Brand>
          <Button className="btn btn-primary lg btn-sign d-flex align-items-center justify-content-center" type="submit" href="/login">
            <Image className="login_img" src="/login.svg" alt="login icon" />
            <Link to="/login" className="btn-sign__link">
              Masuk
            </Link>
          </Button>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default NavbarHomepage;
