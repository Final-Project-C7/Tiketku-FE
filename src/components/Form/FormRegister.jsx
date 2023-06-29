import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { Modal, Button } from "react-bootstrap";
import loadingGif from "/loading-regis.gif";
import axios from "axios";
import "../../pages/Login.css";

function FormRegister() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showError, setShowError] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  useEffect(() => {
    let timer;
    if (error) {
      setShowError(true);
      timer = setTimeout(() => {
        setError("");
        setShowError(false);
      }, 3000); // Waktu penundaan, dalam milidetik (di sini 5000ms atau 5 detik)
    }
    return () => clearTimeout(timer);
  }, [error]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);
    setShowModal(true); // Menampilkan modal saat loading dimulai

    try {
      const response = await axios.post(
        "https://c7-tiketku.up.railway.app/api/v1/user/register",
        {
          name,
          email,
          phoneNumber,
          password,
        }
      );

      localStorage.setItem("email", email);

      // Handle successful registration
      const { newUser, otp } = response.data.data;
      console.log(newUser); // Do something with newUser
      console.log(otp); // Do something with otp

      // Reset form field
      setName("");
      setEmail("");
      setPhoneNumber("");
      setPassword("");
      setError("");

      // Generate the OTP URL with the email as a parameter
      const otpUrl = `/otp`;

      // Navigate to OTP page
      window.location.href = otpUrl;
    } catch (error) {
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        setError(error.response.data.message);
      } else {
        setError("Failed to register");
      }
    }

    setIsLoading(false);
    setShowModal(false); // Menutup modal setelah loading selesai
  };

  const passwordInputType = passwordVisible ? "text" : "password";

  const style = `
    .register__btn {
      border: none;
      padding: 14px 20px;
      font-size: 14px;
      background: #7126b5 !important;
      border-radius: 16px;
      color: #d0d0d0 !important;
    }

    .input-group-text {
      border-radius: 16px;
      background-color: rgba(255, 0, 0, 0);
    }
    
    .input-group > .register__form {
      border: 1px solid #d0d0d0;
    }
    
    .input-group > .password {
      border: 1px solid #d0d0d0;
      border-right: 0px;
    }
    
    .register__form:focus {
      color: var(--bs-body-color);
      background-color: var(--bs-body-bg);
      border-color: #7126b5 !important;
      outline: 0;
      box-shadow: 0 0 0 0.25rem rgb(247, 238, 244);
    }
    
    .register__btn {
      border: none;
      padding: 14px 20px;
      font-size: 14px;
      background: #7126b5 !important;
      border-radius: 16px;
      color: #d0d0d0 !important;
    }
    
    .btn-check:checked + .register__btn,
    .btn.active,
    .btn.show,
    .register__btn:first-child:active,
    :not(.btn-check) + .register__btn:active,
    .register__btn:hover {
      background: #4b197a !important;
      border: none;
    }
    
    .btn.disabled,
    .register__btn:disabled,
    fieldset:disabled .register__btn {
      color: var(--bs-btn-disabled-color);
      pointer-events: none;
      background-color: #7126b5 !important;
      border: none;
      opacity: var(--bs-btn-disabled-opacity);
    }
    
    a {
      color: #7126b5 !important;
      text-decoration: none;
    }
    
    .error-message {
      color: white;
      margin-top: 7px
      margin-bottom: 10px;
    }
    
    .fade-out {
      animation: fadeOut 3s ease-out;
      animation-fill-mode: forwards;
    }
    
    /* Animasi fade-out */
    @keyframes fadeOut {
      from {
        opacity: 1;
      }
      to {
        opacity: 0;
      }
    }
  `;
  return (
    <>
      <style>{style}</style>
      <h1 className="regis fw-bold">Daftar</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <p className="mb-1">Nama</p>
        </div>
        <div className="input-group">
          <input
            type="text"
            className="register__form form-control"
            placeholder="Nama Lengkap"
            aria-label="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            style={{ fontFamily: "Poppins" }}
          />
        </div>

        <div>
          <p className="mb-1">Email</p>
        </div>
        <div className="input-group">
          <input
            type="email"
            className="register__form form-control"
            placeholder="Contoh: johndoe@gmail.com"
            aria-label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{ fontFamily: "Poppins" }}
          />
        </div>

        <div>
          <p className="mb-1">Nomor Telepon</p>
        </div>
        <div className="input-group">
          <input
            type="tel"
            className="register__form form-control"
            placeholder="+62"
            aria-label="Nomor"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
            style={{ fontFamily: "Poppins" }}
          />
        </div>

        <div>
          <p className="mb-1">Password</p>
        </div>

        <div className="input-group">
          <input
            type={passwordInputType}
            placeholder="Masukkan password"
            aria-label="Password"
            className="register__form form-control password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{ fontFamily: "Poppins" }}
          />
          <span className="input-group-text" onClick={togglePasswordVisibility}>
            <FontAwesomeIcon icon={passwordVisible ? faEye : faEyeSlash} />
          </span>
        </div>

        {showError && (
          <Button
            variant="danger"
            className="error-button d-flex justify-content-center error-message fade-out align-items-center"
            onClick={() => setError("")}
            style={{ width: "150px", fontSize: "13px", textAlign: "center" }}
          >
            {error}
          </Button>
        )}

        <div className="d-grid gap-2 mt-4">
          <button className="register__btn btn lg sign-up" type="submit">
            Register
          </button>
        </div>
      </form>

      <Modal
        show={showModal}
        centered
        className="d-flex align-items-center justify-content-center"
      >
        <Modal.Body style={{ width: "200px" }} className="text-center">
          <img src={loadingGif} alt="loading" style={{ width: "100%" }} />
          <p>Please Wait...</p>
        </Modal.Body>
      </Modal>

      <p className="mt-5 mb-1 text-center">
        Sudah punya akun?{"  "}
        <Link to="/login" className="fw-bold register">
          Masuk di sini
        </Link>
      </p>
    </>
  );
}

export default FormRegister;
