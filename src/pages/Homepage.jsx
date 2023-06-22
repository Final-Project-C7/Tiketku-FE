import React, { useState, useEffect } from "react";
import axios from "axios";
import NavbarHomepage from "../components/NavbarHomepage";
import NavbarUser from "../components/NavbarUser";
import FormFlight from "../components/Form/FormFlight";
import DestinasiFav from "../components/DestinasiFav";
import { useParams, Link } from "react-router-dom";

function Homepage() {
  return (
    <>
      <NavbarHomepage />
      <FormFlight />
      <DestinasiFav />

      {/* {isLoggedIn ? (
        <NavbarLoggedIn /> // Replace with the navbar for logged-in users
      ) : (
        <NavbarHomepage />
      )}
      <FormFlight onLoginSuccess={handleLoginSuccess} />
      <DestinasiFav /> */}
    </>
  );
}

export default Homepage;
