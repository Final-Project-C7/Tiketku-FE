import React, { useState } from "react";
import { Button, Modal, Image, Form } from "react-bootstrap";

function ModalSeatClass() {
  const [show, setShow] = useState(false);
  const [isEconomySeatSelected, setIsEconomySeatSelected] = useState(false);
  const [isPremiumSeatSelected, setIsPremiumSeatSelected] = useState(false);
  const [isBusinessSeatSelected, setIsBusinessSeatSelected] = useState(false);
  const [isFirstClassSeatSelected, setIsFirstClassSeatSelected] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleEconomySeatClick = () => {
    setIsEconomySeatSelected(!isEconomySeatSelected);
  };
  const handlePremiumSeatClick = () => {
    setIsPremiumSeatSelected(!isPremiumSeatSelected);
  };
  const handleBusinessSeatClick = () => {
    setIsBusinessSeatSelected(!isBusinessSeatSelected);
  };
  const handleFirstClassSeatClick = () => {
    setIsFirstClassSeatSelected(!isFirstClassSeatSelected);
  };

  const style = `
  .modal-seat-class {
    margin-top: -15rem;
    margin-left: 17rem;
  }

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
      <div className="border-bottom text-dark col-11 pb-3" onClick={handleShow} style={{ cursor: "pointer" }}>
        <input className="border-0 bg-transparent" style={{ fontSize: "18px" }} defaultValue="" disabled hidden />
        Business
      </div>

      <Modal size="md" className="modal-seat-class position-relative" show={show} onHide={handleClose}>
        <Modal.Header className="d-flex justify-content-end">
          <Button className="delete-btn bg-transparent border-0 p-0" onClick={handleClose}>
            <Image className="close-btn__img ms-4" src="/close-button.svg" />
          </Button>
        </Modal.Header>
        <Modal.Body>
          <div className={`${isEconomySeatSelected ? "seat-class-selected" : ""}`} onClick={handleEconomySeatClick} style={{ cursor: "pointer" }}>
            <div className="border-bottom d-flex align-items-center mx-3 py-2">
              <div className="me-auto">
                <p className={`fw-bold mb-2 ${isEconomySeatSelected ? "text-white" : ""}`}>Economy</p>
                <p className={`seat-class__text mb-0 ${isEconomySeatSelected ? "text-white" : ""}`}>IDR 4.950.000</p>
              </div>
              {isEconomySeatSelected && <Image src="/Suffix.svg" alt="checklist logo" />}
            </div>
          </div>
          <div className={`${isPremiumSeatSelected ? "seat-class-selected" : ""}`} onClick={handlePremiumSeatClick} style={{ cursor: "pointer" }}>
            <div className="border-bottom d-flex align-items-center mx-3 py-2">
              <div className="me-auto">
                <p className={`fw-bold mb-2 ${isPremiumSeatSelected ? "text-white" : ""}`}>Premium Economy</p>
                <p className={`seat-class__text mb-0 ${isPremiumSeatSelected ? "text-white" : ""}`}>IDR 7.550.000</p>
              </div>
              {isPremiumSeatSelected && <Image src="/Suffix.svg" alt="checklist logo" />}
            </div>
          </div>
          <div className={`${isBusinessSeatSelected ? "seat-class-selected" : ""}`} onClick={handleBusinessSeatClick} style={{ cursor: "pointer" }}>
            <div className="border-bottom d-flex align-items-center mx-3 py-2">
              <div className="me-auto">
                <p className={`fw-bold mb-2 ${isBusinessSeatSelected ? "text-white" : ""}`}>Business</p>
                <p className={`seat-class__text mb-0 ${isBusinessSeatSelected ? "text-white" : ""}`}>IDR 29.220.000</p>
              </div>
              {isBusinessSeatSelected && <Image src="/Suffix.svg" alt="checklist logo" />}
            </div>
          </div>
          <div className={`${isFirstClassSeatSelected ? "seat-class-selected" : ""}`} onClick={handleFirstClassSeatClick} style={{ cursor: "pointer" }}>
            <div className="border-bottom d-flex align-items-center mx-3 py-2">
              <div className="me-auto">
                <p className={`fw-bold mb-2 ${isFirstClassSeatSelected ? "text-white" : ""}`}>First Class</p>
                <p className={`seat-class__text mb-0 ${isFirstClassSeatSelected ? "text-white" : ""}`}>IDR 87.620.000</p>
              </div>
              {isFirstClassSeatSelected && <Image src="/Suffix.svg" alt="checklist logo" />}
            </div>
          </div>

          <Button className="save-btn-passengers offset-7 col-5 mt-2 py-3">Simpan</Button>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalSeatClass;
