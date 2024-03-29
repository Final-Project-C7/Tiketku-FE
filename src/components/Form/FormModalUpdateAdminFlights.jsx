import { useState, useEffect } from "react";
import { Button, Modal, Form, Image } from "react-bootstrap";
import axios from "axios";

function FormModalUpdateAdminFlights(props) {
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

  const fetchData = () => {
    setAirlineId(props.data.airline_id);
    setAdminId(props.data.admin_id);
    setFlightCode(props.data.flight_code);
    setDeparture(props.data.departure);
    setArrival(props.data.arrival);
    setSeatId(props.data.seat_id);
    setEconomyClassPrice(props.data.economyClass_price);
    setPremiumClassPrice(props.data.premiumEconomy_price);
    setBusinessPrice(props.data.business_price);
    setFirstClassPrice(props.data.firstClass_price);
    setDepartureTime(props.data.departure_time);
    setArrivalTime(props.data.arrival_time);
  };

  useEffect(() => {
    fetchData();
  }, [props.data.id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await axios.put(
        `http://localhost:8000/api/v1/flight/${props.data.id}`,
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

      window.location.reload();
    } catch (error) {
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        setError(error.response.data.message);
      } else {
        setError("Failed to edit flight");
      }
      setSuccessMessage("");
    }

    setIsLoading(false);
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button className="btn-secondary d-flex py-1 px-3" onClick={handleShow}>
        <Image className="create-icon" src="/edit-icon.svg" />
        <p className="text-white ms-1 mb-0">Edit</p>
      </Button>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Edit Flight</Modal.Title>
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
                type="text"
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
            <Button type="submit" variant="primary" disabled={isLoading}>
              {isLoading ? "Saving..." : "Save Changes"}
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
}

export default FormModalUpdateAdminFlights;
