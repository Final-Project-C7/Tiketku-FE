import React, { useState, useEffect, useRef } from "react";
import { Image, Button, Form } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { DateRange } from "react-date-range";
import format from "date-fns/format";
import { addDays } from "date-fns";
import ModalFlightFrom from "../ModalFlightFrom";
import ModalFlightTo from "../ModalFlightTo";
import ModalPassengers from "../ModalPassengers";
import ModalSeatClass from "../ModalSeatClass";
import axios from "axios";
// import { useHistory } from "react-router-dom";
import { useNavigate } from "react-router-dom/dist";

import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./FormFlight.css";

const FormFlight = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [range, setRange] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 0),
      key: "selection",
    },
  ]);

  const navigate = useNavigate();
  const [depart, setDepart] = useState("");
  const [arrive, setArrive] = useState("");
  const [flightData, setFlightData] = useState(null);

  const [open, setOpen] = useState(false);
  const refOne = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get(`http://localhost:8000/api/v1/flight/search/${departure}/${arrival}`);

      console.log(response);
      // navigate("/result")
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", hideOnEscape, true);
    document.addEventListener("click", hideOnClickOutside, true);
  }, []);

  const hideOnEscape = (e) => {
    // console.log(e.key)
    if (e.key === "Escape") {
      setOpen(false);
    }
  };

  const hideOnClickOutside = (e) => {
    if (refOne.current && !refOne.current.contains(e.target)) {
      setOpen(false);
    }
  };

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };

  const location = useLocation()
  console.log(location.state)


  return (
    <>
      <Image className="banner" src="/img-banner.svg" alt="banner" />
      <div>
        <Form className="flight-schedule shadow col-10 col-sm-8 mx-auto pt-sm-4" onSubmit={handleSubmit}>
          <h4 className="fw-bold pt-4 pt-sm-0 ms-4">
            Pilih Jadwal Penerbangan spesial di <span className="flight-schedule__text">Travelesia!</span>
          </h4>
          <div className="row mt-4">
            <div className="card-destination col-12 d-flex flex-wrap mb-3 mx-4">
              <div className="col-sm-7 d-flex">
                <div className="d-flex me-3">
                  <Image className="card-destination__img" src="take-off.svg" alt="flight takeoff" />
                  <p className="col-1 ms-2">From</p>
                </div>
                <input className="bg-transparent border-0 col-6" type="search" aria-label="Search" value={depart} onChange={(e) => setDepart(e.target.value)} />
                {/* <Link to="/" className="ms-3">
                  <Image className="card-destination__img-1" src="/return.svg" alt="return" />
                </Link> */}
              </div>
              <div className="card-destination-to col-12 col-sm-5 d-flex">
                <Image className="card-destination__img" src="/take-off.svg" alt="flight takeoff" id="arrive" />
                <p className="col-1 ms-2">To</p>
                <input className="bg-transparent border-0 col-6" type="search" aria-label="Search" value={arrive} onChange={(e) => setArrive(e.target.value)} />
              </div>
            </div>
            <div className="card-date col-12 d-flex flex-wrap mt-md-4 mx-4">
              <div className="col-md-7 d-flex">
                <div className="col-1 d-flex align-items-center">
                  <Image className="card-date__img" src="/Date.svg" alt="Date" />
                  <p className="ms-2 mt-3">Date</p>
                </div>
                <div className="col-8 d-flex ms-1 ms-sm-4 me-md-5">
                  <div className="col-md-5 ms-2 ms-md-0">
                    <h3 className="mb-0">Departure</h3>
                    <input className="card-date__input border-0 border-bottom pb-3 mt-1 col-12" value={`${format(range[0].startDate, "MM/dd/yyyy")} `} readOnly onClick={() => setOpen((open) => !open)} />
                  </div>
                  <div ref={refOne} className="calendarWrap">
                    {open && (
                      <DateRange
                        onChange={(item) => setRange([item.selection])}
                        editableDateInputs={true}
                        moveRangeOnFirstSelection={false}
                        ranges={range}
                        months={2}
                        direction="horizontal"
                        showMonthAndYearPickers={false}
                        showDateDisplay={false}
                        preventSnapRefocus={true}
                        rangeColors={["#7126B5"]}
                        className="calendarElement rounded-4"
                      />
                    )}
                  </div>
                  <div className="col-md-5 ms-3 ms-sm-4 ms-md-4">
                    <h3 className="mb-0">Return</h3>
                    <input className="card-date__input border-0 border-bottom pb-3 mt-1 col-12" value={`${format(range[0].endDate, "MM/dd/yyyy")} `} onClick={() => setOpen((open) => !open)} />
                  </div>
                  <label className="switch" style={{ cursor: "pointer" }}>
                    <input className="switch__input" type="checkbox" checked={isChecked} onChange={handleToggle} />
                    <span className="slider"></span>
                  </label>
                </div>
              </div>
              <div className="car-date-passengers col-12 col-md-5 d-flex flex-wrap ms-sm-0 mt-2 mt-sm-0">
                <div className="col-1 d-flex align-items-center">
                  <Image className="card-date__img-1" src="/Passengers.svg" alt="flight takeoff" />
                  <p className="mt-3">To</p>
                </div>
                <div className="col-9 d-flex ms-4 ms-md-4">
                  <div className="col-6 col-md-5 ms-1 ms-md-0">
                    <h3 className="mb-1">Passengers</h3>
                    <ModalPassengers />
                  </div>
                  <div className="col-6 col-md-5">
                    <h3 className="mb-1">Seat Class</h3>
                    <ModalSeatClass />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Link to={`/result/${depart}/${arrive}`}>
            <Button className="flight-schedule__btn col-12 border-0 mb-0" type="submit">
              Cari penerbangan
            </Button>
          </Link>
        </Form>
      </div>
    </>
  );
};

export default FormFlight;
