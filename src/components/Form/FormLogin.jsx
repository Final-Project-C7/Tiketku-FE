import "./FormLogin.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";

function FormLogin() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [token, setToken] = useState(null);
  const [success, setSuccess] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const passwordInputType = passwordVisible ? "text" : "password";

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const response = await fetch(
        "https://c7-tiketku.up.railway.app/api/v1/user/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (response.ok) {
        setToken(data.token);
        setSuccess(true);
        // Perform any other necessary actions upon successful login
      } else {
        setError(data.message || "Something went wrong");
      }
    } catch (error) {
      setError("Something went wrong");
    }

    setLoading(false);
  };

  return (
    <>
      <h1 className="fw-bold mb-4">Masuk</h1>
      <form onSubmit={handleFormSubmit}>
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
            value={formData.email}
            onChange={handleInputChange}
            required
            style={{ fontFamily: "Poppins" }}
          />
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
            type={passwordInputType}
            placeholder="Masukkan password"
            aria-label="Password"
            className="login__form form-control password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
            style={{ fontFamily: "Poppins" }}
          />
          <span className="input-group-text" onClick={togglePasswordVisibility}>
            <FontAwesomeIcon icon={passwordVisible ? faEye : faEyeSlash} />
          </span>
        </div>
        {error && <p className="error-message">{error}</p>}
        <div className="d-grid gap-2 mt-5">
          <button
            className="login__btn btn lg sign-up fw-bold"
            type="submit"
            disabled={loading}
          >
            {loading ? "Loading..." : "Masuk"}
          </button>
        </div>
      </form>
      {success && <p>Login successful!</p>}
      <p className="mt-5 mb-1 text-center">
        Belum punya akun?{"  "}
        <Link to="/register" className="fw-bold register">
          Daftar di sini
        </Link>
      </p>
    </>
  );
}

export default FormLogin;
