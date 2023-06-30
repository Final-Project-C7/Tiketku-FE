import React, { useState } from "react";
import { Button, Modal, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

const seatOptions = [{ name: "Economy" }, { name: "Premium Economy" }, { name: "Business" }, { name: "First Class" }];

function ModalSeatClass() {
  const [show, setShow] = useState(false);
  const [selectedSeat, setSelectedSeat] = useState(0);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSeatClick = (index) => {
    setSelectedSeat(index);
  };

  let seat = seatOptions[selectedSeat].name;

  const style = `
  .close-btn__img {
    width: 18px;
    height: 18px;
  } 

  .delete-btn:hover, delete-btn:active {
    background-color: transparent !important;
  }

  .delete-btn__img {
    width: 12px;
    height: 12px;
  }

  .seat-class-selected {
    color: #ffffff !important;
    background-color: #4B1979
  }

  .seat-class__text {
    color: #7126B5;
  }

  .save-btn-passengers {
    background-color: #4B1979 !important;
    color: #fff !important;
    border-radius: 12px
  }
  `;

  return (
    <>
      <style>{style}</style>
      <div className="col-11 border-bottom text-dark fw-bold pt-0 pb-3" onClick={handleShow} style={{ cursor: "pointer" }}>
        <input className="border-0 bg-transparent" style={{ fontSize: "18px" }} defaultValue="" disabled hidden />
        {/* Business */}
        {seat}
      </div>

      <Modal size="md" show={show} onHide={handleClose} centered>
        <Modal.Header className="d-flex justify-content-end">
          <Button className="delete-btn bg-transparent border-0 p-0" onClick={handleClose}>
            <Image className="close-btn__img ms-4" src="/close-button.svg" />
          </Button>
        </Modal.Header>
        <Modal.Body>
          {seatOptions.map((seat, index) => (
            <div key={index} className={`border-bottom d-flex align-items-center px-3 py-2 ${selectedSeat === index ? "seat-class-selected" : ""}`} onClick={() => handleSeatClick(index)} style={{ cursor: "pointer" }}>
              <div className="me-auto">
                <p className={`fw-bold pt-0 mb-2 ${selectedSeat === index ? "text-white" : ""}`}>{seat.name}</p>
                <p className={`seat-class__text mb-0 ${selectedSeat === index ? "text-white" : ""}`}>{seat.price}</p>
              </div>
              {selectedSeat === index && <Image src="/Suffix.svg" alt="checklist logo" />}
            </div>
          ))}

          <Link to="/" state={seat}>
            <Button className="save-btn-passengers offset-7 col-5 mt-2 py-3" onClick={handleClose}>
              Simpan
            </Button>
          </Link>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalSeatClass;
