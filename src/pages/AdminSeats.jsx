import React, { useEffect, useState } from "react";
import { Navbar, Image, Button, Dropdown, Modal } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import FormModalAdminSeats from "../components/Form/FormModalAdminSeats";

import "./AdminUsers.css";

function AdminSeats() {
  const [data, setData] = useState([]);
  const [isDeleted, setIsDeleted] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [deleteSeatId, setDeleteSeatId] = useState(null);
  const token = localStorage.getItem("token");
  const headers = { Authorization: `Bearer ${token}` };

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/v1/seats", { headers })
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching Data:", error);
      });
  }, []);

  const navigateTo = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigateTo("/admin-login");
  };

  const confirmDelete = async () => {
    try {
      await axios.delete(`http://localhost:8000/api/v1/seats/${deleteSeatId}`, { headers });
      setIsDeleted(true);
      console.log("Data berhasil dihapus");
      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  };

  const handleShow = (seatId) => {
    setDeleteSeatId(seatId);
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
    setDeleteSeatId(null);
  };

  if (isDeleted) {
    return null;
  }
  return (
    <>
      <div className="d-flex">
        <div className="side-bar-admin col-2 bg-body-tertiary shadow">
          <Image className="side-bar-admin__logo p-4" src="/logofinal.png" />
          <div className="mt-3">
            <Link to="/admin" className="text-decoration-none">
              <div className="side-bar-admin__list text-dark d-flex align-items-center py-3 px-4 mb-1">
                <Image className="side-bar-admin__icon" src="dashboard-icon.svg" />
                <h5 className="ms-2 mb-0">Dashboard</h5>
              </div>
            </Link>
            <Link to="/admin-users" className="text-decoration-none">
              <div className="side-bar-admin__list text-dark d-flex align-items-center py-3 px-4 mb-1">
                <Image className="side-bar-admin__icon" src="users-icon.svg" />
                <h5 className="ms-2 mb-0">Users</h5>
              </div>
            </Link>
            <Link to="/admin-airlines" className="text-decoration-none">
              <div className="side-bar-admin__list text-dark d-flex align-items-center py-3 px-4 mb-1">
                <Image className="side-bar-admin__icon" src="airlines-icon.svg" />
                <h5 className="ms-2 mb-0">Airlines</h5>
              </div>
            </Link>
            <Link to="/admin-airports" className="text-decoration-none">
              <div className="side-bar-admin__list text-dark d-flex align-items-center py-3 px-4 mb-1">
                <Image className="side-bar-admin__icon" src="airport-icon.svg" />
                <h5 className="ms-2 mb-0">Airports</h5>
              </div>
            </Link>
            <Link to="/admin-flights" className="text-decoration-none">
              <div className="side-bar-admin__list text-dark d-flex align-items-center py-3 px-4 mb-1">
                <Image className="side-bar-admin__icon" src="flight-icon.svg" />
                <h5 className="ms-2 mb-0">Flights</h5>
              </div>
            </Link>
            <Link to="/admin-bookings" className="text-decoration-none">
              <div className="side-bar-admin__list text-dark d-flex align-items-center py-3 px-4 mb-1">
                <Image className="side-bar-admin__icon" src="booking-icon.svg" />
                <h5 className="ms-2 mb-0">Bookings</h5>
              </div>
            </Link>
            <Link to="/admin-passengers" className="text-decoration-none">
              <div className="side-bar-admin__list text-dark d-flex align-items-center py-3 px-4 mb-1">
                <Image className="side-bar-admin__icon" src="passengers-icon.svg" />
                <h5 className="ms-2 mb-0">Passengers</h5>
              </div>
            </Link>
            <Link to="/admin-seats" className="text-decoration-none">
              <div className="side-bar-admin__list side-bar-admin__selected d-flex align-items-center py-3 px-4 mb-1">
                <Image className="side-bar-admin__icon" src="seats-icon.svg" style={{ filter: "invert(100%) sepia(0%) saturate(0%) hue-rotate(325deg) brightness(104%) contrast(101%)" }} />
                <h5 className="ms-2 mb-0">Seats</h5>
              </div>
            </Link>
            <Link to="/admin-payments" className="text-decoration-none">
              <div className="side-bar-admin__list text-dark d-flex align-items-center py-3 px-4 mb-1">
                <Image className="side-bar-admin__icon" src="payment-icon.svg" />
                <h5 className="ms-2 mb-0">Payments</h5>
              </div>
            </Link>
          </div>
        </div>
        <div className="col-10">
          <Navbar.Collapse className="navbar-admin Container d-flex p-4">
            <h4 className="me-auto mb-0">Seats</h4>
            <Dropdown>
              <Dropdown.Toggle variant="transparent" id="dropdown-basic" className="border-0">
                <Image src="/fi_user_org.svg" />
              </Dropdown.Toggle>
              <Dropdown.Menu className="btn bg-danger" onClick={handleLogout}>
                <Dropdown.Item className="bg-danger text-white text-center">Logout</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Navbar.Collapse>
          <div className="container p-4">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item active" aria-current="page">
                  <Link to="/admin" className="text-decoration-none text-dark fw-bold d-flex align-items-center">
                    <Image className="breadcrumb__img me-1" src="dashboard-icon.svg" /> Dashboard
                  </Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Seats
                </li>
              </ol>
            </nav>

            <div>
              <h4 className="mb-4">Seats List</h4>
              <FormModalAdminSeats />
              <table className="table table-striped-columns">
                <thead>
                  <tr>
                    <th>No</th>
                    <th>Seat Number</th>
                    <th>Flight ID</th>
                    <th>Booking ID</th>
                  </tr>
                </thead>
                <tbody>
                  {data?.data?.seats?.map((seat, index) => (
                    <tr key={seat.id}>
                      <td>{index + 1}</td>
                      <td>{seat.seat_number}</td>
                      <td>{seat.flight_id}</td>
                      <td>{seat.booking_id}</td>
                      <td>
                        <div className="d-flex">
                          <Button className="btn-secondary d-flex py-1 px-3">
                            <Image className="create-icon" src="/edit-icon.svg" />
                            <p className="text-white ms-1 mb-0">Edit</p>
                          </Button>
                          <Button className="btn-danger d-flex py-1 px-3 ms-1" onClick={() => handleShow(seat.id)}>
                            <Image className="create-icon" src="/delete-icon.svg" />
                            <p className="text-white ms-1 mb-0">Delete</p>
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <Modal show={showModal} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="text-center">
            <Image src="delete-icon.svg" alt="delete icon" className="col-2 mb-2" style={{ filter: "invert(59%) sepia(8%) saturate(14%) hue-rotate(321deg) brightness(87%) contrast(90%)", opacity: "30%" }} />
            <p className="mb-0">Are you sure you want to delete this seat?</p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button className="btn-delete" variant="danger" onClick={confirmDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AdminSeats;
