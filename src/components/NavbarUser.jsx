import React from "react";
import { Container, Navbar, Image, Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./NavbarHomepage.css";

const NavbarUser = () => {
  return (
    <Navbar className="fixed-top border-bottom shadow-sm bg-white">
      <Container>
        <Navbar.Brand href="/" className="d-flex">
          <Image className="navbar__img" src="/logo.svg" alt="logo Tiketku" />
        </Navbar.Brand>
        <Navbar.Brand>
          <Link to="/userhistory">
            <Image className="navu" src="/fi_list.svg" alt="login icon" />
          </Link>
          <Link to="/usernotifikasi">
            <Image className="navu" src="/fi_bell.svg" alt="login icon" />
          </Link>
          <Link to="/useraccount">
            <Image className="navu" src="/fi_user_org.svg" alt="login icon" />
          </Link>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default NavbarUser;
