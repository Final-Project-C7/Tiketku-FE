import React, { useState } from "react";
import { Image, Button } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import "./FormFlight.css";

const FormFlight = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };
  return (
    <div className="flight-form">
      <div className="flight-schedule shadow">
        <h4 className="fw-bold">
          Pilih Jadwal Penerbangan spesial di <span className="flight-schedule__text">Tiketku!</span>
        </h4>
        <div className="row mt-4">
          <div className="card-destination col-6 d-flex">
            <Image className="card-destination__img" src="material-symbols_flight-takeoff-sharp.png" alt="flight takeoff" />
            <p className="ms-2">From</p>
            <h5 className="ms-4 me-2 pb-3 col-8">Jakarta (JKTA)</h5>
            <a href="/" className="ms-4">
              <Image className="card-destination__img-1" src="/return.png" alt="return" />
            </a>
            <Image className="card-destination__img ms-4" src="/material-symbols_flight-takeoff-sharp.png" alt="flight takeoff" />
            <p className="ms-2">To</p>
            <h5 className="ms-4 pb-3 col-8">Melbourne (MLB)</h5>
          </div>
          <div className="card-date col-6 d-flex mt-4">
            <div className="col-2 d-flex align-items-center">
              <Image className="card-date__img" src="/Date.png" alt="Date" />
              <p className="ms-2 mt-3">Date</p>
            </div>
            <div className="col-8 d-flex me-5">
              <div className="col-6">
                <h3>Departure</h3>
                <h5 className="pb-3 col-12">1 Maret 2023</h5>
              </div>
              <div className="col-6 ms-2">
                <h3>Return</h3>
                <h5 className="card-date__text pb-3 col-12">Pilih Tanggal</h5>
              </div>
              <div className={`toggle-switch ${isChecked ? "checked" : ""}`} onClick={handleToggle}>
                <div className="toggle-switch-track"></div>
                <div className="toggle-switch-thumb"></div>
              </div>
            </div>
            <div className="col-1 d-flex ms-5 align-items-center">
              <Image className="card-date__img-1 ms-2" src="/Passenger.png" alt="flight takeoff" />
              <p className="ms-2 mt-3">To</p>
            </div>
            <div className="col-12 d-flex ms-4">
              <div className="col-4">
                <h3>Passengers</h3>
                <h5 className="pb-3 col-12">2 Penumpang</h5>
              </div>
              <div className="col-4 ms-2">
                <h3>Seat Class</h3>
                <h5 className="pb-3 col-12">Business</h5>
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
