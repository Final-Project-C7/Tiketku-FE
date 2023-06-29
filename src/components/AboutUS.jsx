import React, { useState, useEffect } from "react";
import { Container, Image, Carousel } from "react-bootstrap";
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

  `;

  return (
    <>
      <style>{style}</style>
      {isLoggedIn ? <NavbarUser /> : <NavbarHomepage />}
      <Container className="about">
        <div className="about-us">
          <h1 className="about-us__text text-center">T R A V E L E S I A</h1>
          <h4 className="text-dark text-center">YOUR BEST TRAVELING PARTNER</h4>
          
          <div className="mt-3">
            <Carousel>
              <Carousel.Item>
                <img
                  className="mx-auto d-block w-50"
                  src="./p1.jpg"
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="mx-auto d-block w-50"
                  src="/p2.jpg"
                  alt="Second slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="mx-auto d-block w-50"
                  src="/p3.jpg"
                  alt="Third slide"
                />
              </Carousel.Item>
            </Carousel>

              {/* <Image className="about-us__img mt-3 mx-auto d-block" src="/pesawat2.jpg" alt="about us" /> */}
          </div>

          <div className="text-center mt-3">  
              <h5>
              Welcome to our e-Ticket Airline Application! We are dedicated to providing you with a convenient
              and hassle-free way to book and manage your flight tickets. Our goal is to make your travel
              experience seamless and enjoyable from start to finish.
              At e-Ticket Airline, we understand the importance of efficient and
              reliable ticketing services. That's why we have developed a user-friendly platform
              that allows you to search, compare, and book flights with ease. With just a few clicks, you can find the best fares, select your preferred seats, and complete your reservation securely.
              </h5>
          </div>
        </div>

      </Container>
      
    </>
  );
};

export default AboutUs;
