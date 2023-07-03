import React, { useState } from "react";
import { Image, Button, Container } from "react-bootstrap";
import NavbarUser from "./NavbarUser";
import NotifModal from "./Beranda/NotifModal";
import { Link, useLocation } from "react-router-dom"
import "./Payment.css";
import Moment from "moment";
import { useSelector } from "react-redux";

const Payment = () => {
  const [expanded, setExpanded] = useState(false);
  const location = useLocation();
  // console.log(location);
  // console.log(location?.state?.state?.business_price);
  const { selectedClass } = useSelector((state) => state.class);
  const { adult, children, baby } = useSelector((state) => state.passenger);

  const handleExpand = () => {
    setExpanded(!expanded);
  };
  return (
    <>
      <NavbarUser />
      <div className="border-bottom shadow-sm">
        <Container className="checkout-breadcrumbs">
          <div className="d-flex">
            <h4 className="fw-bold">
              Isi Data Diri
              <span className="mx-2" style={{ color: "#8A8A8A" }}>
                &gt;
              </span>
            </h4>
            <h4 className="fw-bold">
              Bayar
              <span className="mx-2" style={{ color: "#8A8A8A" }}>
                &gt;
              </span>
            </h4>
            <h4 className="fw-bold" style={{ color: "#8A8A8A" }}>
              Selesai
            </h4>
          </div>
          {/* <div className="checkout-breadcrumbs__alert mt-2 mb-4 mx-4">
            <h5 className="col-12 text-center text-white py-3 rounded-4">
              Data Anda berhasil tersimpan!
            </h5>
          </div> */}
        </Container>
      </div>
      <Container className="payment">
        <div className="row d-flex my-5">
          <div className="payment-data col-7">
            <h4 className="fw-bold mb-3">Isi Data Pembayaran</h4>
            <div
              className="d-flex align-items-center bg-dark text-white rounded-2 p-3 mb-3"
              style={{ cursor: "pointer" }}
            >
              <h5 className="mb-0 me-auto">Gopay</h5>
              <Image className="payment-data__img" src="/arrow-down.svg" />
            </div>
            <div
              className="d-flex align-items-center bg-dark text-white rounded-2 p-3 mb-3"
              style={{ cursor: "pointer" }}
            >
              <h5 className="mb-0 me-auto">Virtual Account</h5>
              <Image className="payment-data__img" src="/arrow-down.svg" />
            </div>
            <div
              className={`${expanded ? "payment-data__list" : "bg-dark"
                } d-flex align-items-center text-white rounded-2 p-3`}
              onClick={handleExpand}
              style={{ cursor: "pointer" }}
            >
              <h5 className="mb-0 me-auto">Credit Card</h5>
              {expanded ? (
                <Image className="payment-data__img" src="/arrow-up.svg" />
              ) : (
                <Image className="payment-data__img" src="/arrow-down.svg" />
              )}
            </div>
            {expanded && (
              <>
                <div className="payment-data__expanded mx-auto">
                  <div className="d-flex justify-content-center py-4">
                    <Image
                      className="payment-data__logo me-2"
                      src="mastercard-logo.svg"
                    />
                    <Image
                      className="payment-data__logo me-2"
                      src="visa-logo.svg"
                    />
                    <Image
                      className="payment-data__logo me-2"
                      src="amex-logo.svg"
                    />
                    <Image
                      className="payment-data__logo"
                      src="paypal-logo.svg"
                    />
                  </div>
                  <div>
                    <p className="fw-bold mb-0">Card number</p>
                    <p className="mb-0 mx-1" style={{ color: "#8A8A8A" }}>
                      4480 0000 0000 0000
                    </p>
                    <div className="border-bottom border-2 mt-1 mb-3"></div>
                  </div>
                  <div>
                    <p className="fw-bold mb-0">Card holder name</p>
                    <p className="mb-0 mx-1" style={{ color: "#8A8A8A" }}>
                      John Doe
                    </p>
                    <div className="border-bottom border-2 mt-1 mb-3"></div>
                  </div>
                  <div className="d-flex">
                    <div className="col-5 me-auto">
                      <p className="fw-bold mb-0">CVV</p>
                      <p className="mb-0 mx-1" style={{ color: "#8A8A8A" }}>
                        000
                      </p>
                      <div className="border-bottom border-2 mt-1 mb-3"></div>
                    </div>
                    <div className="col-5">
                      <p className="fw-bold mb-0">Expiry date</p>
                      <p className="mb-0 mx-1" style={{ color: "#8A8A8A" }}>
                        07/24
                      </p>
                      <div className="border-bottom border-2 mt-1 mb-2"></div>
                    </div>
                  </div>
                </div>
                <NotifModal />
                {/* <Button className="col-12 text-white rounded-4 border-0 py-3">
                  <h4 className="mb-0">Bayar</h4>
                </Button> */}
              </>
            )}
          </div>
          <div className="payment-booking-code col-5 mt-5 mt-md-0">
            <h4 className="fw-bold mb-3">
              Booking Code:
              <span className="fw-bold" style={{ color: "#7126B5" }}>
                6723y2GHK
              </span>
            </h4>
            <div className="d-flex align-items-center">
              <h5 className="fw-bold me-auto mb-0">
                {Moment(location?.state?.state?.departure_time).format("HH:mm")}
              </h5>
              <p
                className="fw-bold mb-0"
                style={{ fontSize: "12px", color: "#a06ece" }}
              >
                Keberangkatan
              </p>
            </div>
            <p className="mb-0">{Moment(location?.state?.state?.arrival_time).format('dddd, Do MMMM  YYYY')}</p>
            <p className="fw-medium mb-0">
              {location?.state?.state?.departureAirport.airport_name}
            </p>
            <div className="border-bottom my-2"></div>
            <div className="d-flex align-items-center">
              <div className="col-1">
                <Image
                  className="payment-booking-code__img"
                  src="/Image-1.svg"
                />
              </div>
              <div className="col-12">
                <p className="fw-bold mb-0">{location?.state?.state?.airline.airline_name} - {selectedClass}</p>
                <p className="fw-bold mb-3">{location?.state?.state?.flight_code}</p>
                <p className="fw-bold mb-0">Informasi:</p>
                <p className="mb-0">Baggage {location?.state?.state?.airline.baggage} kg</p>
                <p className="mb-0">Cabin baggage {location?.state?.state?.airline.cabin_baggage} kg</p>
                <p className="mb-0">In Flight Entertainment</p>
              </div>
            </div>
            <div className="border-bottom my-2"></div>
            <div className="d-flex align-items-center">
              <p className="fw-bold me-auto mb-0">{Moment(location?.state?.state?.arrival_time).format("HH:mm")}</p>
              <p
                className="fw-bold mb-0"
                style={{ fontSize: "12px", color: "#a06ece" }}
              >
                Kedatangan
              </p>
            </div>
            <p className="mb-0">{Moment(location?.state?.state?.arrival_time).format('dddd, Do MMMM  YYYY')}</p>
            <p className="fw-medium mb-0">{location?.state?.state?.arrivalAirport.airport_name}</p>
            <div className="border-bottom my-2"></div>
            <div className="mx-2">
              <p className="fw-bold mb-0">Rincian Harga</p>
              <div className="d-flex">
                <p className="mb-0 me-auto">{adult} Adults</p>
                <p className="mb-0">IDR {location?.state?.state?.business_price}</p>
              </div>
              <div className="d-flex">
                <p className="mb-0 me-auto">{children} Children</p>
                <p className="mb-0">IDR {location?.state?.state?.business_price}</p>
              </div>
              <div className="d-flex">
                <p className="mb-0 me-auto">{baby} Baby</p>
                <p className="mb-0">IDR 0</p>
              </div>
              <div className="d-flex">
                <p className="mb-0 me-auto">Tax</p>
                <p className="mb-0">IDR {(Number(location?.state?.state?.business_price) * Number(adult + children)) * 0.1}</p>
              </div>
              <div className="border-bottom my-2"></div>
              <div className="d-flex">
                <h5 className="fw-bold mb-0 me-auto">Total</h5>
                <h5
                  className="fw-bold mb-0"
                  style={{ fontSize: "18px", color: "#7126B5" }}
                >
                  IDR {Number(location?.state?.state?.business_price) * Number(adult + children) + (Number(location?.state?.state?.business_price) * Number(adult + children)) * 0.1}
                </h5>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Payment;
