import React from "react";
import { Image, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import NavbarHomepage from "../components/NavbarHomepage";
import NavbarUser from "../components/NavbarUser";

const PaymentSuccess = () => {
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
            <h4 className="fw-bold">Selesai</h4>
          </div>
          <div className="done__allert mt-2 mb-4 mx-4" style={{ backgroundColor: "#73CA5C", borderRadius: "16px" }}>
            <h5 className="col-12 text-center text-white py-3 rounded-4">Terimakasih atas pembayaran transaksi</h5>
          </div>
        </Container>
      </div>
      <div className="payment-success text-center ">
        <Image src="/Cart_shopping_list.svg" className="mt-5 mb-4" />
        <p className="fw-semibold mb-0" style={{ color: "#7126B5" }}>
          Selamat!
        </p>
        <p className="fw-semibold mb-0">Transaksi Pembayaran Tiket sukses!</p>

        <Link className="d-flex justify-content-center">
          <Button className="d-block rounded-3 border-0 py-2 mt-5" style={{ width: "22%", backgroundColor: "#7126B5" }}>
            Terbitkan Tiket
          </Button>
        </Link>
        <Link className="d-flex justify-content-center">
          <Button className="d-block rounded-3 border-0 py-2 mt-3 opacity-50" style={{ width: "22%", backgroundColor: "#7126B5" }}>
            Cari Penerbangan Lain
          </Button>
        </Link>
      </div>
    </>
  );
};

export default PaymentSuccess;
