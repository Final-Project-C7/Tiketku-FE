import "./FormLogin.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import axios from "axios";

function FormRegister() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);

    try {
      const response = await axios.post(
        "https://c7-tiketku.up.railway.app/api/v1/admin/register",
        {
          name,
          email,
          phoneNumber,
          password,
        }
      );

      // Handle successful registration
      const { newUser, otp } = response.data.data;
      console.log(newUser); // Do something with newUser
      console.log(otp); // Do something with otp

      // Reset form field
      setName("");
      setEmail("");
      setPhoneNumber("");
      setPassword("");
      setSuccessMessage("registrasi berhasil");
      setError("");
      setShowModal(true);
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
      setSuccessMessage("");
    }

    setIsLoading(false);
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
      color: red;
      margin-bottom: 10px;
    }
    
  `;

  return (
    <>
      <style>{style}</style>
      <h1 className="fw-bold mb-4">Daftar Admin</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <p className="mb-1">Nama</p>
        </div>
        <div className="input-group mb-3">
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
        <div className="input-group mb-3">
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
          <p className="mb-1">Password</p>
        </div>

        <div className="input-group mb-2 mt-1">
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

        {error && <p className="error-message">{error}</p>}
        <div className="d-grid gap-2 mt-4">
          <button className="register__btn btn lg sign-up" type="submit">
            Register
          </button>
        </div>
      </form>
      <p className="mt-5 mb-1 text-center">
        Sudah punya akun?{"  "}
        <Link to="/admin-login" className="fw-bold register">
          Masuk di sini
        </Link>
      </p>

      {successMessage && (
        <Modal
          show={showModal}
          onHide={handleCloseModal}
          backdrop="static"
          keyboard={false}
          centered
        >
          <Modal.Header>
            <Modal.Title>Registration Success</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>
              Congratulations {successMessage},
              <Link
                to={"https://c7-tiketku.up.railway.app/admin-login"}
                className="fw-bold"
              >
                {" "}
                Click Login
              </Link>
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button
              style={{ padding: "10px 20px" }}
              variant="primary"
              onClick={handleCloseModal}
            >
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </>
  );
}

export default FormRegister;
