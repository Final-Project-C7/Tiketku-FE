import "./FormLogin.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import { Button } from "react-bootstrap";

function FormLoginAdmin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [loading, setLoading] = useState(false); // Tambahkan state loading
  const navigateTo = useNavigate();

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

    try {
      setLoading(true); // Atur loading menjadi true saat memulai pengiriman permintaan
      const response = await axios.post("https://c7-tiketku.up.railway.app/api/v1/admin/login", {
        email,
        password,
      });

      localStorage.setItem("token", response.data.data.token);

      navigateTo("/admin");
    } catch (error) {
      setError("Invalid email or password");
      setLoading(false);
    }
  };

  return (
    <>
      <p className="admin-title-name">Admin</p>
      <h1 className="fw-bold mb-4 ">Masuk </h1>
      <form onSubmit={handleSubmit}>
        <div>
          <p className="mb-1">Email</p>
        </div>
        <div className="input-group mb-3">
          <input type="email" className="login__form form-control" placeholder="Contoh: johndoe@gmail.com" aria-label="Email" name="email" value={email} onChange={handleEmailChange} required style={{ fontFamily: "Poppins" }} />
        </div>
        <div className="d-flex">
          <div>
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
            type={passwordVisible ? "text" : "password"} // Menggunakan "text" jika passwordVisible true, dan "password" jika false
            placeholder="Masukkan password"
            aria-label="Password"
            className="login__form form-control password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
            autoComplete="off" // Menggunakan autoComplete dengan huruf kecil
            required
            style={{ fontFamily: "Poppins" }}
          />
          <span className="input-group-text" onClick={togglePasswordVisibility}>
            <FontAwesomeIcon icon={passwordVisible ? faEye : faEyeSlash} />
          </span>
        </div>
        {error && <p className="error-message">{error}</p>}
        <div className="d-grid gap-2 mt-5">
          <button className="login__btn btn lg sign-up fw-bold" type="submit" disabled={loading}>
            {loading ? "Loading..." : "Masuk"}
          </button>
        </div>
      </form>
      {/* {success && <p>Login successful!</p>} */}
      <p className="mt-5 mb-1 text-center">
        Belum punya akun?{"  "}
        <Link to="/admin-register" className="fw-bold register">
          Daftar di sini
        </Link>
      </p>
    </>
  );
}

export default FormLoginAdmin;
