import React, { useState } from "react";
import { Button, Modal, Image, Form } from "react-bootstrap";
import ReactCalendar from "./Calendar";

function FilterModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const style = `
  .modal-history__search {
    width: 25rem;
    height: 23rem;
    margin-left: 54rem;
    margin-top: -66rem;
  }

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

  .save-btn-passengers {
    background-color: #4B1979 !important;
    color: #fff !important;
    border-radius: 12px
  }

  .txt{
    color: #7126B5;
  }
  .btn-save{
    background-color: #7126B5;
  }
  `;

  return (
    <>
      <style>{style}</style>
        <Button className="history-filter__btn d-flex bg-white text-dark rounded-5" style={{ height: "30px",cursor: "pointer" }} onClick={handleShow}>
            <Image src="/history-filter.svg" />
            <h5 className="ms-2 mb-0">Filter</h5>
        </Button>

      <Modal className="modal-history__search position-relative" show={show} onHide={handleClose} animation={false}>
        <Modal.Header className="d-flex justify-content-end">

          <Button className="delete-btn bg-transparent border-0" onClick={handleClose}>
            <Image className="close-btn__img" src="/close-button.svg" />
          </Button>
        </Modal.Header>
        <Modal.Body className="d-flex">
            {/* <DatePicker
                selected={startDate}
                onChange={onChange}
                startDate={startDate}
                endDate={endDate}
                selectsRange
                inline
            />     */}
             {/* <input className="border-0 border-bottom pb-3 mt-1 col-12" type="date" /> */}
             <ReactCalendar/>
        </Modal.Body>
        <Modal.Footer>
          <Button className="btn-save" variant="secondary" onClick={handleClose}>
            Simpan
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default FilterModal;
