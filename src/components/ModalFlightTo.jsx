import React, { useState } from "react";
import { Button, Modal, Image, Form } from "react-bootstrap";

function ModalFlightTo() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const style = `
  .modal-search {
    border: 1px solid #D0D0D0;
  }

  .modal-search input:focus {
    outline-style: none !important;
  }

  .modal-search__img {
    width: 20px;
    height: 20px;
    opacity: 0.4;
  }

  .close-btn__img {
    width: 18px;
    height: 18px;
  }

  .history__text {
    color: #151515;
    font-weight: 500;
  }

  .delete-btn:hover, delete-btn:active {
    background-color: transparent !important;
  }

  .delete-btn__img {
    width: 12px;
    height: 12px;
  }
  `;

  return (
    <>
      <style>{style}</style>
      <h5 className="pb-3 col-7 col-sm-10" onClick={handleShow} style={{ cursor: "pointer" }}>
        Melbourne (MLB)
      </h5>

      <Modal size="lg" show={show} onHide={handleClose} animation={false} centered>
        <Modal.Header>
          <Modal.Body>
            <div className="d-flex align-items-center">
              <Form className="modal-search d-flex py-1 px-1 rounded-2 col-11">
                <Button className="delete-btn bg-transparent border-0">
                  <Image className="modal-search__img " src="/search.svg" alt="search" />
                </Button>
                <input className="bg-transparent border-0 col-11" type="search" placeholder="Masukkan Kota atau Negara" aria-label="Search" />
              </Form>
              <Button className="delete-btn bg-transparent border-0" onClick={handleClose}>
                <Image className="close-btn__img ms-4" src="/close-button.svg" />
              </Button>
            </div>
            <div className="d-flex mt-4">
              <h5 className="me-auto">Pencarian Terkini</h5>
              <h5 className="text-danger">Hapus</h5>
            </div>
            <div className="d-flex align-items-center border-bottom mt-3">
              <p className="history__text me-auto">Jakarta</p>
              <Button className="delete-btn bg-transparent border-0">
                <Image className="delete-btn__img" src="close-button.svg" alt="delete icon" />
              </Button>
            </div>
            <div className="d-flex align-items-center border-bottom mt-3">
              <p className="history__text me-auto">Jakarta</p>
              <Button className="delete-btn bg-transparent border-0">
                <Image className="delete-btn__img" src="close-button.svg" alt="delete icon" />
              </Button>
            </div>
            <div className="d-flex align-items-center border-bottom mt-3">
              <p className="history__text me-auto">Jakarta</p>
              <Button className="delete-btn bg-transparent border-0">
                <Image className="delete-btn__img" src="close-button.svg" alt="delete icon" />
              </Button>
            </div>
          </Modal.Body>
        </Modal.Header>
      </Modal>
    </>
  );
}

export default ModalFlightTo;
