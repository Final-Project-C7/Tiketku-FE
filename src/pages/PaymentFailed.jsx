import React from "react";
import { Image, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import NavbarHomepage from "../components/NavbarHomepage";
import NavbarUser from "../components/NavbarUser";

const PaymentFailed = () => {
  const token = localStorage.getItem("token");
  return (
    <>
      {token ? <NavbarUser /> : <NavbarHomepage />}
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
            <h4 className="fw-bold">Gagal</h4>
          </div>
          <div className="done__allert mt-2 mb-4 mx-4" style={{ backgroundColor: "#FF0000", borderRadius: "16px" }}>
            <h5 className="col-12 text-center text-white py-3 rounded-4">Pembayaran transaksi anda gagal</h5>
          </div>
        </Container>
      </div>
      <div className="payment-failed text-center mb-5">
        <Image src="/payment-failed.svg" className="mt-1" style={{ width: "17%" }} />
        <p className="fw-semibold mb-0" style={{ color: "#7126B5" }}>
          Pembayaran Gagal!
        </p>
        <p className="fw-semibold mb-0">The Payment was unsuccessful due to an abnormality. Please try again later or use another payment method</p>

        <Link className="d-flex justify-content-center">
          <Button className="d-block rounded-3 border-0 py-2 mt-5" style={{ width: "22%", backgroundColor: "#7126B5" }}>
            Try Again
          </Button>
        </Link>
        <Link className="d-flex justify-content-center">
          <Button className="d-block rounded-3 border-0 py-2 mt-3 opacity-50" style={{ width: "22%", backgroundColor: "#7126B5" }}>
            Need Help?
          </Button>
        </Link>
      </div>
    </>
  );
};

export default PaymentFailed;
