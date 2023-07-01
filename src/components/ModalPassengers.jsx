import React, { useState } from "react";
import { Button, Modal, Image, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { update, incrementPassenger, decrementPassenger } from "./redux/reducers/passengerSlice";
import { useSelector } from "react-redux";


function ModalPassengers() {
  const [show, setShow] = useState(false);
  ;
  const updatePassenger = (e) => {
    e.preventDefault()
    dispatch(update({ adult, children, baby }));
  }

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { adult, children, baby } = useSelector((state) => state.passenger);
  const dispatch = useDispatch();

  const handleIncrement = (type) => {
    dispatch(incrementPassenger({ type }));
  };

  const handleDecrement = (type) => {
    dispatch(decrementPassenger({ type }));
  };

  const handleChange = (event, type) => {
    const value = Number(event.target.value);
    dispatch(updatePassenger({ [type]: value }));
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

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none !important;
  }

  .test {
    height: 70% !important;
  }

  .total-passengers__input:focus {
    outline-style: none !important;
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
      <div className="col-11 border-bottom text-dark fw-bold pb-3" onClick={handleShow} style={{ cursor: "pointer" }}>
        <input className="border-0 bg-transparent" style={{ fontSize: "18px" }} defaultValue="" disabled hidden /> {adult + children} Penumpang
      </div>

      <Modal size="md" show={show} onHide={handleClose} centered>
        <Modal.Header className="d-flex justify-content-end">
          <Button className="delete-btn bg-transparent border-0 p-0" onClick={handleClose}>
            <Image className="close-btn__img ms-4" src="/close-button.svg" />
          </Button>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <div className="row d-flex align-items-center border-bottom mx-2">
              <div className="col-6 fw-bold pt-0">
                <Image className="passengers__img me-3" src="/Passengers-Dewasa.svg" />
                DEWASA
                <p className="passengers__text offset-2 fw-normal">(12 tahun keatas)</p>
              </div>
              <div className="d-flex col-6 justify-content-end">
                <div className="total-passengers__text rounded-1 p-2 me-1 mb-3" onClick={() => handleDecrement('adult')} style={{ cursor: "pointer" }}>
                  <Image src="/icon-min.svg" alt="icon min" />
                </div>
                <div className="col-3 border rounded-1 me-1 p-2 mb-3">
                  <input type="number" className="total-passengers__input text-center col-12 border-0" value={adult} onChange={(e) => handleChange(e.target.value)} style={{ cursor: "pointer" }}></input>
                </div>
                <div className="total-passengers__text rounded-1 px-2 p-2 mb-3" onClick={() => handleIncrement('adult')} style={{ cursor: "pointer" }}>
                  <Image src="/icon-plus.svg" />
                </div>
              </div>
            </div>
            <div className="row d-flex align-items-center border-bottom mx-2 mt-2">
              <div className="col-6 fw-bold pt-0">
                <Image className="passengers__img me-3" src="/Passengers-Anak.svg" />
                ANAK
                <p className="passengers__text offset-2 fw-normal">(2 - 11 tahun)</p>
              </div>
              <div className="d-flex col-6 justify-content-end">
                <div className="total-passengers__text rounded-1 p-2 me-1 mb-3" onClick={() => handleDecrement('children')} style={{ cursor: "pointer" }}>
                  <Image src="/icon-min.svg" alt="icon min" />
                </div>
                <div className="col-3 border rounded-1 me-1 p-2 mb-3">
                  <input type="number" className="total-passengers__input text-center col-12 border-0" value={children} onChange={(e) => handleChange(e.target.value)} style={{ cursor: "pointer" }}></input>
                </div>
                <div className="total-passengers__text rounded-1 px-2 p-2 mb-3" onClick={() => handleIncrement('children')} style={{ cursor: "pointer" }}>
                  <Image src="/icon-plus.svg" />
                </div>
              </div>
            </div>
            <div className="row d-flex align-items-center border-bottom mx-2 mt-2">
              <div className="col-6 fw-bold pt-0">
                <Image className="passengers__img me-3" src="/Passengers-Bayi.svg" />
                BAYI
                <p className="passengers__text offset-2 fw-normal">(Dibawah 2 tahun)</p>
              </div>
              <div className="d-flex col-6 justify-content-end">
                <div className="total-passengers__text rounded-1 p-2 me-1 mb-3" onClick={() => handleDecrement('baby')} style={{ cursor: "pointer" }}>
                  <Image src="/icon-min.svg" alt="icon min" />
                </div>
                <div className="col-3 border rounded-1 me-1 p-2 mb-3">
                  <input type="number" className="total-passengers__input text-center col-12 border-0" value={baby} onChange={(e) => handleChange(e.target.value)} style={{ cursor: "pointer" }}></input>
                </div>
                <div className="total-passengers__text rounded-1 px-2 p-2 mb-3" onClick={() => handleIncrement('baby')} style={{ cursor: "pointer" }}>
                  <Image src="/icon-plus.svg" />
                </div>
              </div>
            </div>
            <Link to="/" onClick={handleClose}>
              <Button type="submit" className="save-btn-passengers offset-7 col-5 mt-2 py-3">
                Simpan
              </Button>
            </Link>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalPassengers;
