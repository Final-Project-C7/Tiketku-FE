import "./FormLogin.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function FormForget() {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const passwordInputType = passwordVisible ? "text" : "password";

  return (
    <>
      <h1 className="fw-bold mb-4">Forget Password</h1>

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

        {/* {error && <p className="error-message">{error}</p>} */}
        <div className="d-grid gap-2 mt-4">
          <button className="btn lg sign-up" type="submit">
            Reset Password
          </button>
        </div>
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

export default FormForget;
