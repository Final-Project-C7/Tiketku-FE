import "./SelectFlight.css";
import { useState } from "react";
import arrowleft from "/fi_arrow-left.svg";
import prefixicon from "/Prefix icon.svg";
import fibox from "/fi_box.svg";
import chevronright from "/fi_chevron-right.svg";
import loading from "/Loading.png";
import heart from "/fi_heart.svg";
import dollar from "/fi_dollar-sign.svg";
import NavbarHomepage from "../pages/Homepage/NavbarHomepage";
import Button from "react-bootstrap/Button";

function SelectFlight() {
  return (
    <>
      <NavbarHomepage />
      <div className="container-fluid" id="select-flight">
        <p className="title">Pilih Penerbangan</p>
        <div className="row search-flight justify-content-center">
          <div className="col-8 lg-8 title-search d-flex align-items-center">
            <img
              src={arrowleft}
              alt="arrow-left"
              style={{
                width: "24px",
                filter: "invert(100%)",
              }}
            />
            <p className="ms-3 mt-3">JKT &gt; MLB -2 Penumpang - Economy</p>
          </div>
          <div className="col-3">
            <Button variant="success btn-search" className="">
              Ubah Pencarian
            </Button>
          </div>
        </div>
        <div className="row">
          <div className="col-12 d-flex justify-content-center  btn-flight">
            <Button variant="secondary" className="">
              <p>
                Selasa <span>01/03/2023</span>
              </p>
            </Button>
            <hr className="vertical-divider" />
            <Button variant="secondary" className=" ">
              <p>
                Rabu <span>02/03/2023</span>{" "}
              </p>
            </Button>
            <hr className="vertical-divider" />
            <Button variant="secondary" className="">
              <p>
                Kamis <span>03/03/2023</span>{" "}
              </p>
            </Button>
            <hr className="vertical-divider" />
            <Button variant="secondary" className="">
              <p>
                Jumat <span>04/03/2023</span>{" "}
              </p>
            </Button>
            <hr className="vertical-divider" />
            <Button variant="secondary" className="">
              <p>
                Sabtu <span>05/03/2023</span>{" "}
              </p>
            </Button>
            <hr className="vertical-divider" />
            <Button variant="secondary" className="">
              <p>
                Minggu <span>06/03/2023</span>{" "}
              </p>
            </Button>
            <hr className="vertical-divider" />
            <Button variant="secondary" className="">
              <p>
                Senin <span>07/03/2023</span>{" "}
              </p>
            </Button>
            <hr className="vertical-divider " />
            <Button variant="secondary" className="">
              <p>
                Selasa <span>08/03/2023</span>{" "}
              </p>
            </Button>
          </div>
          <hr className="horizontal-divider mt-3" />
        </div>

        <div className="d-flex justify-content-end">
          <Button className="d-flex align-items-center btn-filter mt-3">
            <img src={prefixicon} alt="Image" className="" />
            <span className="ms-2">Termurah</span>
          </Button>
        </div>

        <div className="row filter-loading">
          <div className="col-3 filter-l">
            <p className="title-filter">Filter</p>
            <div className="transit d-flex align-items-center">
              <img src={fibox} alt="Image" className="mr-2" />
              <p className="m-auto">Transit</p>
              <img className="arrow-right" src={chevronright} alt="Image" />
            </div>
            <hr className="divider-filter" />
            <div className="transit d-flex align-items-center">
              <img src={heart} alt="Image" className="mr-2" />
              <p className="m-auto">Fasilitas</p>
              <img src={chevronright} alt="Image" className="arrow-right" />
            </div>
            <hr className="divider-filter" />
            <div className="transit d-flex align-items-center">
              <img src={dollar} alt="Image" className="mr-2" />
              <p className="m-auto">Harga</p>
              <img src={chevronright} alt="Image" className="arrow-right" />
            </div>
          </div>
          <div className="col-9 text-center">
            <p className="">Mencari penerbangan terbaik...</p>
            <img src={loading} />
          </div>
        </div>
      </div>
    </>
  );
}

export default SelectFlight;
