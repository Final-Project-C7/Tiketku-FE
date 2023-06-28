import "./Flight.css";
import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import SelectDay from "../components/Filter/SelectDay";
import Filter from "../components/Filter/Filter";
import Loading from "../components/Loading";
import NavbarHomepage from "../components/NavbarHomepage";
import Notfound from "../components/Notfound";
import Result from "../components/Result";
import SoldoutComponent from "../components/Soldout";
import NavbarUser from "../components/NavbarUser";
import MyModal from "../components/Beranda/MyModal";

function Flight() {
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
      <div className="container" id="select-flight">
        <h4 className="title">Pilih Penerbangan</h4>
        <SelectDay />
        <div className="d-flex justify-content-end">
          <MyModal />
        </div>
        <div className="row filter-loading mt-4">
          <div className="col-12 col-md-3 col-sm-12 filter-l">
            <Filter />
          </div>
          <div className="col-12 col-md-9 col-sm-12 text-center mb-5">
            <Loading />
          </div>
        </div>
      </div>
    </>
  );
}

export default Flight;
