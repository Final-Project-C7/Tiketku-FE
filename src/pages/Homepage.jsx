import React, { useState, useEffect } from "react";
import axios from "axios";
import NavbarHomepage from "../components/NavbarHomepage";
import NavbarUser from "../components/NavbarUser";
import FormFlight from "../components/Form/FormFlight";
import DestinasiFav from "../components/DestinasiFav";
import { useParams, Link } from "react-router-dom";
import Footer from "../components/Footer";

function Homepage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State untuk menyimpan status login pengguna

  useEffect(() => {
    // Cek apakah pengguna sudah login atau memiliki token di lokal
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true); // Jika ada token, pengguna dianggap sudah login
    }
  }, []);

  return (
    <>
      {isLoggedIn ? <NavbarUser /> : <NavbarHomepage />}
      <FormFlight />
      {/* Tambahkan komponen lain yang diperlukan */}
      <DestinasiFav />
      <Footer/>
    </>
  );
}

export default Homepage;
