import React from "react";
import { Container, Navbar, Image, Button, Form } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import "./NavbarHomepage.css";

const NavbarHomepage = () => {
  return (
    <Navbar className="fixed-top border-bottom shadow-sm">
      <Container>
        <Navbar.Brand href="/">
          <Image className="navbar__img" src="/logo.svg" alt="logo Tiketku" />
        </Navbar.Brand>
        <Navbar.Brand>
        <Button className="btn btn-primary lg btn-sign" type="submit">
          <Image className="login_img" src="/login.svg" alt=""/>
            Masuk
          </Button>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default NavbarHomepage;
