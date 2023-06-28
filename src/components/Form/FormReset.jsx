import "./FormLogin.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import "../../pages/Login.css"

function FormReset() {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const passwordInputType = passwordVisible ? "text" : "password";

  return (
    <>
      <h1 className="reset fw-bold">Reset Password</h1>

      <form onSubmit={(e) => e.preventDefault}>
        <div className="d-flex input-pw mt-4">
          <div>
            <p style={{ marginBottom: "0px" }}>Masukkan Password Baru</p>
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
        <div className="d-flex input-pw mt-4">
          <div>
            <p style={{ marginBottom: "0px" }}>Ulangi Password Baru</p>
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
          <button className="reset-pass__btn lg sign-up rounded-4 py-2" type="submit">
            Simpan
          </button>
        </div>
      </form>
    </>
  );
}

export default FormReset;
