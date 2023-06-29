import { useState } from "react";
import { Button, Modal, Form, Image } from "react-bootstrap";
import axios from "axios";

function FormModalAdminFlights() {
  const [show, setShow] = useState(false);
  const [airline_id, setAirlineId] = useState("");
  const [admin_id, setAdminId] = useState("");
  const [flight_code, setFlightCode] = useState("");
  const [departure, setDeparture] = useState("");
  const [arrival, setArrival] = useState("");
  const [seat_id, setSeatId] = useState("");
  const [economyClass_price, setEconomyClassPrice] = useState("");
  const [premiumEconomy_price, setPremiumClassPrice] = useState("");
  const [business_price, setBusinessPrice] = useState("");
  const [firstClass_price, setFirstClassPrice] = useState("");
  const [departure_time, setDepartureTime] = useState("");
  const [arrival_time, setArrivalTime] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);

    try {
      const response = await axios.post(
        "c7-tiketku.up.railway.app/api/v1/flight",
        {
          airline_id,
          admin_id,
          flight_code,
          departure,
          arrival,
          seat_id,
          economyClass_price,
          premiumEconomy_price,
          business_price,
          firstClass_price,
          departure_time,
          arrival_time,
        }
      );

      // Reset form field
      setAirlineId("");
      setAdminId("");
      setFlightCode("");
      setDeparture("");
      setArrival("");
      setSeatId("");
      setEconomyClassPrice("");
      setPremiumClassPrice("");
      setBusinessPrice("");
      setFirstClassPrice("");
      setDepartureTime("");
      setArrivalTime("");
      setSuccessMessage("Success to create flight");
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
        setError("Failed to create flight");
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
          <Modal.Title>Create Flight</Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleSubmit}>
          <Modal.Body>
            <Form.Group className="mb-3">
              <Form.Label>Airline ID</Form.Label>
              <Form.Control
                type="number"
                placeholder="1"
                autoFocus
                value={airline_id}
                onChange={(e) => setAirlineId(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Admin ID</Form.Label>
              <Form.Control
                type="number"
                placeholder="112"
                value={admin_id}
                onChange={(e) => setAdminId(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Flight Code</Form.Label>
              <Form.Control
                type="number"
                placeholder="1"
                value={flight_code}
                onChange={(e) => setFlightCode(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Departure</Form.Label>
              <Form.Control
                type="number"
                placeholder="1"
                value={departure}
                onChange={(e) => setDeparture(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Arrival</Form.Label>
              <Form.Control
                type="number"
                placeholder="1"
                value={arrival}
                onChange={(e) => setArrival(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Seat Id</Form.Label>
              <Form.Control
                type="number"
                placeholder="1"
                value={seat_id}
                onChange={(e) => setSeatId(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Economy Class Price</Form.Label>
              <Form.Control
                type="number"
                placeholder="250000"
                value={economyClass_price}
                onChange={(e) => setEconomyClassPrice(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Premium Economy Price</Form.Label>
              <Form.Control
                type="number"
                placeholder="350000"
                value={premiumEconomy_price}
                onChange={(e) => setPremiumClassPrice(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Business Price</Form.Label>
              <Form.Control
                type="number"
                placeholder="450000"
                value={business_price}
                onChange={(e) => setBusinessPrice(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>FirstClass Price</Form.Label>
              <Form.Control
                type="number"
                placeholder="550000"
                value={firstClass_price}
                onChange={(e) => setFirstClassPrice(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Departure Time</Form.Label>
              <Form.Control
                type="date"
                value={departure_time}
                onChange={(e) => setDepartureTime(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Arrival Time</Form.Label>
              <Form.Control
                type="date"
                value={arrival_time}
                onChange={(e) => setArrivalTime(e.target.value)}
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button
              type="submit"
              variant="primary"
              onClick={handleClose}
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

export default FormModalAdminFlights;
