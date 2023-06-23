import React, { useState } from "react";
import { Button, Modal, Image, Form } from "react-bootstrap";
import "../Riwayat.css"

function SearchModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const style = `
  // .modal-history__search {
  //   width: 27rem;
  //   margin-left: 53rem;
  //   margin-top: 12rem;
  // }

  .history__search:focus {
    outline-style: none;
  }

  .close-btn__img {
    width: 18px;
    height: 18px;
  } 

  .close-btn__img2 {
    width: 15px;
    height: 18px;
  } 

  .btn-modall{
    background-color: white !important;
    border-radius: 16px;
    border: 1px solid #A06ECE !important;
    margin-right: 70px;
    color: #7126B5 !important;
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    font-size: 15px;
  }

  
  .btn-modall:hover 
  {
    background-color: #A06ECE!important ;
    color: #ffffff !important;
  }
  
  .btn-modall:hover img
   {
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

  .txt{
    color: #7126B5;
  }
  `;

  return (
    <>
      <style>{style}</style>
      <Image className="ms-3" src="/searchriwayat.svg" style={{ cursor: "pointer" }} onClick={handleShow} />

      <Modal size="md" className="modal-history__search" show={show} onHide={handleClose} animation={false} centered>
        <Modal.Header>
          <Form className="d-flex align-items-center  rounded-2 col-11 border border-2 py-2 px-3">
            <Image className="me-2" src="/search.svg" alt="search" />
            <input className="history__search col-11 border-0 bg-transparent" type="search" placeholder="Masukan Nomor Penerbangan ..." aria-label="Search" />
          </Form>
          <Button className="delete-btn bg-transparent border-0" onClick={handleClose}>
            <Image className="close-btn__img" src="/close-button.svg" />
          </Button>
        </Modal.Header>
        <Modal.Body style={{ paddingBottom: "5rem" }}>
          <div className="mx-2">
            <div className="d-flex mb-3">
              <p className="mb-0 me-auto text-dark fw-bold">Pencarian Terkini</p>
              <p className="mb-0 fw-bold text-danger">Hapus</p>
            </div>
            <div className="d-flex mb-0">
              <p className="mb-0 me-auto text-dark">1234ABC</p>
              <Image className="close-btn__img2 ms-4" src="/closebtn.svg" />
            </div>
            <div className="border-bottom border-2 mt-1 mb-3"></div>
            <div className="d-flex mb-0">
              <p className="mb-0 me-auto text-dark">1234ABC</p>
              <Image className="close-btn__img2 ms-4" src="/closebtn.svg" />
            </div>
            <div className="border-bottom border-2 mt-1 mb-3"></div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default SearchModal;
