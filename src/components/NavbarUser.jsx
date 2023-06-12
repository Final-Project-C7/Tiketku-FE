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
            <Link to="/">
                <Image className="navu" src="/fi_bell.svg" alt="login icon" />
            </Link>
            <Link to="/">
                <Image className="navu" src="/fi_user_org.svg" alt="login icon" />
            </Link>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default NavbarUser;
