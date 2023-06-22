import React, { useState } from "react";
import { Button, Modal, Image, Form } from "react-bootstrap";
import prefixicon from "/Prefix icon.svg";

function MyModal() {
  const [show, setShow] = useState(false);
  const [isEconomySeatSelected, setIsEconomySeatSelected] = useState(false);
  const [isDurasiTerpendekSelected, setIsDurasiTerpendekSelected] = useState(false);
  const [isKeberangkatanAwalSelected, setIsKeberangkatanAwalSelected] = useState(false);
  const [isKeberangkatanAkhirSelected, setIsKeberangkatanAkhirSelected] = useState(false);
  const [isKedatanganAwalSelected, setIsKedatanganAwalSelected] = useState(false);
  const [isKedatanganAkhirSelected, setIsKedatanganAkhirSelected] = useState(false);


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleEconomySeatClick = () => {
    setIsEconomySeatSelected(!isEconomySeatSelected);
  };
  const handleDurasiTerpendekClick = () => {
    setIsDurasiTerpendekSelected(!isDurasiTerpendekSelected);
  };
  const handleKeberangkatanAwalClick = () => {
    setIsKeberangkatanAwalSelected(!isKeberangkatanAwalSelected);
  };
  const handleKeberangkatanAkhirClick = () => {
    setIsKeberangkatanAkhirSelected(!isKeberangkatanAkhirSelected);
  };
  const handleKedatanganAwalClick = () => {
    setIsKedatanganAwalSelected(!isKedatanganAwalSelected);
  };
  const handleKedatanganAkhirClick = () => {
    setIsKedatanganAkhirSelected(!isKedatanganAkhirSelected);
  };


  const style = `

  .mdl{
    border-radius:20px !important;
    padding-left:650px !important;
    padding-top:300px !important;
  }

  .seat-class-selected {
    color: #ffffff !important;
    background-color: #4B1979
  }

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

      <Modal className="" size="md" show={show} onHide={handleClose} animation={false} centered>
        <Modal.Header className="d-flex justify-content-end">
          <Button className="delete-btn bg-transparent border-0" onClick={handleClose}>
            <Image className="close-btn__img ms-4" src="/close-button.svg" />
          </Button>
        </Modal.Header>
        <Modal.Body>
          <div className={`${isEconomySeatSelected ? "seat-class-selected" : ""}`} onClick={handleEconomySeatClick} style={{ cursor: "pointer" }}>
            <div className="border-bottom d-flex align-items-center mx-3 py-2">
              <div className="me-auto">
                <p className={`mb-0 ${isEconomySeatSelected ? "text-white" : ""}`}>Harga - <span className="fw-bold">Termurah!</span></p>
              </div>
              {isEconomySeatSelected && <Image src="/Suffix.svg" alt="checklist logo" />}
            </div>
          </div>

          <div className={`${isDurasiTerpendekSelected ? "seat-class-selected" : ""}`} onClick={handleDurasiTerpendekClick} style={{ cursor: "pointer" }}>
            <div className="border-bottom d-flex align-items-center mx-3 py-2">
              <div className="me-auto">
                <p className={`mb-0 ${isDurasiTerpendekSelected ? "text-white" : ""}`}>Durasi - <span className="fw-bold">Terpendek!</span></p>
              </div>
              {isDurasiTerpendekSelected && <Image src="/Suffix.svg" alt="checklist logo" />}
            </div>
          </div>

          <div className={`${isKeberangkatanAwalSelected ? "seat-class-selected" : ""}`} onClick={handleKeberangkatanAwalClick} style={{ cursor: "pointer" }}>
            <div className="border-bottom d-flex align-items-center mx-3 py-2">
              <div className="me-auto">
                <p className={`mb-0 ${isKeberangkatanAwalSelected ? "text-white" : ""}`}>Keberangkatan - <span className="fw-bold">Paling Awal</span></p>
              </div>
              {isKeberangkatanAwalSelected && <Image src="/Suffix.svg" alt="checklist logo" />}
            </div>
          </div>

          <div className={`${isKeberangkatanAkhirSelected ? "seat-class-selected" : ""}`} onClick={handleKeberangkatanAkhirClick} style={{ cursor: "pointer" }}>
            <div className="border-bottom d-flex align-items-center mx-3 py-2">
              <div className="me-auto">
                <p className={`mb-0 ${isKeberangkatanAkhirSelected ? "text-white" : ""}`}>Keberangkatan - <span className="fw-bold">Paling Akhir</span></p>
              </div>
              {isKeberangkatanAkhirSelected && <Image src="/Suffix.svg" alt="checklist logo" />}
            </div>
          </div>

          <div className={`${isKedatanganAwalSelected ? "seat-class-selected" : ""}`} onClick={handleKedatanganAwalClick} style={{ cursor: "pointer" }}>
            <div className="border-bottom d-flex align-items-center mx-3 py-2">
              <div className="me-auto">
                <p className={`mb-0 ${isKedatanganAwalSelected ? "text-white" : ""}`}>Kedatangan - <span className="fw-bold">Paling Awal</span></p>
              </div>
              {isKedatanganAwalSelected && <Image src="/Suffix.svg" alt="checklist logo" />}
            </div>
          </div>

          <div className={`${isKedatanganAkhirSelected ? "seat-class-selected" : ""}`} onClick={handleKedatanganAkhirClick} style={{ cursor: "pointer" }}>
            <div className="border-bottom d-flex align-items-center mx-3 py-2">
              <div className="me-auto">
                <p className={`mb-0 ${isKedatanganAkhirSelected ? "text-white" : ""}`}>Kedatangan - <span className="fw-bold">Paling Akhir</span></p>
              </div>
              {isKedatanganAkhirSelected && <Image src="/Suffix.svg" alt="checklist logo" />}
            </div>
          </div>
          <Button className="save-btn-passengers offset-7 col-4 mt-2 py-3">Pilih</Button>        
        </Modal.Body>
      </Modal>
    </>
  );
}

export default MyModal;
