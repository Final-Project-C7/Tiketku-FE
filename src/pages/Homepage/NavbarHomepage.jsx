import React from "react";
import { Container, Navbar, Image } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import "./NavbarHomepage.css";

const NavbarHomepage = () => {
  return (
    <Navbar className="fixed-top border-bottom shadow-sm">
      <Container>
        <Navbar.Brand href="/">
          <Image className="navbar__img" src="/logo.svg" alt="logo Tiketku" />
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default NavbarHomepage;
