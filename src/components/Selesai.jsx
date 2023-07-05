import React, { useState, useEffect } from "react";
import { Image, Button, Container } from "react-bootstrap";
import NavbarUser from "./NavbarUser";
import NavbarHomepage from "./NavbarHomepage";
import NotifModal from "./Beranda/NotifModal";
import { Link, useLocation } from "react-router-dom";

import paymentsucces from "/payment_succes.svg";
import buttonsucces from "/button__succes.svg";

const Selesai = () => {
  const [expanded, setExpanded] = useState(false);

  const [isLoggedIn, setIsLoggedIn] = useState(false); // State untuk menyimpan status login pengguna

  useEffect(() => {
    // Cek apakah pengguna sudah login atau memiliki token di lokal
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true); // Jika ada token, pengguna dianggap sudah login
    }
  }, []);


  const style = `

  .done__allert {
    background-color: #73CA5C;
    border-radius:16px;
  }

  .done{
    padding-left:500px;
  }

  .txt{
    margin-left:62px;
  }

  
  `;

  return (
    <>
    
      {isLoggedIn ? <NavbarUser /> : <NavbarHomepage />}
      <style>{style}</style>
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
            <h4 className="fw-bold">
              Selesai
            </h4>
          </div>
          <div className="done__allert mt-2 mb-4 mx-4">
            <h5 className="col-12 text-center text-white py-3 rounded-4">
              Terimakasih atas pembayaran transaksi
            </h5>
          </div>
        </Container>
      </div>
      <Container className="done d-flex">
        <div className="payment__succes mt-5">
            <img src={paymentsucces} />
            <p className="txt mt-4 sold-out">
                Selamat
                <br />
                <span>Transaksi Pembayaran Tiket Sukses</span>
            </p>
            <img src={buttonsucces} />
        </div>
      </Container>

        
    </>
  );
};

export default Selesai;
