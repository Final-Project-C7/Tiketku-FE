import { useState, useEffect } from "react";
import { Button, Modal, Form, Image } from "react-bootstrap";
import axios from "axios";

function FormModalUpdateAdminBookings(props) {
  const [show, setShow] = useState(false);
  const [user_id, setUserId] = useState("");
  const [flight_id, setFlightId] = useState("");
  const [order_date, setOrderDate] = useState("");
  const [amount, setAmount] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = () => {
    setUserId(props.data.user_id);
    setFlightId(props.data.flight_id);
    setOrderDate(props.data.order_date);
    setAmount(props.data.amount);
  };

  useEffect(() => {
    fetchData();
  }, [props.data.id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const token = localStorage.getItem("token");
      const headers = { Authorization: `Bearer ${token}` };
      const response = await axios.put(
        `https://c7-tiketku.up.railway.app/api/v1/bookings/${props.data.id}`,
        {
          user_id,
          flight_id,
          order_date,
          amount,
        },
        { headers }
      );

      window.location.reload();
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        setError(error.response.data.message);
      } else {
        setError("Failed to edit booking");
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
          <Modal.Title>Edit Booking</Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleSubmit}>
          <Modal.Body>
            <Form.Group className="mb-3">
              <Form.Label>User ID</Form.Label>
              <Form.Control type="number" placeholder="1" autoFocus value={user_id} onChange={(e) => setUserId(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Flight ID</Form.Label>
              <Form.Control type="number" placeholder="112" value={flight_id} onChange={(e) => setFlightId(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Order Date</Form.Label>
              <Form.Control type="date" value={order_date} onChange={(e) => setOrderDate(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Amount</Form.Label>
              <Form.Control type="number" placeholder="250000" value={amount} onChange={(e) => setAmount(e.target.value)} />
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

export default FormModalUpdateAdminBookings;
