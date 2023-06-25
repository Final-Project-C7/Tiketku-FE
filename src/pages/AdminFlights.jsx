import React, { useEffect, useState } from "react";
import { Navbar, Image, Button, Dropdown } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import FormModalAdminFlights from "../components/Form/FormModalAdminFlights";

import "./AdminUsers.css";

function AdminFlights() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/v1/flight")
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
              <div className="side-bar-admin__list side-bar-admin__selected d-flex align-items-center py-3 px-4 mb-1">
                <Image className="side-bar-admin__icon" src="flight-icon.svg" style={{ filter: "invert(100%) sepia(0%) saturate(0%) hue-rotate(325deg) brightness(104%) contrast(101%)" }} />
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
              <div className="side-bar-admin__list text-dark d-flex align-items-center py-3 px-4 mb-1">
                <Image className="side-bar-admin__icon" src="seats-icon.svg" />
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
            <h4 className="me-auto mb-0">Flights</h4>
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
                  Flights
                </li>
              </ol>
            </nav>

            <div>
              <h4 className="mb-4">Flights List</h4>
              <FormModalAdminFlights />
              <table className="table table-striped-columns">
                <thead>
                  <tr>
                    <th>No</th>
                    <th>Airline ID</th>
                    <th>Admin ID</th>
                    <th>Flight Code</th>
                    <th>Departure</th>
                    <th>Arrival</th>
                    <th>Seat ID</th>
                    <th>Economy Class Price</th>
                    <th>Premium Economy Price</th>
                    <th>Business Price</th>
                    <th>FirstClass Price</th>
                    <th>Departure Time</th>
                    <th>Arrival Time</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {data?.data?.map((flight, index) => (
                    <tr key={flight.id}>
                      <td>{index + 1}</td>
                      <td>{flight.airline_id}</td>
                      <td>{flight.admin_id}</td>
                      <td>{flight.flight_code}</td>
                      <td>{flight.departure}</td>
                      <td>{flight.arrival}</td>
                      <td>{flight.seat_id}</td>
                      <td>{flight.economyClass_price}</td>
                      <td>{flight.premiumEconomy_price}</td>
                      <td>{flight.business_price}</td>
                      <td>{flight.firstClass_price}</td>
                      <td>{flight.departure_time}</td>
                      <td>{flight.arrival_time}</td>
                      <td>
                        <div className="">
                          <Button className="btn-secondary d-flex py-1 px-3">
                            <Image className="create-icon" src="/edit-icon.svg" />
                            <p className="text-white ms-1 mb-0">Edit</p>
                          </Button>
                          <Button className="btn-danger d-flex py-1 px-3 mt-1">
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
    </>
  );
}

export default AdminFlights;
