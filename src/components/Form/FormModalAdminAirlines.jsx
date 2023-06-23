import { useState } from "react";
import { Button, Modal, Form, Image } from "react-bootstrap";

function FormModalAdminAirlines() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button className="btn-primary border-0 d-flex py-2 px-2" onClick={handleShow}>
        <Image className="create-icon" src="/create-icon.svg" />
        <p className="text-white ms-1 mb-0">Create</p>
      </Button>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Create Airline</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Airline Name</Form.Label>
              <Form.Control type="text" placeholder="Emirates" autoFocus />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Baggage</Form.Label>
              <Form.Control type="number" placeholder="20" autoFocus />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Cabin Baggage</Form.Label>
              <Form.Control type="number" placeholder="7" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default FormModalAdminAirlines;
