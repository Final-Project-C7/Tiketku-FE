import React, { useState, useEffect } from "react";
import { Container, Image } from "react-bootstrap";
import NavbarHomepage from "../components/NavbarHomepage";
import NavbarUser from "../components/NavbarUser";

import "./AboutUs.css"

const AboutUs = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Cek apakah pengguna sudah login atau memiliki token di lokal
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true); // Jika ada token, pengguna dianggap sudah login
    }
  }, []);

  const style = `
  .about-us{
    padding-top:100px !important;
    color:#4b1979 !important;
    
  }

  .about-us__img{
    width: 60%;

    margin-right:20px;
  }

  .text__left{
    padding-top:120px;
  }

  
  `;

  return (
    <>
      <style>{style}</style>
      {isLoggedIn ? <NavbarUser /> : <NavbarHomepage />}
      <Container className="about">
        <div className="about-us">
          <h1 className="about-us__text text-center">T R A V E L E S I A</h1>
          <h4 className="text-dark text-center">YOUR BEST TRAVELING PARTNER</h4>
          <div className="row">
            <div className="col-8">
              <Image className="about-us__img mt-3" src="/pesawat2.jpg" alt="about us" />
            </div>

            <div className="text__left col-4 ms-0">  
              {/* <h5>
              Platform ini merupakan tempat beli dan booking tiket penerbangan secara online,<br/>
              baik one way (sekali penerbangan) dan round trip (pulang pergi).<br/>
              Platform ini membuka dan menyediakan berbagai jenis penerbangan domestik dan mancanegara dengan fitur dan harga terbaik di kelasnya.
              </h5> */}

            </div>

          </div>
          
          
          

        </div>

      </Container>
      
    </>
  );
};

export default AboutUs;
