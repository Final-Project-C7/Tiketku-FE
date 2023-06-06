import "./FormLogin.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";

function FormLogin() {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const passwordInputType = passwordVisible ? "text" : "password";

  return (
    <>
      <h1 className="fw-bold mb-4">Masuk</h1>
      <form onSubmit={(e) => e.preventDefault}>
        <div>
          <p className="mb-1">Email/No telepon</p>
        </div>
        <div className="input-group mb-3">
          <input
            type="email"
            className="form-control"
            placeholder="Contoh: johndoe@gmail.com"
            aria-label="Email"
            // value={email}
            onChange={(e) => e.preventDefault}
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
            className="form-control password"
            // value={password}
            onChange={(e) => e.preventDefault}
            required
            style={{ fontFamily: "Poppins" }}
          />
          <span className="input-group-text" onClick={togglePasswordVisibility}>
            <FontAwesomeIcon icon={passwordVisible ? faEye : faEyeSlash} />
          </span>
        </div>
        {/* {error && <p className="error-message">{error}</p>} */}
        <div className="d-grid gap-2 mt-5">
              <button
                className="btn lg sign-up fw-bold"
                type="submit"
              >
                Masuk
              </button>
            </div>
        {/* <div className="d-grid gap-2 mt-4">
          <button className="btn btn-primary lg sign-up" type="submit">
            Masuk
          </button>
        </div> */}
      </form>
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
