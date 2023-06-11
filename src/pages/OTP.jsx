import React, { useState } from "react";
import { Container, Navbar, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "/logo.svg";
import back from "/fi_arrow-left.svg";
import "./OTP.css";

const OTP = () => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);

  const handleChange = (index, event) => {
    const value = event.target.value;
    setOtp((prevOtp) => {
      const newOtp = [...prevOtp];
      newOtp[index] = value;
      return newOtp;
    });

    // Move to the next input box
    if (value !== "" && event.target.nextSibling) {
      event.target.nextSibling.focus();
    }
  };

  const handlePaste = (event) => {
    event.preventDefault();
    const pasteData = event.clipboardData.getData("text/plain");
    const newOtp = [...otp];

    // Only paste the first 4 characters
    for (let i = 0; i < Math.min(pasteData.length, 4); i++) {
      newOtp[i] = pasteData[i];
    }

    setOtp(newOtp);
  };

  return (
    <div>
      <Navbar className="fixed-top border-bottom shadow-sm">
        <Container>
          <Navbar.Brand>
            <Link to="/">
              <img className="logo-navbar" src={logo} alt="logo" />
            </Link>
          </Navbar.Brand>
        </Container>
      </Navbar>
      <div className="container otp-main">
        <Link to="/register">
          <img className="arrow-left" src={back} alt="arrow left" />
        </Link>
      </div>
      <div className="container otp-main-2">
        <h1 className="fw-bold">Masukkan OTP</h1>
        <p className="text-center mt-5 mb-4">
          Ketik 6 digit kode yang dikirimkan ke <span className="fw-bolder">J*****@gmail.com</span>
        </p>
        <form className="text-center">
          {otp.map((value, index) => (
            <input key={index} type="text" maxLength={1} value={value} onChange={(event) => handleChange(index, event)} onPaste={handlePaste} className="text-center" />
          ))}
          <p className="mt-3 mb-5">Kirim Ulang OTP dalam 60 detik</p>
          <Button className="btn-otp col-12 mt-5">Simpan</Button>
        </form>
      </div>
    </div>
  );
};

export default OTP;
