import React, { useState } from "react";
import { Image, Button, Container, Form, Card, Col } from "react-bootstrap";
import NavbarUser from "./NavbarUser";

import "./Riwayat.css";

const Riwayat = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };
  return (
    <>
      <NavbarUser />
      <div className="border-bottom shadow-sm">
        <Container className="checkout-breadcrumbs">
          <div className="d-flex">
            <h4 className="fw-bold"> Riwayat Pemesanan</h4>
          </div>
          <div className="checkout-breadcrumbs__alert mt-2 mb-4 mx-4">
            <div className="topriwayat col-10 py-3 rounded-4">
              <Image className="arrowleft" src="/fi_arrow-left.svg" alt="arrow left" />
              {/* <h5 className="teks text-white" >Beranda</h5> */}
            </div>
          </div> 
        </Container>
      </div>
      <Container className="checkout-biodata">
        <Form className="row d-flex mt-4">
          <div className="col-7 mt-0">
            <h4 className="fw-bold">Maret 2023</h4>
            <Card className="cardresult">
              <Card.Body>
                <Card.Title className="title">
                  <Button variant="success mb-2" className="issue text-white">Issued</Button>
                </Card.Title>
                <div className="mx-2">
                  <div className="d-flex">
                    <h5 className="mb-0 me-auto text-dark fw-bold">Jakarta</h5>
                    <h5 className="mb-0 fw-bold text-dark">Melbourne</h5>
                  </div>
                  <div className="d-flex">
                    <p className="mb-0 me-auto text-dark">5 Maret 2023</p>
                    <p className="mb-0 text-dark">5 Maret 2023</p>
                  </div>
                  <div className="d-flex">
                    <p className="mb-0 me-auto text-dark">19:10</p>
                    <p className="mb-0 text-dark">21:10</p>
                  </div>
                  <div className="border-bottom my-2"></div>

                  <div className="mx-2">
                    <div className="d-flex">
                      <p className="me-5 mb-2 fw-bold text-dark">Booking Code</p>
                      <p className="fw-bold mb-2 text-dark">Class</p>
                    </div>  
                    <div className="d-flex">
                      <p className="me-5 mb-2">6723y2GHK</p>
                      <p className="mb-2 text-dark">Economy</p>
                    </div>  
                  </div>
                </div>
              </Card.Body>
            </Card>

            <Card className="cardresult2">
              <Card.Body>
                <Card.Title className="title">
                  <Button variant="danger mb-2" className="unpaid text-white">Unpayment</Button>
                </Card.Title>
                <div className="mx-2">
                  <div className="d-flex">
                    <h5 className="mb-0 me-auto text-dark fw-bold">Jakarta</h5>
                    <h5 className="mb-0 fw-bold text-dark">Melbourne</h5>
                  </div>
                  <div className="d-flex">
                    <p className="mb-0 me-auto text-dark">5 Maret 2023</p>
                    <p className="mb-0 text-dark">5 Maret 2023</p>
                  </div>
                  <div className="d-flex">
                    <p className="mb-0 me-auto text-dark">19:10</p>
                    <p className="mb-0 text-dark">21:10</p>
                  </div>
                  <div className="border-bottom my-2"></div>

                  <div className="mx-2">
                    <div className="d-flex">
                      <p className="me-5 mb-2 fw-bold text-dark">Booking Code</p>
                      <p className="fw-bold mb-2 text-dark">Class</p>
                    </div>  
                    <div className="d-flex">
                      <p className="me-5 mb-2">6723y2GHK</p>
                      <p className="mb-2 text-dark">Economy</p>
                    </div>  
                  </div>
                </div>
              </Card.Body>
            </Card>
          </div>

          {/* DETAIL PESANAN */}
          <div className="col-5 mt-0">
            <div className="d-flex">
              <h4 className="me-auto fw-bold">Detail Pesanan</h4>
              <Button variant="success" className="issue text-white">Issued</Button>
            </div>
            <div className="d-flex">
              <h6 className="me-1 mb-2">Booking Code :</h6>
              <p className="bookingtext fw-bold mb-2">6723y2GHK</p>
            </div>
            <div className="d-flex">
              <h5 className="fw-bold me-auto mb-0">19:10</h5>
              <p className="fw-bold mb-0" style={{ fontSize: "12px", color: "#a06ece" }}>
                Keberangkatan
              </p>
            </div>
            <p className="mb-0 text-dark">3 Maret 2023</p>
            <p className="fw-medium mb-0 text-dark">Soekarno Hatta - Terminal 1A Domestik</p>
            <div className="border-bottom my-2"></div>
            <div className="d-flex align-items-center">
              <div className="col-1">
                <Image className="checkout-biodata__img" src="/Image-1.svg" />
              </div>
              <div className="col-12">
                <p className="fw-bold mb-0 text-dark">Jet Air - Economy</p>
                <p className="fw-bold mb-3 text-dark">JT - 203</p>
                <p className="fw-bold mb-0 text-dark">Informasi:</p>
                <p className="mb-0">Penumpang 1 : Mr. Harry Potter</p>
                <p className="mb-0 text-dark">Id : 123456</p>
                <p className="mb-0">Penumpang 2 : Mrs. Harry Potter</p>
                <p className="mb-0 text-dark">Id : 123456</p>
              </div>
            </div>
            <div className="border-bottom my-2"></div>
            <div className="d-flex">
              <h5 className="fw-bold me-auto mb-0">21:10</h5>
              <p className="fw-bold mb-0" style={{ fontSize: "12px", color: "#a06ece" }}>
                Kedatangan
              </p>
            </div>
            <p className="mb-0 text-dark">3 Maret 2023</p>
            <p className="fw-medium mb-0 text-dark">Melbourne International Airport</p>
            <div className="border-bottom my-2"></div>
            <div className="mx-2">
              <p className="fw-bold mb-0 text-dark">Rincian Harga</p>
              <div className="d-flex">
                <p className="mb-0 me-auto text-dark">2 Adults</p>
                <p className="mb-0">IDR 9.550.000</p>
              </div>
              <div className="d-flex">
                <p className="mb-0 me-auto text-dark">1 Baby</p>
                <p className="mb-0 text-dark">IDR 0</p>
              </div>
              <div className="d-flex">
                <p className="mb-0 me-auto text-dark">Tax</p>
                <p className="mb-0 text-dark">IDR 300.000</p>
              </div>
              <div className="border-bottom my-2"></div>
              <div className="d-flex">
                <p className="mb-0 me-auto text-dark">Total</p>
                <h5 className="fw-bold mb-0" style={{ fontSize: "18px", color: "#7126B5" }}>
                  IDR 9.850.000
                </h5>
              </div>
              <Button className="checkout-biodata__btn-2 border-0 d-flex align-items-center justify-content-center mt-4 py-4">Cetak Tiket</Button>
            </div>
          </div>
        </Form>
      </Container>
    </>
  );
};

export default Riwayat;
