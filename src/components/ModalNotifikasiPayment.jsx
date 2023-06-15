import React, { useState } from "react";
import { Toast, Row, Col, Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import bel from "/bel.svg";
import buletijo from "/buletijo.svg";
import buletmerah from "/buletmerah.svg";

function ModalNotifikasiPayment() {
  return (
    <>
      <div
        className="modal show"
        style={{ display: "block", position: "initial" }}
      >
        <Modal.Dialog>
          <Modal.Header closeButton>
            <Modal.Title></Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Container>
              <Row>
                <Col md={1} className="d-flex justify-content-end">
                  <div>
                    <img src={bel} />
                  </div>
                </Col>
                <Col md={11}>
                  <Row>
                    <Col
                      md={6}
                      className="m-0 p-0"
                      style={{ fontSize: "10px", color: "#8A8A8A" }}
                    >
                      Status Pembayaran (Unpaid)
                    </Col>
                    <Col
                      md={6}
                      className="d-flex justify-content-end p-0"
                      style={{ fontSize: "10px", color: "#8A8A8A" }}
                    >
                      20 Maret, 14:04 <img src={buletijo} className="ms-1" />
                    </Col>
                    <Col
                      md={11}
                      className="m-0 p-0"
                      style={{ fontSize: "14px" }}
                    >
                      <p className="m-0 p-0">
                        Selesaikan pembayaran Anda sebelum tanggal 10 Maret
                        2023!
                      </p>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
            <hr />
          </Modal.Body>
        </Modal.Dialog>
      </div>
    </>
  );
}

export default ModalNotifikasiPayment;
