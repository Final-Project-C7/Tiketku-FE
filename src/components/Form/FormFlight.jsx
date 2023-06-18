import React, { useState, useEffect, useRef } from "react";
import { Image, Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { DateRange } from "react-date-range";
import format from "date-fns/format";
import { addDays } from "date-fns";
import ModalFlightFrom from "../ModalFlightFrom";
import ModalFlightTo from "../ModalFlightTo";
import ModalPassengers from "../ModalPassengers";
import ModalSeatClass from "../ModalSeatClass";

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

  const [open, setOpen] = useState(false);
  const refOne = useRef(null);

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

  return (
    <>
      <Image className="banner" src="/banner-homepage.svg" alt="banner" />
      <div>
        <Form className="flight-schedule shadow col-8 mx-auto">
          <h4 className="fw-bold">
            Pilih Jadwal Penerbangan spesial di <span className="flight-schedule__text">Tiketku!</span>
          </h4>
          <div className="row mt-4">
            <div className="card-destination col-12 d-flex flex-nowrap mb-3">
              <div className="col-sm-7 d-flex">
                <div className="d-flex me-3">
                  <Image className="card-destination__img" src="take-off.svg" alt="flight takeoff" />
                  <p className="col-1 ms-2">From</p>
                </div>
                <ModalFlightFrom />
                <Link to="/" className="ms-3">
                  <Image className="card-destination__img-1" src="/return.svg" alt="return" />
                </Link>
              </div>
              <div className="card-destination-to col-12 col-sm-5 d-flex">
                <Image className="card-destination__img" src="/take-off.svg" alt="flight takeoff" />
                <p className="col-1 ms-2">To</p>
                <ModalFlightTo />
              </div>
            </div>
            <div className="card-date col-12 d-flex mt-4">
              <div className="col-sm-7 d-flex">
                <div className="col-2 d-flex align-items-center">
                  <Image className="card-date__img" src="/Date.svg" alt="Date" />
                  <p className="ms-2 mt-3">Date</p>
                </div>
                <div className="col-8 d-flex me-5">
                  <div className="col-5">
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
                  <div className="col-5 ms-4">
                    <h3 className="mb-0">Return</h3>
                    <input className="card-date__input border-0 border-bottom pb-3 mt-1 col-12" value={`${format(range[0].endDate, "MM/dd/yyyy")} `} onClick={() => setOpen((open) => !open)} />
                  </div>
                  <label className="switch" style={{ cursor: "pointer" }}>
                    <input className="switch__input" type="checkbox" checked={isChecked} onChange={handleToggle} />
                    <span className="slider"></span>
                  </label>
                </div>
              </div>
              <div className="car-date-passengers col-12 col-sm-5 d-flex">
                <div className="col-1 d-flex align-items-center">
                  <Image className="card-date__img-1" src="/Passengers.svg" alt="flight takeoff" />
                  <p className="mt-3">To</p>
                </div>
                <div className="col-12 d-flex ms-2 ms-sm-4">
                  <div className="col-4 col-sm-5">
                    <h3 className="mb-1">Passengers</h3>
                    <ModalPassengers />
                  </div>
                  <div className="col-4 col-sm-5 ms-2">
                    <h3 className="mb-1">Seat Class</h3>
                    <ModalSeatClass />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Link to="/flight">
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
