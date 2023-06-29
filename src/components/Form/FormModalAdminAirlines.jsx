import { useState } from "react";
import { Button, Modal, Form, Image } from "react-bootstrap";
import axios from "axios";

function FormModalAdminAirlines() {
  const [show, setShow] = useState(false);
  const [airline_name, setAirlineName] = useState("");
  const [baggage, setBaggage] = useState("");
  const [cabin_baggage, setCabinBaggage] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);

    try {
      const response = await axios.post(
        "c7-tiketku.up.railway.app/api/v1/airline",
        {
          airline_name,
          baggage,
          cabin_baggage,
        }
      );

      // Reset form field
      setAirlineName("");
      setBaggage("");
      setCabinBaggage("");
      setSuccessMessage("success to create airline");
      setError("");
      window.location.reload();
    } catch (error) {
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        setError(error.response.data.message);
      } else {
        setError("Failed to create airline");
      }
      setSuccessMessage("");
    }

    setIsLoading(false);
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button
        className="btn-primary border-0 d-flex py-2 px-2"
        onClick={handleShow}
      >
        <Image className="create-icon" src="/create-icon.svg" />
        <p className="text-white ms-1 mb-0">Create</p>
      </Button>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Create Airline</Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleSubmit}>
          <Modal.Body>
            <Form.Group className="mb-3">
              <Form.Label>Airline Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Emirates"
                autoFocus
                value={airline_name}
                onChange={(e) => setAirlineName(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Baggage</Form.Label>
              <Form.Control
                type="number"
                placeholder="20"
                value={baggage}
                onChange={(e) => setBaggage(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Cabin Baggage</Form.Label>
              <Form.Control
                type="number"
                placeholder="7"
                value={cabin_baggage}
                onChange={(e) => setCabinBaggage(e.target.value)}
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button
              type="submit"
              onClick={handleClose}
              variant="primary"
              disabled={isLoading}
            >
              {isLoading ? "Saving..." : "Save Changes"}
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
}

export default FormModalAdminAirlines;
