import React, { useState } from "react";
import { Button, Modal, Image, Form } from "react-bootstrap";
import prefixicon from "/Prefix icon.svg";

function MyModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const style = `
  .close-btn__img {
    width: 18px;
    height: 18px;
  } 

  .btn-modall {
    background-color: white !important;
    border-radius: 16px;
    border: 1px solid #A06ECE !important;
    margin-right: 70px;
    color: #7126B5 !important;
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    font-size: 15px;
  }

  
  .btn-modall:hover {
    background-color: #A06ECE!important ;
    color: #ffffff !important;
  }
  
  .btn-modall:hover img {
    filter: brightness(0) invert(1) ;
  }

  .delete-btn:hover, delete-btn:active {
    background-color: transparent !important;
  }

  .delete-btn__img {
    width: 12px;
    height: 12px;
  }

  .seat-class {
    color: #fff !important;
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

  .txt {
    color: #7126B5;
  }
  `;

  return (
    <>
      <style>{style}</style>
      <Button className="btn-modall" onClick={handleShow}>
        <img src={prefixicon} alt="Image" className="" />
        Termurah
      </Button>

      <Modal size="md" show={show} onHide={handleClose} animation={false} centered>
        <Modal.Header className="d-flex justify-content-end">
          <Button className="delete-btn bg-transparent border-0" onClick={handleClose}>
            <Image className="close-btn__img ms-4" src="/close-button.svg" />
          </Button>
        </Modal.Header>
        <Modal.Body>
          <div className="seat-class">
            <div className="border-bottom mx-3 pt-2">
              <p className="mb-2 text-white">Harga - Termurah</p>
            </div>
          </div>
          <div>
            <div className="border-bottom mx-3 pt-2">
              <p className="fw-bold mb-2">Durasi - Terpendek</p>
            </div>
          </div>
          <div>
            <div className="border-bottom mx-3 pt-2">
              <p className="fw-bold mb-2">Keberangkatan - Paling Awal</p>
            </div>
          </div>
          <div>
            <div className="border-bottom mx-3 pt-2">
              <p className="fw-bold mb-2">Keberangkatan - Paling akhir</p>
            </div>
          </div>
          <div>
            <div className="border-bottom mx-3 pt-2">
              <p className="fw-bold mb-2">Kedatangan - Paling awal</p>
            </div>
          </div>
          <div>
            <div className="border-bottom mx-3 pt-2">
              <p className="fw-bold mb-2">Kedatangan - Paling akhir</p>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button className="footer-btn" variant="secondary" onClick={handleClose}>
            Pilih
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default MyModal;
