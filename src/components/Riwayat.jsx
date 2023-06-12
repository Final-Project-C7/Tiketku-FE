import React, { useState } from "react";
import { Image, Button, Container, Form, Card } from "react-bootstrap";
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
          <div className="d-flex checkout-breadcrumbs__alert mt-2 mb-4 mx-4">
            <div className="topriwayat col-10 py-3 rounded-4">
              <div className="text-white">
                <Image className="arrowleft mr-7" src="./arrow-left.png" alt="arrow left" /> Beranda
              </div>
              {/* <h5 className="teks text-white" >Beranda</h5> */}
            </div>
            <Button className="btn-filter ms-2 text-dark">
              <div image scr="./userfilter.svg" alt="" /> Filter
            </Button>
            <Image className="ms-0" src="/searchriwayat.svg" />
          </div>
        </Container>
      </div>
      <Container className="checkout-biodata">
        <Form className="row d-flex mt-4">
          <div className="col-7 mt-0">
            <div className="mb-3">
              <h5 className="fw-bold">Maret 2023</h5>
              <div className="p-3 rounded-3" style={{ border: "2px solid rgba(113, 38, 181, 0.75)" }}>
                <p className="col-2 rounded-5 text-white text-center p-1 mb-4" style={{ backgroundColor: "#FF0000" }}>
                  Unpaid
                </p>
                <div className="d-flex">
                  <div className="col-1 text-center">
                    <Image src="/Live-area.svg" />
                  </div>
                  <div className="col-3">
                    <p className="fw-bold mb-0">Jakarta</p>
                    <p className="mb-0">5 Maret 2023</p>
                    <p className="mb-0">19:10</p>
                  </div>
                  <div className="col-4 d-flex flex-column justify-content-center align-items-center">
                    <p className="mb-0">4h 0m</p>
                    <Image src="/Union.svg" />
                  </div>
                  <div className="col-1 text-center">
                    <Image src="/Live-area.svg" />
                  </div>
                  <div className="col-3 d-flex flex-column justify-content-end">
                    <p className="fw-bold mb-0">Melbourne</p>
                    <p className="mb-0">5 Maret 2023</p>
                    <p className="mb-0">21:10</p>
                  </div>
                </div>
                <div className="border-bottom border-2 mt-1 mb-3"></div>
                <div className="d-flex align-items-center">
                  <div className="col-4">
                    <p className="fw-bold mb-0">Booking Code:</p>
                    <p className="mb-0">6723y2GHK</p>
                  </div>
                  <div className="col-4 offset-1">
                    <p className="fw-bold mb-0">Class:</p>
                    <p className="mb-0">Economy</p>
                  </div>
                  <div className="col-3">
                    <p className="fw-bold mb-0" style={{ color: "#4B1979" }}>
                      IDR 9.850.000
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <h4 className="fw-bold">Maret 2023</h4>
            <Card className="cardresult mb-2">
              <Card.Body>
                <Card.Title className="title">
                  <Button variant="success mb-2" className="issue text-white">
                    Issued
                  </Button>
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
                  <p className="text-center mt-0 mb-0 text-dark">04:00</p>
                  <div className="horizontal-divider border-bottom border-1 mt-1 mb-3"></div>
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

            <Card className="cardresult2 mb-2">
              <Card.Body>
                <Card.Title className="title">
                  <Button variant="danger mb-2" className="unpaid text-white">
                    Unpayment
                  </Button>
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
                  <p className="text-center mt-0 mb-0 text-dark">04:00</p>
                  <div className="horizontal-divider border-bottom border-1 mt-1 mb-3"></div>
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

            <Card className="cardresult mb-2">
              <Card.Body>
                <Card.Title className="title">
                  <Button variant="success mb-2" className="cancelled text-white">
                    Cancelled
                  </Button>
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
                  <p className="text-center mt-0 mb-0 text-dark">04:00</p>
                  <div className="horizontal-divider border-bottom border-1 mt-1 mb-3"></div>
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
              <Button variant="success" className="issue text-white">
                Issued
              </Button>
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
