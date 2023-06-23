import React, { useState } from "react";
import { Button, Modal, Image, Form } from "react-bootstrap";
import Calendar from "react-calendar";

import "./Calendar.css";

function FilterModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [date, setDate] = useState(new Date());

  const onChange = (date) => {
    setDate(date);
  };

  const style = `
  // .modal-history__filter {
  //   margin-left: 22rem;
  //   margin-top: 12rem;
  // }

  .close-btn__img {
    width: 18px;
    height: 18px;
  } 

  .close-btn__img2 {
    width: 15px;
    height: 18px;
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
      <Button className="history-filter__btn d-flex bg-white text-dark rounded-5" onClick={handleShow} style={{ height: "30px", cursor: "pointer" }}>
        <Image src="/history-filter.svg" />
        <h5 className="ms-2 mb-0">Filter</h5>
      </Button>

      <Modal size="sm" className="modal-history__filter" show={show} onHide={handleClose} animation={false} centered>
        <Modal.Header className="d-flex justify-content-end">
          <Button className="delete-btn bg-transparent border-0" onClick={handleClose}>
            <Image className="close-btn__img" src="/close-button.svg" />
          </Button>
        </Modal.Header>
        <Modal.Body className="d-flex">
          <Calendar onChange={onChange} value={date} />
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
