import React, { useState } from "react";
import { Container, Image} from "react-bootstrap";
import FilterModal from "./Beranda/FilterModal";
import SearchModal from "./Beranda/SearchModal";
import { Link } from "react-router-dom";

import "./Riwayat.css";

function Header(){
    return(
        <>
        <div className="history-top d-flex align-items-center mx-2 mb-4">
            <div className="history-top__alert col-10 text-white d-flex px-3 py-2 mt-2">
              <Link to="/">
                <Image className="history-top__arrow-left my-2" src="./arrow-left.png" alt="arrow left" />
              </Link>
              <h5 className="ms-4 pt-2">Beranda</h5>
            </div>
            <div className="history-filter col-2 d-flex ms-3">
              <FilterModal/>
              <SearchModal />
            </div>
          </div>
        </>
    )

}

export default Header;