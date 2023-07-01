import React, { useState } from "react";
import { Button, Modal, Image, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { update } from "./redux/reducers/classSlice";
import { useDispatch, useSelector } from "react-redux";

const seatOptions = ["Economy", "Premium Economy", "Business", "First Class"];

function ModalSeatClass() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const kelas = useSelector((state) => state.class.nameClass);
  const selectedClass = useSelector((state) => state.class.selectedClass);
  const dispatch = useDispatch();

  const updateClass = (e) => {
    e.preventDefault()
    dispatch(update({ selectedClass }))
  }

  const handleClassSelection = (selectedClass) => {
    dispatch(update({ selectedClass }));
  };


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
        {selectedClass}
      </div>

      <Modal size="md" show={show} onHide={handleClose} centered>
        <Modal.Header className="d-flex justify-content-end">
          <Button className="delete-btn bg-transparent border-0 p-0" onClick={handleClose}>
            <Image className="close-btn__img ms-4" src="/close-button.svg" />
          </Button>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={updateClass}>
            {kelas.map((kelasItem) => (
              <button key={kelasItem} onClick={() => handleClassSelection(kelasItem)} value={selectedClass} disabled={selectedClass === kelasItem} className={`border-bottom d-flex align-items-center px-3 py-2 ${selectedClass === kelas ? "seat-class-selected" : ""}`} style={{ cursor: "pointer" }}>
                {kelasItem}
              </button>
            ))}
            <Link to="/" >
              <Button className="save-btn-passengers offset-7 col-5 mt-2 py-3" type="submit" onClick={handleClose} >
                Simpan
              </Button>
            </Link>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalSeatClass;
