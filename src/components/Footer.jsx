import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import { Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import "./Footer.css"

export default function Footer() {
  return (
    <MDBFooter className='footer text-center text-lg-start text-muted'>
      <section className='footer2 d-flex justify-content-center justify-content-lg-between p-1 border-bottom'>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            {/* <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon icon="gem" className="me-3" />
                ABOUT US
              </h6>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Adipisci maxime eveniet fugit modi ut dicta sapiente? Laborum ipsa hic reiciendis
                ullam deserunt ducimus aut sequi? Consequuntur maxime atque enim officiis?
              </p>
            </MDBCol> */}

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Back End Developer</h6>
              <p>
                <Link to="https://github.com/FerdyLazuardi">
                <p className='text-reset'>
                  Ferdi Fadhil Lazuardi
                </p>
                </Link>
              </p>             
              <p>
                <Link to="https://github.com/Danarzlf">
                <p className='text-reset'>
                  Danar Zulfian Wirakusumah
                </p>
                </Link>
              </p>
              <p>
                <Link to="https://github.com/adikrnwn171">
                <p className='text-reset'>
                  Wira Adi Kurniawan
                </p>
                </Link>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Front End Developer</h6>
              <p>
                <Link to="https://github.com/arfindwio">
                <p className='text-reset'>
                  Arfin Dwi Cahyono
                </p>
                </Link>
              </p>             
              <p>
                <Link to="https://github.com/ratipurwaningsih">
                <p className='text-reset'>
                  Rati Purwaningsih
                </p>
                </Link>
              </p>
              <p>
                <Link to="https://github.com/yunisisnaini">
                <p className='text-reset'>
                  Yunis Isnaini
                </p>
                </Link>
              </p>
              <p>
                <Link to="https://github.com/rizagithub">
                <p className='text-reset'>
                  Rizatul Mas Ulah
                </p>
                </Link>
              </p>
              
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact Us</h6>
              <p>
                <Image className="footer__img fw-bold me-1" src="/email.png" alt="" />@c7binaracademy
              </p>
              <p>
                <Image className="footer__img fw-bold me-1" src="/wa.png" alt="" />+6285666666666
              </p>
            </MDBCol>

          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2022 Copyright : 
        <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
           C7 - Binar Academy
        </a>
      </div>
    </MDBFooter>
  );
}