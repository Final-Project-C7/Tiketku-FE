import { useState, useEffect } from "react";
import { Button, Modal, Form, Image } from "react-bootstrap";
import axios from "axios";

function FormModalUpdateAdminAirports(props) {
  const [show, setShow] = useState(false);
  const [airport_name, setAirportName] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = () => {
    setAirportName(props.data.airport_name);
    setCity(props.data.city);
    setCountry(props.data.country);
    setSelectedImage(props.data.selectedImage);
  };

  useEffect(() => {
    fetchData();
  }, [props.data.id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const formData = new FormData();
      formData.append("airport_name", airport_name);
      formData.append("city", city);
      formData.append("country", country);
      formData.append("image", selectedImage);

      const response = await axios.put(`https://c7-tiketku.up.railway.app/api/v1/airports/${props.data.id}`, formData);

      window.location.reload();
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        setError(error.response.data.message);
      } else {
        setError("Failed to edit airport");
      }
      setSuccessMessage("");
    }

    setIsLoading(false);
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleImageChange = (e) => {
    setSelectedImage(e.target.files[0]);
  };

  return (
    <>
      <Button className="btn-secondary d-flex py-1 px-3" onClick={handleShow}>
        <Image className="create-icon" src="/edit-icon.svg" />
        <p className="text-white ms-1 mb-0">Edit</p>
      </Button>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Edit Airport</Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleSubmit}>
          <Modal.Body>
            <Form.Group className="mb-3">
              <Form.Label>Airport Name</Form.Label>
              <Form.Control type="text" placeholder="Soekarno-Hatta International Airport" autoFocus value={airport_name} onChange={(e) => setAirportName(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>City</Form.Label>
              <Form.Control type="text" placeholder="Jakarta" value={city} onChange={(e) => setCity(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Country</Form.Label>
              <Form.Control type="text" placeholder="Indonesia" value={country} onChange={(e) => setCountry(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Image</Form.Label>
              <Form.Control type="file" onChange={handleImageChange} />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button type="submit" variant="primary" onClick={handleClose} disabled={isLoading}>
              {isLoading ? "Saving..." : "Save Changes"}
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
}

export default FormModalUpdateAdminAirports;
