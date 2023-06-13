import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Image, Button, Container, Form, Card } from "react-bootstrap";
import NavbarUser from "./NavbarUser";
import SearchModal from "./Beranda/SearchModal";
import FilterModal from "./Beranda/FilterModal";

import "./Riwayat.css";

const Riwayat = () => {
  return (
    <>
      <NavbarUser />
      <div className="border-bottom shadow-sm">
        <Container className="history">
          <div className="d-flex">
            <h4 className="fw-bold"> Riwayat Pemesanan</h4>
          </div>
          <div className="history-top d-flex align-items-center mx-2 mb-4">
            <div className="history-top__alert col-10 text-white d-flex px-3 py-2 mt-2">
              <Link to="/">
                <Image className="history-top__arrow-left my-2" src="./arrow-left.png" alt="arrow left" />
              </Link>
              <h5 className="ms-4 pt-2">Beranda</h5>
            </div>
            <div className="history-filter col-2 d-flex ms-3">
              {/* <Button className="history-filter__btn d-flex bg-white text-dark rounded-5" style={{ height: "30px" }}>
                <Image src="/history-filter.svg" />
                <h5 className="ms-2 mb-0">Filter</h5>
              </Button> */}
              <FilterModal/>
              <SearchModal />
            </div>
          </div>
        </Container>
      </div>
      <Container className="checkout-biodata">
        <Form className="row d-flex mt-4">
          <div className="col-7 mt-0">
            <div className="mb-3">
              <h4 className="fw-bold">Maret 2023</h4>
              <div className="p-3 rounded-3 mb-2" style={{ border: "2px solid rgba(113, 38, 181, 0.75)" }}>
                <p className="col-2 rounded-5 text-white text-center p-1 mb-4" style={{ backgroundColor: "#73ca5c" }}>
                  Issued
                </p>
                <div className="d-flex">
                  <div className="col-1 text-center">
                    <Image src="/Live-area.svg" />
                  </div>
                  <div className="col-3">
                    <p className="fw-bold mb-0 text-dark">Jakarta</p>
                    <p className="mb-0">5 Maret 2023</p>
                    <p className="mb-0">19:10</p>
                  </div>
                  <div className="col-4 d-flex flex-column justify-content-center align-items-center mb-4">
                    <p className="mb-0">4h 0m</p>
                    <Image src="/Union.svg" />
                  </div>
                  <div className="col-1 text-center">
                    <Image src="/Live-area.svg" />
                  </div>
                  <div className="col-3 d-flex flex-column">
                    <p className="fw-bold mb-0 text-dark">Melbourne</p>
                    <p className="mb-0">5 Maret 2023</p>
                    <p className="mb-0">21:10</p>
                  </div>
                </div>
                <div className="border-bottom border-2 mt-1 mb-3"></div>
                <div className="d-flex align-items-center">
                  <div className="col-4">
                    <p className="fw-bold mb-0 text-dark">Booking Code:</p>
                    <p className="mb-0">6723y2GHK</p>
                  </div>
                  <div className="col-4 offset-1">
                    <p className="fw-bold mb-0 text-dark">Class:</p>
                    <p className="mb-0">Economy</p>
                  </div>
                  <div className="col-3">
                    <p className="fw-bold mb-0" style={{ color: "#4B1979" }}>
                      IDR 9.850.000
                    </p>
                  </div>
                </div>
              </div>
              <Card className="mb-3">
                <div className="p-3 rounded-3 mb-2">
                  <p className="col-2 rounded-5 text-white text-center p-1 mb-4" style={{ backgroundColor: "#ff0000" }}>
                    Unpaid
                  </p>
                  <div className="d-flex">
                    <div className="col-1 text-center">
                      <Image src="/Live-area.svg" />
                    </div>
                    <div className="col-3">
                      <p className="fw-bold mb-0 text-dark">Jakarta</p>
                      <p className="mb-0">1 Maret 2023</p>
                      <p className="mb-0">7:00</p>
                    </div>
                    <div className="col-4 d-flex flex-column justify-content-center align-items-center mb-4">
                      <p className="mb-0">1h 15m</p>
                      <Image src="/Union.svg" />
                    </div>
                    <div className="col-1 text-center">
                      <Image src="/Live-area.svg" />
                    </div>
                    <div className="col-3 d-flex flex-column">
                      <p className="fw-bold mb-0 text-dark">Bali</p>
                      <p className="mb-0">1 Maret 2023</p>
                      <p className="mb-0">8:15</p>
                    </div>
                  </div>
                  <div className="border-bottom border-2 mt-1 mb-3"></div>
                  <div className="d-flex align-items-center">
                    <div className="col-4">
                      <p className="fw-bold mb-0 text-dark">Booking Code:</p>
                      <p className="mb-0">6723y2GHK</p>
                    </div>
                    <div className="col-4 offset-1">
                      <p className="fw-bold mb-0 text-dark">Class:</p>
                      <p className="mb-0">Bussines</p>
                    </div>
                    <div className="col-3">
                      <p className="fw-bold mb-0" style={{ color: "#4B1979" }}>
                        IDR 3.250.000
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
              <h4 className="fw-bold">Februari 2023</h4>
              <Card className="mb-2">
                <div className="p-3 rounded-3 mb-2">
                  <p className="col-2 rounded-5 text-white text-center p-1 mb-4" style={{ backgroundColor: "#8a8a8a" }}>
                    Cancelled
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
                    <div className="col-4 d-flex flex-column justify-content-center align-items-center mb-4">
                      <p className="mb-0">4h 0m</p>
                      <Image src="/Union.svg" />
                    </div>
                    <div className="col-1 text-center">
                      <Image src="/Live-area.svg" />
                    </div>
                    <div className="col-3 d-flex flex-column">
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
              </Card>
              <Card>
                <div className="p-3 rounded-3 mb-2">
                  <p className="col-2 rounded-5 text-white text-center p-1 mb-4" style={{ backgroundColor: "#73ca5c" }}>
                    Issued
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
                    <div className="col-4 d-flex flex-column justify-content-center align-items-center mb-4">
                      <p className="mb-0">4h 0m</p>
                      <Image src="/Union.svg" />
                    </div>
                    <div className="col-1 text-center">
                      <Image src="/Live-area.svg" />
                    </div>
                    <div className="col-3 d-flex flex-column">
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
              </Card>
            </div>
          </div>

          {/* DETAIL PESANAN */}
          <div className="col-5 mt-0">
            <div className="d-flex">
              <h4 className="me-auto fw-bold">Detail Pesanan</h4>
              <p className="col-2 rounded-5 text-white text-center p-1 mb-4" style={{ backgroundColor: "#73ca5c" }}>
                Issued
              </p>
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
              <Button className="checkout-biodata__btn-21 border-0 d-flex align-items-center justify-content-center mt-4 py-4">Cetak Tiket</Button>
            </div>
          </div>
        </Form>
      </Container>
    </>
  );
};

export default Riwayat;
