import React, { useState } from "react";
import { Image, Button, Container, Form, Card } from "react-bootstrap";
import NavbarUser from "../components/NavbarUser";
import "../components/Riwayat.css";

function Akun() {
    return (
        <>
        <NavbarUser />
        <div className="border-bottom shadow-sm">
        <Container className="checkout-breadcrumbs">
          <div className="d-flex">
            <h4 className="fw-bold">Akun</h4>
          </div>
          <div className="d-flex checkout-breadcrumbs__alert mt-2 mb-4 mx-4">
            <div className="topriwayat col-10 py-3 rounded-4">
              <div className="text-white">
                <Image className="arrowleft mr-7" src="./arrow-left.png" alt="arrow left" /> Beranda
              </div>
              {/* <h5 className="teks text-white" >Beranda</h5> */}
            </div>
          </div>
        </Container>
      </div>
        </>
    )
}

export default Akun;