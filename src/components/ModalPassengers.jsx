import React, { useState } from "react";
import { Button, Modal, Image, Form } from "react-bootstrap";

function ModalPassengers() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const style = `
  .modal-passengers {
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

  .passengers__img {
    width: 20px;
    height: 30px;
  }

  .passengers__text {
    font-size: 12px;
    color: #8A8A8A;
  }

  .total-passengers__text {
    border: 1px solid #7126B5;
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
        <input className="border-0 bg-transparent" style={{ fontSize: "18px" }} defaultValue="" disabled hidden />2 Penumpang
      </div>

      <Modal size="md" className="modal-passengers position-relative" show={show} onHide={handleClose}>
        <Modal.Header className="d-flex justify-content-end">
          <Button className="delete-btn bg-transparent border-0 p-0" onClick={handleClose}>
            <Image className="close-btn__img ms-4" src="/close-button.svg" />
          </Button>
        </Modal.Header>
        <Modal.Body>
          <div className="row d-flex align-items-center border-bottom mx-2">
            <div className="col-6 fw-bold">
              <Image className="passengers__img me-3" src="/Passengers-Dewasa.svg" />
              DEWASA
              <p className="passengers__text offset-2 fw-normal">(12 tahun keatas)</p>
            </div>
            <div className="d-flex col-6 justify-content-end">
              <p className="total-passengers__text px-2 py-2 me-1 rounded-1">
                <Image src="/icon-min.svg" alt="icon min" />
              </p>
              <p className="px-4 py-2 me-1 border rounded-1">2</p>
              <p className="total-passengers__text px-2 py-2 rounded-1">
                <Image src="/icon-plus.svg" />
              </p>
            </div>
          </div>
          <div className="row d-flex align-items-center border-bottom mx-2 mt-2">
            <div className="col-6 fw-bold">
              <Image className="passengers__img me-3" src="/Passengers-Anak.svg" />
              ANAK
              <p className="passengers__text offset-2 fw-normal">(2 - 11 tahun)</p>
            </div>
            <div className="d-flex col-6 justify-content-end">
              <p className="total-passengers__text px-2 py-2 me-1 rounded-1">
                <Image src="/icon-min.svg" alt="icon min" />
              </p>
              <p className="px-4 py-2 me-1 border rounded-1">0</p>
              <p className="total-passengers__text px-2 py-2 rounded-1">
                <Image src="/icon-plus.svg" />
              </p>
            </div>
          </div>
          <div className="row d-flex align-items-center border-bottom mx-2 mt-2">
            <div className="col-6 fw-bold">
              <Image className="passengers__img me-3" src="/Passengers-Bayi.svg" />
              BAYI
              <p className="passengers__text offset-2 fw-normal">(Dibawah 2 tahun)</p>
            </div>
            <div className="d-flex col-6 justify-content-end">
              <p className="total-passengers__text px-2 py-2 me-1 rounded-1">
                <Image src="/icon-min.svg" alt="icon min" />
              </p>
              <p className="px-4 py-2 me-1 border rounded-1">1</p>
              <p className="total-passengers__text px-2 py-2 rounded-1">
                <Image src="/icon-plus.svg" />
              </p>
            </div>
          </div>
          <Button className="save-btn-passengers offset-7 col-5 mt-2 py-3">Simpan</Button>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalPassengers;
