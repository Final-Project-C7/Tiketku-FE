import { useState } from "react";
import { Button, Modal, Form, Image } from "react-bootstrap";

function FormModalAdminFlights() {
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
          <Modal.Title>Create Flight</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Airline ID</Form.Label>
              <Form.Control type="number" placeholder="1" autoFocus />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Airline ID</Form.Label>
              <Form.Control type="number" placeholder="112" autoFocus />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Flight Code</Form.Label>
              <Form.Control type="number" placeholder="1" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Departure</Form.Label>
              <Form.Control type="number" placeholder="1" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Arrival</Form.Label>
              <Form.Control type="number" placeholder="1" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Economy Class Price</Form.Label>
              <Form.Control type="number" placeholder="250000" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Premium Economy Price</Form.Label>
              <Form.Control type="number" placeholder="350000" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Business Price</Form.Label>
              <Form.Control type="number" placeholder="450000" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>FirstClass Price</Form.Label>
              <Form.Control type="number" placeholder="550000" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Departure Time</Form.Label>
              <Form.Control type="date" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Arrival Time</Form.Label>
              <Form.Control type="date" />
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

export default FormModalAdminFlights;
