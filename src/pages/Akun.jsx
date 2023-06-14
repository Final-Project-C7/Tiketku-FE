import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Image, Button, Container } from "react-bootstrap";
import NavbarUser from "../components/NavbarUser";
import "./Akun.css";

function Akun() {
    return (
        <>
        <NavbarUser />
        <div className="border-bottom shadow-sm">
        <Container className="akun">
          <div className="d-flex">
            <h4 className="fw-bold"> Akun</h4>
          </div>
          <div className="akun-top d-flex align-items-center mx-2 mb-4">
            <div className="akun-top__alert col-12 text-white d-flex px-3 py-2 mt-2">
              <Link to="/">
                <Image className="akun-top__arrow-left my-2" src="./arrow-left.png" alt="arrow left" />
              </Link>
              <h5 className="ms-4 pt-2">Beranda</h5>
            </div>
          </div>
        </Container>
      </div>
      <Container>
          <div className="row filter-akun mt-4" style={{marginLeft: "120px"}}>
            <div className="col-5">
              <Image src="fi_edit-3.svg" style={{marginRight: "10px"}}/> Ubah Profil<br />
              <Image src="divider.svg" /> <br />
              <Image src="fi_settings.svg" style={{marginRight: "10px"}} /> Pengaturan Akun<br />
              <Image src="divider.svg" /> <br />
              <Image src="fi_log-out.svg" style={{marginRight: "10px"}} /> Keluar<br />
              <Image src="divider.svg" />
            </div>
            <div className="col-7">
            <div className="border rounded-1 p-4 mb-4">
              <h4 className="fw-bold">Ubah Data Profil</h4>
              <div className="mt-4">
                <div className="d-flex align-items-start bg rounded-top-4 py-3 " style={{background: "#A06ECE"}}>
                  <h5 className="me-auto text-white ms-4 mb-0">Data Diri</h5>
                </div>
                <div className="mx-4 mt-3">
                  <p className="fw-bold mb-1" style={{color: "#4B1979"}}>Nama Lengkap</p>
                  <div className="border rounded-1 border-2 mb-2">
                    <input className="border-0 mx-2 p-2" type="text" defaultValue="Harry" />
                  </div>
                </div>
                <div className="mx-4 mt-3">
                  <p className="fw-bold mb-1" style={{color: "#4B1979"}}>Nomor Telepon</p>
                  <div className="border rounded-1 border-2 mb-2">
                    <input className="border-0 mx-2 p-2" type="text" defaultValue="+62 897823232" />
                  </div>
                </div>
                <div className="mx-4 mt-3 pb-3">
                  <p className="fw-bold mb-1" style={{color: "#4B1979"}}>Email</p>
                  <div className="border rounded-1 border-2 mb-2">
                    <input className="border-0 mx-2 p-2" type="email" defaultValue="Johndoe@gmail.com" />
                  </div>
                </div>
                <Button className="save-btn-akun offset-5 col-5">Simpan</Button>
              </div>
            </div>
            </div>
          </div>
        </Container>
        </>
    )
}

export default Akun;