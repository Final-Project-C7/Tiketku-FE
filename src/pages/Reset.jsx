import React, { useState } from "react";
import loginLogo from "/Group 92.svg";
import FormReset from "../components/Form/FormReset";

function Reset() {
  const styles = `
  .container-fluid {
    padding-left:0px;
  }
  `;
  return (
    <>
      <style>{styles}</style>
      <div className="container-fluid d-flex flex-column justify-content-end">
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
            <FormReset />
          </div>
        </div>
      </div>
    </>
  );
}

export default Reset;
