import React, { useState } from "react";
import axios from "axios";
import loginLogo from "/Group 92.svg";
import "./AdminLoginRegister.css";

// import logo from "grouplogo.png";
import FormLoginAdmin from "../components/Form/FormLoginAdmin";

const AdminLogin = () => {
  const styles = `
  .container-fluid {
    padding-left:0px;
  }

  
  `;

  return (
    <>
      <style>{styles}</style>
      {/* <div className="container-fluid d-flex flex-column justify-content-end">
        <div className="row align-items-center">
          <div className="col-md-6">
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

          <div className="col-md-5 ms-5 me-xxl-5 ps-xxl-4">
            <FormLoginAdmin />
          </div>
        </div>
      </div> */}

      <div className="container-fluid title-admin">
        <div className="box-admin">
          <FormLoginAdmin />
        </div>
      </div>
    </>
  );
};

export default AdminLogin;
