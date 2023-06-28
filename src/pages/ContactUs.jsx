import React, { useState, useEffect } from "react";
import NavbarHomepage from "../components/NavbarHomepage";
import NavbarUser from "../components/NavbarUser";

const ContactUs = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State untuk menyimpan status login pengguna
  useEffect(() => {
    // Cek apakah pengguna sudah login atau memiliki token di lokal
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true); // Jika ada token, pengguna dianggap sudah login
    }
  }, []);

  return (
    <div>
      <style>
        {`.ftco-section {
          
  padding: 7em 0; }

.ftco-no-pt {
  padding-top: 0; 
}

.ftco-no-pb {
  padding-bottom: 0; }

.heading-section {
  font-size: 28px;
  color: #000; }

.img {
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center; }

.form-control {
  height: 44px;
  background: #fff;
  color: rgba(0, 0, 0, 0.8);
  font-size: 14px;
  border-radius: 2px;
  -webkit-box-shadow: none !important;
  box-shadow: none !important;
  border: none; }
  .form-control::-webkit-input-placeholder {
    /* Chrome/Opera/Safari */
    color: rgba(0, 0, 0, 0.3) !important; }
  .form-control::-moz-placeholder {
    /* Firefox 19+ */
    color: rgba(0, 0, 0, 0.3) !important; }
  .form-control:-ms-input-placeholder {
    /* IE 0+ */
    color: rgba(0, 0, 0, 0.3) !important; }
  .form-control:-moz-placeholder {
    /* Firefox 18- */
    color: rgba(0, 0, 0, 0.3) !important; }
  .form-control:focus, .form-control:active {
    border-color: #2553b8 !important; }

textarea.form-control {
  height: inherit !important; }

.wrapper {
  width: 100%; 
 
}

.contact-wrap {

  background: #e8edf0; }

.dbox {
  width: 100%;
  margin-bottom: 25px;
  padding: 0 20px; }
  @media (min-width: 768px) {
    .dbox {
      margin-bottom: 0;
      padding: 0; } }
  .dbox p {
    margin-bottom: 0; }
    .dbox p span {
      font-weight: 500;
      color: #000; }
    .dbox p a {
      color: #2553b8; }
  .dbox .icon {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: #2553b8;
    margin: 0 auto;
    margin-bottom: 20px; }
    .dbox .icon span {
      font-size: 20px;
      color: #fff; }
  .dbox .text {
    width: 100%; }


.contactForm .label {
  color: #000;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 600; }

.contactForm .form-control {
  border: none; }

#map {
  width: 100%; }
  @media (max-width: 767.98px) {
    #map {
      height: 300px; } }

#contactForm .error {
  color: red;
  font-size: 12px; }

#contactForm .form-control {
  font-size: 16px; }

#message {
  resize: vertical; }

#form-message-warning, #form-message-success {
  display: none; }

#form-message-warning {
  color: red; }

#form-message-success {
  color: #28a745;
  font-size: 18px;
  font-weight: 500; }

.submitting {
  float: left;
  width: 100%;
  padding: 10px 0;
  display: none;
  font-size: 16px;
  font-weight: 500;
  color: #2553b8; }
`}
      </style>
      {isLoggedIn ? <NavbarUser /> : <NavbarHomepage />}
      <section className="ftco-section ">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6 text-center mb-4">
              <h2 className="heading-section">Contact Form</h2>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-12">
              <div className="wrapper">
                <div className="row no-gutters mb-5">
                  <div className="col-md-7">
                    <div className="contact-wrap w-100 p-md-5 p-4">
                      <h3 className="mb-4">Contact Us</h3>
                      <div id="form-message-warning" className="mb-4"></div>
                      <div id="form-message-success" className="mb-4">
                        Your message was sent, thank you!
                      </div>
                      <form
                        method="POST"
                        id="contactForm"
                        name="contactForm"
                        className="contactForm"
                      >
                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-group">
                              <label className="label" htmlFor="name">
                                Full Name
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                name="name"
                                id="name"
                                placeholder="Name"
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <label className="label" htmlFor="email">
                                Email Address
                              </label>
                              <input
                                type="email"
                                className="form-control"
                                name="email"
                                id="email"
                                placeholder="Email"
                              />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-group">
                              <label className="label" htmlFor="subject">
                                Subject
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                name="subject"
                                id="subject"
                                placeholder="Subject"
                              />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-group">
                              <label className="label" htmlFor="#">
                                Message
                              </label>
                              <textarea
                                name="message"
                                className="form-control"
                                id="message"
                                cols="30"
                                rows="4"
                                placeholder="Message"
                              ></textarea>
                            </div>
                          </div>
                          <div className="col-md-12 mt-3">
                            <div className="form-group">
                              <button
                                type="submit"
                                className="btn-contact-us btn-primary"
                                style={{
                                  backgroundColor: "#7126b5",
                                  border: "none",
                                  color: "#fff",
                                  borderRadius: "5px",
                                  height: "40px",
                                  width: "170px",
                                }}
                              >
                                Send Message
                              </button>
                              <div className="submitting"></div>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="col-md-5 d-flex align-items-stretch">
                    <div id="map">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2030442.5996235695!2d104.21539025624999!3d-6.302018600000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69fb13e4fc0679%3A0x10a1fd06772af901!2sBINAR%20HQ!5e0!3m2!1sid!2sid!4v1687933674530!5m2!1sid!2sid"
                        width="600"
                        height="450"
                        style={{ border: "0" }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      ></iframe>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-3">
                    <div className="dbox w-100 text-center">
                      <div className="icon d-flex align-items-center justify-content-center">
                        <span className="fa fa-map-marker"></span>
                      </div>
                      <div className="text">
                        <p>
                          <span>Address:</span> Jl. BSD Grand Boulevard, BSD
                          City,
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="dbox w-100 text-center">
                      <div className="icon d-flex align-items-center justify-content-center">
                        <span className="fa fa-phone"></span>
                      </div>
                      <div className="text">
                        <p>
                          <span>Phone:</span>{" "}
                          <a href="tel://1234567920">+62 82114103452</a>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="dbox w-100 text-center">
                      <div className="icon d-flex align-items-center justify-content-center">
                        <span className="fa fa-paper-plane"></span>
                      </div>
                      <div className="text">
                        <p>
                          <span>Email:</span>{" "}
                          <a href="mailto:info@yoursite.com">
                            ferdy.lz2000@gmail.com
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="dbox w-100 text-center">
                      <div className="icon d-flex align-items-center justify-content-center">
                        <span className="fa fa-globe"></span>
                      </div>
                      <div className="text">
                        <p>
                          <span>Website</span> <a href="#">Travelesia.com</a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
