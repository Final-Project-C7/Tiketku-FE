import React from "react";
import { Image, Modal, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./Footer.css";

export default function Footer() {
  const [showModal, setShowModal] = React.useState(false);
  const [showTeamModal, setShowTeamModal] = React.useState(false);
  const [showContactModal, setShowContactModal] = React.useState(false);

  const toggleTeamModal = () => {
    setShowTeamModal(!showTeamModal);
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const toggleContactModal = () => {
    setShowContactModal(!showContactModal);
  };

  return (
    <div style={{ backgroundColor: "#4b1979" }}>
      <footer className="footer-48201 pt-5">
        <div className="container">
          <div className="row text-center">
            <div className="col-md-4 pr-md-5 col-12">
              <Image
                className="history-top__arrow-left my-2"
                src="./logofinal.png"
                alt="logo-travelesia"
                style={{ width: "40%", height: "40%" }}
              />

              <p className="footer-text mt-1">
                Welcome to our travel app! Discover your <br /> dream
                destinations, create unforgettable <br />
                journeys, and uncover hidden treasures
              </p>
            </div>
            <div className="col-md-2 col-12">
              <ul className="list-unstyled nav-links">
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <Link to="/about-us">About Us</Link>
                </li>
                <li>
                  <a onClick={toggleTeamModal} style={{ cursor: "pointer" }}>
                    Team
                  </a>
                </li>
                <li>
                  <a href="#">Services</a>
                </li>
                <li>
                  <Link to="/contact-us">Contact</Link>
                </li>
              </ul>
            </div>
            <div className="col-md-2 col-12">
              <ul className="list-unstyled nav-links">
                <li>
                  <a>ferdy.lz2000@gmail.com</a>
                </li>
                <li>
                  <a>+62123123123</a>
                </li>
                <li>
                  <a>Jl. BSD Grand Boulevard, BSD City</a>
                </li>
              </ul>
            </div>
            <div className="col-md-2 col-12">
              <ul className="list-unstyled nav-links">
                <li>
                  <a onClick={toggleModal} style={{ cursor: "pointer" }}>
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#">Terms &amp; Conditions</a>
                </li>
                <li>
                  <a href="#">Partners</a>
                </li>
              </ul>
            </div>
            <div className="col-md-2 col-12 text-md-center" id="sosmed">
              <ul className="social list-unstyled">
                <li>
                  <a
                    href="https://www.instagram.com/academybinar/"
                    target="blank"
                  >
                    <Image
                      className="history-top__arrow-left my-2"
                      src="./instagram-logo.png"
                      style={{ width: "25px", height: "25px" }}
                    />
                    <span className="icon-instagram"></span>
                  </a>
                </li>

                <li>
                  <a href="https://twitter.com/academybinar">
                    <Image
                      className="history-top__arrow-left my-2"
                      src="./twitter-logo.png"
                      style={{ width: "25px", height: "25px" }}
                    />
                    <span className="icon-twitter"></span>
                  </a>
                </li>
                <li>
                  <a href="https://www.tiktok.com/@academybinar" target="blank">
                    <Image
                      className="history-top__arrow-left my-2"
                      src="./tiktok-logo.png"
                      style={{ width: "25px", height: "25px" }}
                    />
                    <span className="icon-tiktok"></span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/binaracademy/"
                    target="blank"
                  >
                    <Image
                      className="history-top__arrow-left my-2"
                      src="./facebook-logo.png"
                      style={{ width: "25px", height: "25px" }}
                    />
                    <span className="icon-facebook"></span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.youtube.com/@BinarAcademy"
                    target="_blank"
                  >
                    <Image
                      className="history-top__arrow-left my-2"
                      src="./youtube-logo.png"
                      style={{ width: "40px", height: "30px" }}
                    />
                    <span className="icon-youtube"></span>
                  </a>
                </li>
              </ul>
              <p className="">
                <a
                  href="mailto:ferdy.lz2000@gmail.com?subject=Subjek_email&body=Pesan_email"
                  target="_blank"
                  className="btn btn-tertiary"
                >
                  Contact Us
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="col-12 text-center">
          <div className="copyright">
            <p>
              <small>&copy; 2019-2023 All rights reserved.</small>
            </p>
          </div>
        </div>
      </footer>

      <Modal
        show={showModal}
        onHide={toggleModal}
        dialogClassName="modal-wide" // Menentukan kelas CSS untuk lebar modal
      >
        <Modal.Header style={{ padding: "30px", background: "#7126b5 " }}>
          <Modal.Title style={{ color: "white" }}>Privacy Policy</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ padding: "30px" }}>
          <Image
            className="history-top__arrow-left my-2"
            src="./logofinal.png"
            alt="logo-travelesia"
            style={{ width: "40%", height: "40%" }}
          />

          <h3>Privacy Policy</h3>
          <p>
            At Travelesia, we are committed to protecting your privacy and
            ensuring the security of your personal information. This Privacy
            Policy outlines how we collect, use, disclose, and safeguard your
            information when you use our travel application.
          </p>

          <h4>1. Information We Collect</h4>
          <p>
            We may collect various types of information from users of the
            Travelesia app, including: - Personal information such as your name,
            email address, phone number, and billing information. - Travel
            preferences, including your destination preferences, accommodation
            choices, and activities of interest. - Usage data, such as your
            interactions with the app, search history, and preferences. - Device
            information, including your device type, operating system, and IP
            address.
          </p>

          <h4>2. How We Use Your Information</h4>
          <p>
            We use the collected information for the following purposes: - To
            provide and personalize the services offered by Travelesia,
            including travel recommendations, booking management, and
            personalized offers. - To communicate with you regarding your
            bookings, updates, and promotional offers. - To improve our app's
            functionality, user experience, and customer service. - To analyze
            user behavior and preferences in order to enhance our services and
            provide targeted recommendations. - To comply with legal obligations
            and enforce our terms and conditions.
          </p>

          <h4>3. Information Sharing</h4>
          <p>
            We may share your information with the following entities: - Travel
            service providers, such as airlines, hotels, car rental agencies,
            and tour operators, to facilitate your bookings and travel
            arrangements. - Third-party service providers who assist us in
            operating our app, such as payment processors, customer support
            services, and analytics providers. - Law enforcement agencies or
            regulatory authorities when required by law or to protect our rights
            and the safety of our users. - With your consent or as otherwise
            disclosed at the time of data collection.
          </p>

          <h4>4. Data Security</h4>
          <p>
            We take appropriate security measures to protect your information
            from unauthorized access, alteration, disclosure, or destruction.
            These measures include secure server connections, encryption,
            regular data backups, and access controls. However, please note that
            no method of transmission over the internet or electronic storage is
            completely secure, and we cannot guarantee absolute security.
          </p>

          <h4>5. Your Choices and Rights</h4>
          <p>
            You have the right to access, update, and delete your personal
            information stored in our app. You can also choose to unsubscribe
            from our promotional emails and adjust your app notification
            settings. For any requests or concerns regarding your privacy
            rights, please contact us through the contact information provided
            below.
          </p>

          <h4>6. Changes to This Privacy Policy</h4>
          <p>
            We reserve the right to update or modify this Privacy Policy at any
            time. Any changes will be effective immediately upon posting the
            revised policy on our app. We encourage you to review this Privacy
            Policy periodically for any updates.
          </p>

          <p>
            If you have any questions, concerns, or requests regarding this
            Privacy Policy or our privacy practices, please contact us at:
            Email: privacy@travelesia.com Address: Travelesia Headquarters, 123
            Travel Street, City, Country
          </p>
        </Modal.Body>
        <Modal.Footer style={{ padding: "30px", background: "#7126b5 " }}>
          <Button
            style={{ width: "20%", background: "#e42c64" }}
            variant="secondary"
            onClick={toggleModal}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal
        show={showTeamModal}
        onHide={toggleTeamModal}
        dialogClassName="modal-wide-team"
      >
        <Modal.Body className="modal-body-team p-4">
          <div className="responsive-container-block outer-container">
            <div className="responsive-container-block inner-container">
              <p
                className="text-blk section-head-text"
                style={{ color: "#7126b5" }}
              >
                Meet Our Expert Team
              </p>
              <p className="text-blk section-subhead-text">
                Our team of dedicated professionals is here to provide you with
                exceptional expertise and support.
              </p>
              <div className="responsive-container-block">
                <div className="responsive-cell-block wk-desk-3 wk-ipadp-3 wk-tab-6 wk-mobile-12 team-card-container">
                  <div className="team-card">
                    <div className="img-wrapper">
                      <Image className="team-img" src="ferdi.jpeg" />
                    </div>
                    <p className="text-blk name">Ferdy Fadhil Lazuardi</p>
                    <p className="text-blk position">Product Owner</p>
                    <div className="social-media-links">
                      <a
                        href="https://github.com/FerdyLazuardi"
                        target="_blank"
                      >
                        <Image
                          src="github-logo.png"
                          style={{ width: "24px" }}
                        />
                      </a>
                      <a href="http://www.facebook.com/" target="_blank">
                        <Image src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-fb.svg" />
                      </a>
                      <a
                        href="https://www.instagram.com/ferdy.lazuardi/"
                        target="_blank"
                      >
                        <Image src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-insta.svg" />
                      </a>
                      <a
                        href="https://www.linkedin.com/in/ferdy10/"
                        target="_blank"
                      >
                        <Image src="linked2.png" style={{ width: "25px" }} />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="responsive-cell-block wk-desk-3 wk-ipadp-3 wk-tab-6 wk-mobile-12 team-card-container">
                  <div className="team-card">
                    {/* Konten Kartu Tim 2 */}
                    <div className="img-wrapper">
                      <Image
                        className="team-img"
                        src="narrizzy.jpg"
                        style={{ height: "14rem", objectPosition: "40% 40%" }}
                      />
                    </div>
                    <p className="text-blk name">Danar Zulfian Wirakusumah</p>
                    <p className="text-blk position">Scrum Master</p>
                    <div className="social-media-links ">
                      <a href="https://github.com/Danarzlf" target="_blank">
                        <Image
                          src="github-logo.png"
                          style={{ width: "24px" }}
                        />
                      </a>
                      <a href="http://www.facebook.com/" target="_blank">
                        <Image src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-fb.svg" />
                      </a>
                      <a
                        href="https://www.instagram.com/dnarzlfian16/"
                        target="_blank"
                      >
                        <Image src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-insta.svg" />
                      </a>
                      <a
                        href="https://www.linkedin.com/in/danar-zulfian-wirakusumah-544952269/"
                        target="_blank"
                      >
                        <Image src="linked2.png" style={{ width: "25px" }} />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="responsive-cell-block wk-desk-3 wk-ipadp-3 wk-tab-6 wk-mobile-12 team-card-container">
                  <div className="team-card">
                    {/* Konten Kartu Tim 3 */}
                    <div className="img-wrapper">
                      <Image
                        className="team-img"
                        src="arfin.jpg"
                        style={{ height: "14rem", objectPosition: "40% 40%" }}
                      />
                    </div>
                    <p className="text-blk name">Arfin Dwi Octavianto</p>
                    <p className="text-blk position">Front End Developer</p>
                    <div className="social-media-links">
                      <a href="https://github.com/arfindwio" target="_blank">
                        <Image
                          src="github-logo.png"
                          style={{ width: "24px" }}
                        />
                      </a>
                      <a href="http://www.facebook.com/" target="_blank">
                        <Image src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-fb.svg" />
                      </a>
                      <a
                        href="https://www.instagram.com/arfindwio/"
                        target="_blank"
                      >
                        <Image src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-insta.svg" />
                      </a>
                      <a
                        href="https://www.linkedin.com/in/arfin-dwi-octavianto-2a495027a/"
                        target="_blank"
                      >
                        <Image src="linked2.png" style={{ width: "25px" }} />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="responsive-cell-block wk-desk-3 wk-ipadp-3 wk-tab-6 wk-mobile-12 team-card-container">
                  <div className="team-card">
                    {/* Konten Kartu Tim 4 */}
                    <div className="img-wrapper">
                      <Image
                        className="team-img"
                        src="wira.jpg"
                        style={{ height: "14rem", objectPosition: "50% 35%" }}
                      />
                    </div>
                    <p className="text-blk name">Wira Adi Kurniawan</p>
                    <p className="text-blk position">Back End Developer</p>
                    <div className="social-media-links">
                      <a href="https://github.com/adikrnwn171" target="_blank">
                        <Image
                          src="github-logo.png"
                          style={{ width: "24px" }}
                        />
                      </a>
                      <a href="http://www.facebook.com/" target="_blank">
                        <Image src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-fb.svg" />
                      </a>
                      <a
                        href="https://www.instagram.com/adikurniawan_/"
                        target="_blank"
                      >
                        <Image src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-insta.svg" />
                      </a>
                      <a
                        href="https://www.linkedin.com/in/adi-kurniawan-799176270"
                        target="_blank"
                      >
                        <Image src="linked2.png" style={{ width: "25px" }} />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="responsive-cell-block wk-desk-3 wk-ipadp-3 wk-tab-6 wk-mobile-12 team-card-container">
                  <div className="team-card">
                    {/* Konten Kartu Tim 3 */}
                    <div className="img-wrapper">
                      <Image className="team-img" src="ratih.jpeg" />
                    </div>
                    <p className="text-blk name">Rati Purwaningsih</p>
                    <p className="text-blk position">Front End Developer</p>
                    <div className="social-media-links">
                      <a
                        href="https://github.com/ratipurwaningsih"
                        target="_blank"
                      >
                        <Image
                          src="github-logo.png"
                          style={{ width: "24px" }}
                        />
                      </a>
                      <a href="http://www.facebook.com/" target="_blank">
                        <Image src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-fb.svg" />
                      </a>
                      <a
                        href="https://www.instagram.com/ratih_s007/"
                        target="_blank"
                      >
                        <Image src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-insta.svg" />
                      </a>
                      <a href="http://www.gmail.com" target="_blank">
                        <Image src="linked2.png" style={{ width: "25px" }} />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="responsive-cell-block wk-desk-3 wk-ipadp-3 wk-tab-6 wk-mobile-12 team-card-container">
                  <div className="team-card">
                    {/* Konten Kartu Tim 3 */}
                    <div className="img-wrapper">
                      <Image className="team-img" src="riza.jpg" />
                    </div>
                    <p className="text-blk name">Rizatul Mas Ulah</p>
                    <p className="text-blk position">Front End Developer</p>
                    <div className="social-media-links">
                      <a href="https://github.com/rizagithub" target="_blank">
                        <Image
                          src="github-logo.png"
                          style={{ width: "24px" }}
                        />
                      </a>
                      <a href="http://www.facebook.com/" target="_blank">
                        <Image src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-fb.svg" />
                      </a>
                      <a
                        href="https://www.instagram.com/riza_a_927/"
                        target="_blank"
                      >
                        <Image src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-insta.svg" />
                      </a>
                      <a
                        href="https://id.linkedin.com/in/rizatul-mas-ulah-023a58265"
                        target="_blank"
                      >
                        <Image src="linked2.png" style={{ width: "25px" }} />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="responsive-cell-block wk-desk-3 wk-ipadp-3 wk-tab-6 wk-mobile-12 team-card-container">
                  <div className="team-card">
                    {/* Konten Kartu Tim 3 */}
                    <div className="img-wrapper">
                      <Image className="team-img" src="yunis.jpeg" />
                    </div>
                    <p className="text-blk name">Yunis Isnaini</p>
                    <p className="text-blk position">Front End Developer</p>
                    <div className="social-media-links">
                      <a href="https://github.com/yunisisnaini" target="_blank">
                        <Image
                          src="github-logo.png"
                          style={{ width: "24px" }}
                        />
                      </a>
                      <a href="http://www.facebook.com/" target="_blank">
                        <Image src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-fb.svg" />
                      </a>
                      <a
                        href="https://www.instagram.com/yunis_you30/"
                        target="_blank"
                      >
                        <Image src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-insta.svg" />
                      </a>
                      <a
                        href="https://www.linkedin.com/in/yunis-isnaini-2a7677261/"
                        target="_blank"
                      >
                        <Image src="linked2.png" style={{ width: "25px" }} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            style={{ width: "20%", background: "#e42c64" }}
            variant="secondary"
            onClick={toggleTeamModal}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal
        show={showContactModal}
        onHide={toggleContactModal}
        dialogClassName="modal-wide"
      >
        <Modal.Header style={{ padding: "30px", background: "#7126b5" }}>
          <Modal.Title style={{ color: "white" }}>Contact</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ padding: "30px" }}>
          {/* Add content for the Team modal */}
        </Modal.Body>
        <Modal.Footer style={{ padding: "30px", background: "#7126b5" }}>
          <Button
            style={{ width: "20%", background: "#e42c64" }}
            variant="secondary"
            onClick={toggleContactModal}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
