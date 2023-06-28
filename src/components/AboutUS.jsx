import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import NavbarHomepage from "../components/NavbarHomepage";
import NavbarUser from "../components/NavbarUser";

const AboutUs = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

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
      <div className="about-us"></div>
    </>
  );
};

export default AboutUs;
