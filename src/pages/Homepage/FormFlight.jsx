import React, { useState } from "react";
import { Image, Button } from "react-bootstrap";
import ModalFlightFrom from "./ModalFlightFrom";
import ModalFlightTo from "./ModalFlightTo";
import ModalPassengers from "./ModalPassengers";
import ModalSeatClass from "./ModalSeatClass";

import "bootstrap/dist/css/bootstrap.min.css";
import "./FormFlight.css";

const FormFlight = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };
  return (
    <div className="flight-form">
      <div className="flight-schedule shadow col-8">
        <h4 className="fw-bold">
          Pilih Jadwal Penerbangan spesial di <span className="flight-schedule__text">Tiketku!</span>
        </h4>
        <div className="row mt-4">
          <div className="card-destination col-12 d-flex flex-nowrap">
            <div className="col-12 col-sm-7 d-flex">
              <div className="d-flex">
                <Image className="card-destination__img" src="take-off.svg" alt="flight takeoff" />
                <p className="col-1 ms-2">From</p>
              </div>
              <ModalFlightFrom />
              <a href="/" className="ms-3">
                <Image className="card-destination__img-1" src="/return.svg" alt="return" />
              </a>
            </div>
            <div className="card-destination-to col-12 col-sm-5 d-flex">
              <Image className="card-destination__img" src="/take-off.svg" alt="flight takeoff" />
              <p className="col-1 ms-2">To</p>
              <ModalFlightTo />
            </div>
          </div>
          <div className="card-date col-12 d-flex mt-4">
            <div className="col-12 col-sm-7 d-flex">
              <div className="col-2 d-flex align-items-center">
                <Image className="card-date__img" src="/Date.svg" alt="Date" />
                <p className="ms-2 mt-3">Date</p>
              </div>
              <div className="col-8 d-flex me-5">
                <div className="col-5">
                  <h3>Departure</h3>
                  <h5 className="pb-3 col-12">1 Maret 2023</h5>
                </div>
                <div className="col-5 ms-4">
                  <h3>Return</h3>
                  <h5 className="card-date__text pb-3 col-12">Pilih Tanggal</h5>
                </div>
                <div className={`toggle-switch ${isChecked ? "checked" : ""}`} onClick={handleToggle}>
                  <div className="toggle-switch-track"></div>
                  <div className="toggle-switch-thumb"></div>
                </div>
              </div>
            </div>
            <div className="car-date-passengers col-12 col-sm-5 d-flex">
              <div className="col-1 d-flex align-items-center">
                <Image className="card-date__img-1" src="/Passengers.svg" alt="flight takeoff" />
                <p className="mt-3 ms-1">To</p>
              </div>
              <div className="col-12 d-flex ms-2 ms-sm-4">
                <div className="col-4 col-sm-5">
                  <h3>Passengers</h3>
                  <ModalPassengers />
                </div>
                <div className="col-4 col-sm-5 ms-2">
                  <h3>Seat Class</h3>
                  <ModalSeatClass />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Button className="col-12">Cari Penerbangan</Button>
      </div>
    </div>
  );
};

export default FormFlight;
