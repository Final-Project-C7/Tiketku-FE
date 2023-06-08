import React, { useState } from "react";
import { Button, Modal, Image, Form } from "react-bootstrap";

function ModalSeatClass() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
  `;

  return (
    <>
      <style>{style}</style>
      <h5 className="pb-3" onClick={handleShow} style={{ cursor: "pointer" }}>
        Business
      </h5>

      <Modal size="md" show={show} onHide={handleClose} animation={false} centered>
        <Modal.Header className="d-flex justify-content-end">
          <Button className="delete-btn bg-transparent border-0" onClick={handleClose}>
            <Image className="close-btn__img ms-4" src="/close-button.svg" />
          </Button>
        </Modal.Header>
        <Modal.Body>
          <div className="seat-class">
            <div className="border-bottom mx-3 pt-2">
              <p className="fw-bold mb-2 text-white">Economy</p>
              <p className="seat-class__text text-white">IDR 4.950.000</p>
            </div>
          </div>
          <div>
            <div className="border-bottom mx-3 pt-2">
              <p className="fw-bold mb-2">Premium Economy</p>
              <p className="seat-class__text">IDR 7.550.000</p>
            </div>
          </div>
          <div>
            <div className="border-bottom mx-3 pt-2">
              <p className="fw-bold mb-2">Business</p>
              <p className="seat-class__text">IDR 29.220.000</p>
            </div>
          </div>
          <div>
            <div className="border-bottom mx-3 pt-2">
              <p className="fw-bold mb-2">First Class</p>
              <p className="seat-class__text">IDR 87.620.000</p>
            </div>
          </div>
          <Button className="save-btn-passengers offset-7 col-5 mt-2 py-3">Simpan</Button>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalSeatClass;
