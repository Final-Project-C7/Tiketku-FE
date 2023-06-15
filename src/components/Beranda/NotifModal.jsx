import React, { useState } from "react";
import { Button, Modal, Image, Form, Container, Row, Col } from "react-bootstrap";
import bel from "/bel.svg";
import buletijo from "/buletijo.svg";

function NotifModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const style = `
  .modal-history__search {
    width: 27rem;
    margin-left: 63rem;
    margin-top: 4rem;
  }

  .close-btn__img {
    width: 18px;
    height: 18px;
  } 

  .close-btn__img2 {
    width: 15px;
    height: 18px;
  } 

  .m-1{
    width: 7px;
    height: 7px;
  }

  .txt{
    padding-left:10px;
  }

  .txt2{
    padding-left:35px;
    font-family: poppins;
  }

  `;

  return (
    <>
      <style>{style}</style>
      <Button className="col-12 text-white rounded-4 border-0 py-3" onClick={handleShow}>
        <h4 className="mb-0">Bayar</h4>
      </Button>
      <Modal size="md" className="modal-history__search" show={show} onHide={handleClose} animation={false}>
        {/* <Modal.Header className="d-flex justify-content-end"> */}
          <Button className="d-flex bg-transparent border-0 justify-content-end mt-2 mb-2" onClick={handleClose}>
            <Image className="close-btn__img" src="/close-button.svg" />
          </Button>
          <hr className="mt-0 mb-0"/>
        {/* </Modal.Header> */}
        <Modal.Body style={{ paddingBottom: "3rem" }}>
          <Row>
            <Col className="bel">
              <div className="txt" style={{ fontSize: "12px", color: "#8A8A8A"}}>
                <img src={bel} /> Status Pembayaran (unpaid)
              </div>
            </Col>
            <Col
                  md={3}
                  className="d-flex m-0 p-0"
                  style={{ fontSize: "12px", color: "#8A8A8A" }}
                >
                20 Maret, 14:04
                <img src={buletijo} className="m-1"/>
            </Col>
          </Row>
          <div>
            <p className="txt2 mt-1">Selesaikan pembayaran Anda sebelum tanggal 10 Maret 2023!</p>
          </div>
          <hr/>          
        </Modal.Body>
      </Modal>
    </>
  );
}

export default NotifModal;