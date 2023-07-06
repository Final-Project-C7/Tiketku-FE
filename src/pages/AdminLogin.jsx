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
      <div className="container-fluid title-admin">
        <div className="box-admin">
          <FormLoginAdmin />
        </div>
      </div>
    </>
  );
};

export default AdminLogin;
