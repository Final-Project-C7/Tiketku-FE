import React, { useState } from "react";
import axios from "axios";
import loginLogo from "/Group 92.svg";
import "./AdminLoginRegister.css";
// import logo from "grouplogo.png";
import FormRegisterAdmin from "../components/Form/FormRegisterAdmin";

const AdminRegister = () => {
  const styles = `
  .container-fluid {
    padding-left:0px;
  }

  
  `;

  return (
    <>
      <style>{styles}</style>
      <div className="bg">
        <div className="container-fluid title-admin">
          <div className="box-admin">
            <FormRegisterAdmin />
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminRegister;
