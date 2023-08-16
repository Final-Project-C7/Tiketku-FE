import React, { useState } from "react";
import axios from "axios";
import loginLogo from "/Group 92.svg";
// import logo from "grouplogo.png";
import FormLogin from "../components/Form/FormLogin";
import "./Login.css";

const Login = () => {
  const styles = `
  .container-fluid {
    padding-left:0px;
  }
  `;

  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [error, setError] = useState("");

  // const handleEmailChange = (event) => {
  //   setEmail(event.target.value);
  // };

  // const handlePasswordChange = (event) => {
  //   setPassword(event.target.value);
  // };

  // const handleSubmit = async (event) => {
  //   event.preventDefault();

  //   try {
  //     const response = await axios.post(
  //       "http://localhost:8000/api/v1/auth/login",
  //       {
  //         email,
  //         password,
  //       }
  //     );

  //     // Simpan token ke penyimpanan lokal (localStorage atau session storage)
  //     localStorage.setItem("token", response.data.data.token);

  //     // Redirect ke halaman localhost:3000 setelah login berhasil
  //     window.location.href = "http://localhost:3000/dashboard";
  //   } catch (error) {
  //     setError("Invalid email or password");
  //   }
  // };

  return (
    <>
      <style>{styles}</style>
      <div className="container-fluid justify-content-end">
        <div className="row align-items-center">
          <div className="col-md-6 d-none d-md-block">
            <img
              src={loginLogo}
              alt="background"
              style={{
                width: "100%",
                maxHeight: "100vh", // Atur tinggi maksimal gambar agar sesuai dengan tinggi layar
                objectFit: "cover",
              }}
            />
          </div>

          <div className="log col-md-6 col-lg-5 col-md-5 mx-auto">
            <div className="row">
              <FormLogin />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
