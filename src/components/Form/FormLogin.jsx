import "./FormLogin.css";
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { Link } from "react-router-dom";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { Button } from "react-bootstrap";
import "../../pages/Login.css";

const FormLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // New state variable for loading
  const [showError, setShowError] = useState(false);

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

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true); // Start loading

    try {
      const response = await axios.post(
        "c7-tiketku.up.railway.app/api/v1/user/login",
        {
          email,
          password,
        }
      );

      localStorage.setItem("token", response.data.data.token);

      window.location.href = "https://travelesia-fe-production.up.railway.app/";
    } catch (error) {
      setError("Invalid email or password");
    }

    setIsLoading(false); // Stop loading
  };

  return (
    <>
      <h1 className="login fw-bold">Masuk</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <p className="mb-1">Email/No telepon</p>
        </div>
        <div className="input-group mb-3">
          <input
            type="email"
            className="login__form form-control"
            placeholder="Contoh: johndoe@gmail.com"
            aria-label="Email"
            name="email"
            value={email}
            onChange={handleEmailChange}
            required
            style={{ fontFamily: "Poppins" }}
          />
        </div>
        <div className="d-flex">
          <div className="pass">
            <p style={{ marginBottom: "0px" }}>Password</p>
          </div>
          <div className="ms-auto">
            <p style={{ marginBottom: "0px" }}>
              {" "}
              <Link to="/forget-password">Lupa Kata Sandi</Link>
            </p>
          </div>
        </div>

        <div className="input-group mb-2 mt-1">
          <input
            type={passwordVisible ? "text" : "password"}
            placeholder="Masukkan password"
            aria-label="Password"
            className="login__form form-control password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
            required
            style={{ fontFamily: "Poppins" }}
          />
          <span className="input-group-text" onClick={togglePasswordVisibility}>
            <FontAwesomeIcon icon={passwordVisible ? faEye : faEyeSlash} />
          </span>
        </div>
        {error && (
          <Button
            variant="danger"
            className="error-button d-flex justify-content-center error-message fade-out align-items-center"
            onClick={() => setError("")}
            style={{ width: "200px", fontSize: "13px", textAlign: "center" }}
          >
            {error}
          </Button>
        )}
        <div className="d-grid gap-2 mt-5">
          <button
            className="login__btn btn lg sign-up fw-bold"
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? "Loading..." : "Masuk"}
          </button>
        </div>
      </form>
      <p className="account mt-5 mb-1 text-center">
        Belum punya akun?{"  "}
        <Link to="/register" className="fw-bold register">
          Daftar di sini
        </Link>
      </p>
    </>
  );
};

export default FormLogin;
