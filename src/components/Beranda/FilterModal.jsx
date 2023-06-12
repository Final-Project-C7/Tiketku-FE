import React, { useState } from "react";
import { Button, Modal, Image, Form } from "react-bootstrap";

function FilterModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSearch = (event) => {
    event.preventDefault();
    const searchTerm = event.target.search.value;
    onSearch(searchTerm);}

  const style = `
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
      <div className="history-filter col-2 d-flex ms-3">
        <Button onClick={handleShow} className="history-filter__btn d-flex bg-white text-dark rounded-5" style={{ height: "30px" }}>
        <Image src="/history-filter.svg" />
            <h5  className="ms-2 mb-0">Filter</h5>
        </Button>
        <Image className="ms-3" src="/searchriwayat.svg" style={{ cursor: "pointer" }} />
       </div>

      <Modal
        size="md"
        show={show}
        onHide={handleClose}
        animation={false}
        centered
      >
        <Modal.Header className="d-flex justify-content-end">
            <form className="ms-3 align-items-center py-1 px-4 rounded-2">
                <Image className="" src="/search.svg" alt="search" />
                <input type="search" placeholder="Masukan Nomor Penerbangan ..." aria-label="Search" />
            </form>
          <Button
            className="delete-btn bg-transparent border-0"
            onClick={handleClose}
          >
            <Image className="close-btn__img ms-4" src="/close-button.svg" />
          </Button>
        </Modal.Header>
        <Modal.Body>
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

export default FilterModal;
