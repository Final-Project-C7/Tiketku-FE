import { useState } from "react";
import { Button, Modal, Form, Image } from "react-bootstrap";
import axios from "axios";

function FormModalAdminPassengers() {
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const [born_date, setBornDate] = useState("");
  const [citizen, setCitizen] = useState("");
  const [identity_number, setIdentityNumber] = useState("");
  const [publisher_country, setPublisherCountry] = useState("");
  const [valid_until, setValidUntil] = useState("");
  const [booking_id, setBookingId] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);

    try {
      const token = localStorage.getItem("token");
      const headers = { Authorization: `Bearer ${token}` };
      const response = await axios.post(
        "http://localhost:8000/api/v1/passengers",
        {
          name,
          born_date,
          citizen,
          identity_number,
          publisher_country,
          valid_until,
          booking_id,
        },
        { headers }
      );

      // Reset form field
      setName("");
      setBornDate("");
      setCitizen("");
      setIdentityNumber("");
      setPublisherCountry("");
      setValidUntil("");
      setBookingId("");
      setSuccessMessage("Success to create user");
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
        setError("Failed to create user");
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
          <Modal.Title>Create Passenger</Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleSubmit}>
          <Modal.Body>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="1"
                autoFocus
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Born Date</Form.Label>
              <Form.Control
                type="date"
                value={born_date}
                onChange={(e) => setBornDate(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Citizen</Form.Label>
              <Form.Control
                type="text"
                placeholder="Indonesia"
                value={citizen}
                onChange={(e) => setCitizen(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Identity Number</Form.Label>
              <Form.Control
                type="number"
                placeholder="081234567890"
                value={identity_number}
                onChange={(e) => setIdentityNumber(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Publisher Country</Form.Label>
              <Form.Control
                type="text"
                placeholder="Indonesia"
                value={publisher_country}
                onChange={(e) => setPublisherCountry(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Valid Until</Form.Label>
              <Form.Control
                type="date"
                value={valid_until}
                onChange={(e) => setValidUntil(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Booking ID</Form.Label>
              <Form.Control
                type="number"
                placeholder="1"
                value={booking_id}
                onChange={(e) => setBookingId(e.target.value)}
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

export default FormModalAdminPassengers;
