import { useState } from "react";
import { Button, Modal, Form, Image } from "react-bootstrap";
import axios from "axios";

function FormModalAdminPayments() {
  const [show, setShow] = useState(false);
  const [booking_id, setBookingId] = useState("");
  const [payment_method, setPaymentMethod] = useState("");
  const [payment_amount, setPaymentAmount] = useState("");
  const [payment_date, setPaymentDate] = useState("");
  const [payment_code, setPaymentCode] = useState("");
  const [payment_status, setPaymentStatus] = useState("");
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
        "https://c7-tiketku.up.railway.app/api/v1/payments",
        {
          booking_id,
          payment_method,
          payment_amount,
          payment_date,
          payment_code,
          payment_status,
        },
        { headers }
      );

      // Reset form field
      setBookingId("");
      setPaymentMethod("");
      setPaymentAmount("");
      setPaymentDate("");
      setPaymentCode("");
      setPaymentStatus("");
      setSuccessMessage("Success to create payment");
      setError("");
      window.location.reload();
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        setError(error.response.data.message);
      } else {
        setError("Failed to create payment");
      }
      setSuccessMessage("");
    }

    setIsLoading(false);
  };

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
          <Modal.Title>Create Payment</Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleSubmit}>
          <Modal.Body>
            <Form.Group className="mb-3">
              <Form.Label>Booking ID</Form.Label>
              <Form.Control type="number" placeholder="1" autoFocus value={booking_id} onChange={(e) => setBookingId(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Payment Method</Form.Label>
              <Form.Control type="text" placeholder="Credit Card" value={payment_method} onChange={(e) => setPaymentMethod(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Payment Amount</Form.Label>
              <Form.Control type="number" placeholder="250000" value={payment_amount} onChange={(e) => setPaymentAmount(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Payment Date</Form.Label>
              <Form.Control type="date" value={payment_date} onChange={(e) => setPaymentDate(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Payment Code</Form.Label>
              <Form.Control type="text" placeholder="G407551489" onChange={(e) => setPaymentCode(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Payment Status</Form.Label>
              <Form.Control type="text" placeholder="capture" onChange={(e) => setPaymentStatus(e.target.value)} />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button type="submit" onClick={handleClose} variant="primary" disabled={isLoading}>
              {isLoading ? "Saving..." : "Save Changes"}
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
}

export default FormModalAdminPayments;
