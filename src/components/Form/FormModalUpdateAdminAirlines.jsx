import { useState, useEffect } from "react";
import { Button, Modal, Form, Image } from "react-bootstrap";
import axios from "axios";

function FormModalUpdateAdminAirlines(props) {
  const [show, setShow] = useState(false);
  const [airline_name, setAirlineName] = useState("");
  const [baggage, setBaggage] = useState("");
  const [cabin_baggage, setCabinBaggage] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = () => {
    setAirlineName(props.data.airline_name);
    setBaggage(props.data.baggage);
    setCabinBaggage(props.data.cabin_baggage);
  };

  useEffect(() => {
    fetchData();
  }, [props.data.id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await axios.put(`https://c7-tiketku.up.railway.app/api/v1/airline/${props.data.id}`, {
        airline_name,
        baggage,
        cabin_baggage,
      });

      window.location.reload();
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        setError(error.response.data.message);
      } else {
        setError("Failed to edit airline");
      }
      setSuccessMessage("");
    }

    setIsLoading(false);
  };

  const handleShow = () => {
    setShow(true);
  };
  const handleClose = () => {
    setShow(false);
  };

  return (
    <>
      <Button className="btn-secondary d-flex py-1 px-3" onClick={handleShow}>
        <Image className="create-icon" src="/edit-icon.svg" />
        <p className="text-white ms-1 mb-0">Edit</p>
      </Button>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Edit Airline</Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleSubmit}>
          <Modal.Body>
            <Form.Group className="mb-3">
              <Form.Label>Airline Name</Form.Label>
              <Form.Control type="text" placeholder="Emirates" autoFocus value={airline_name} onChange={(e) => setAirlineName(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Baggage</Form.Label>
              <Form.Control type="number" placeholder="20" value={baggage} onChange={(e) => setBaggage(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Cabin Baggage</Form.Label>
              <Form.Control type="number" placeholder="7" value={cabin_baggage} onChange={(e) => setCabinBaggage(e.target.value)} />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button type="submit" variant="primary" disabled={isLoading}>
              {isLoading ? "Saving..." : "Save Changes"}
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
}

export default FormModalUpdateAdminAirlines;
