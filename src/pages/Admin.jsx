import React, { useEffect, useState } from "react";
import { Navbar, Image, Dropdown } from "react-bootstrap";
import { Link, useNavigate, Navigate } from "react-router-dom";
import axios from "axios";

import "./Admin.css";

function Admin() {
  const [users, setUsers] = useState([]);
  const [airlines, setAirlines] = useState([]);
  const [airports, setAirports] = useState([]);
  const [flights, setFlights] = useState([]);
  const [bookings, setBookings] = useState([]);
  const [passengers, setPassengers] = useState([]);
  const [seats, setSeats] = useState([]);
  const [payments, setPayments] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const token = localStorage.getItem("token");
  const headers = { Authorization: `Bearer ${token}` };

  useEffect(() => {
    // get all users
    axios
      .get("http://localhost:8000/api/v1/user")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error(error);
      });

    // get all airlines
    axios
      .get("http://localhost:8000/api/v1/airline")
      .then((response) => {
        setAirlines(response.data);
      })
      .catch((error) => {
        console.error(error);
      });

    // get all airports
    axios
      .get("http://localhost:8000/api/v1/airports")
      .then((response) => {
        setAirports(response.data);
      })
      .catch((error) => {
        console.error(error);
      });

    // get all flights
    axios
      .get("http://localhost:8000/api/v1/flight")
      .then((response) => {
        setFlights(response.data);
      })
      .catch((error) => {
        console.error(error);
      });

    // get all bookings
    axios
      .get("http://localhost:8000/api/v1/bookings", { headers })
      .then((response) => {
        setBookings(response.data);
      })
      .catch((error) => {
        console.error(error);
      });

    // get all passengers
    axios
      .get("http://localhost:8000/api/v1/passengers", { headers })
      .then((response) => {
        setPassengers(response.data);
      })
      .catch((error) => {
        console.error(error);
      });

    // get all seats
    axios
      .get("http://localhost:8000/api/v1/seats", { headers })
      .then((response) => {
        setSeats(response.data);
      })
      .catch((error) => {
        console.error(error);
      });

    // get all payments
    axios
      .get("http://localhost:8000/api/v1/payments", { headers })
      .then((response) => {
        setPayments(response.data);
      })
      .catch((error) => {
        console.error(error);
      });

    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const navigateTo = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigateTo("/admin-login");
  };

  return (
    <>
      {token ? (
        <div>
          <div className="d-flex">
            <div className="side-bar-admin col-2 bg-body-tertiary shadow">
              <Image
                className="side-bar-admin__logo p-4"
                src="/logofinal.png"
              />
              <div className="mt-3">
                <Link to="/admin" className="text-decoration-none">
                  <div className="side-bar-admin__list side-bar-admin__selected d-flex align-items-center py-3 px-4 mb-1">
                    <Image
                      className="side-bar-admin__icon"
                      src="dashboard-icon.svg"
                      style={{
                        filter:
                          "invert(100%) sepia(0%) saturate(0%) hue-rotate(325deg) brightness(104%) contrast(101%)",
                      }}
                    />
                    <h5 className="ms-2 mb-0">Dashboard</h5>
                  </div>
                </Link>
                <Link to="/admin-users" className="text-decoration-none">
                  <div className="side-bar-admin__list text-dark d-flex align-items-center py-3 px-4 mb-1">
                    <Image
                      className="side-bar-admin__icon"
                      src="users-icon.svg"
                    />
                    <h5 className="ms-2 mb-0">Users</h5>
                  </div>
                </Link>
                <Link to="/admin-airlines" className="text-decoration-none">
                  <div className="side-bar-admin__list text-dark d-flex align-items-center py-3 px-4 mb-1">
                    <Image
                      className="side-bar-admin__icon"
                      src="airlines-icon.svg"
                    />
                    <h5 className="ms-2 mb-0">Airlines</h5>
                  </div>
                </Link>
                <Link to="/admin-airports" className="text-decoration-none">
                  <div className="side-bar-admin__list text-dark d-flex align-items-center py-3 px-4 mb-1">
                    <Image
                      className="side-bar-admin__icon"
                      src="airport-icon.svg"
                    />
                    <h5 className="ms-2 mb-0">Airports</h5>
                  </div>
                </Link>
                <Link to="/admin-flights" className="text-decoration-none">
                  <div className="side-bar-admin__list text-dark d-flex align-items-center py-3 px-4 mb-1">
                    <Image
                      className="side-bar-admin__icon"
                      src="flight-icon.svg"
                    />
                    <h5 className="ms-2 mb-0">Flights</h5>
                  </div>
                </Link>
                <Link to="/admin-bookings" className="text-decoration-none">
                  <div className="side-bar-admin__list text-dark d-flex align-items-center py-3 px-4 mb-1">
                    <Image
                      className="side-bar-admin__icon"
                      src="booking-icon.svg"
                    />
                    <h5 className="ms-2 mb-0">Bookings</h5>
                  </div>
                </Link>
                <Link to="/admin-passengers" className="text-decoration-none">
                  <div className="side-bar-admin__list text-dark d-flex align-items-center py-3 px-4 mb-1">
                    <Image
                      className="side-bar-admin__icon"
                      src="passengers-icon.svg"
                    />
                    <h5 className="ms-2 mb-0">Passengers</h5>
                  </div>
                </Link>
                <Link to="/admin-seats" className="text-decoration-none">
                  <div className="side-bar-admin__list text-dark d-flex align-items-center py-3 px-4 mb-1">
                    <Image
                      className="side-bar-admin__icon"
                      src="seats-icon.svg"
                    />
                    <h5 className="ms-2 mb-0">Seats</h5>
                  </div>
                </Link>
                <Link to="/admin-payments" className="text-decoration-none">
                  <div className="side-bar-admin__list text-dark d-flex align-items-center py-3 px-4 mb-1">
                    <Image
                      className="side-bar-admin__icon"
                      src="payment-icon.svg"
                    />
                    <h5 className="ms-2 mb-0">Payments</h5>
                  </div>
                </Link>
              </div>
            </div>
            <div className="col-10">
              <Navbar.Collapse className="navbar-admin Container d-flex p-4">
                <h4 className="me-auto mb-0">Dashboard</h4>
                <Dropdown>
                  <Dropdown.Toggle
                    variant="transparent"
                    id="dropdown-basic"
                    className="border-0"
                  >
                    <Image src="/fi_user_org.svg" />
                  </Dropdown.Toggle>
                  <Dropdown.Menu
                    className="btn bg-danger"
                    onClick={handleLogout}
                  >
                    <Dropdown.Item className="bg-danger text-white text-center">
                      Logout
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Navbar.Collapse>
              <div className="container p-4">
                <h1>Welcome to Admin Page</h1>
                <div className="main-admin d-flex flex-wrap mt-4">
                  <div className="main-admin__card bg-warning-subtle shadow rounded-3 me-2 mb-4">
                    <div className="d-flex p-4 pb-2">
                      <Image
                        className="main-admin__icon col-4"
                        src="users-icon.svg"
                      />
                      <div className="col-8 ms-4">
                        <h4 className="mb-0">Users</h4>
                        <p className="mb-0">
                          {users.data?.users?.length} Users
                        </p>
                      </div>
                    </div>
                    <Link to="/admin-users" className="text-decoration-none">
                      <p className="text-dark bg-info-subtle text-center mb-0 py-1">
                        Lihat Detail
                      </p>
                    </Link>
                  </div>
                  <div className="main-admin__card bg-warning-subtle shadow rounded-3 me-2 mb-4">
                    <div className="d-flex p-4 pb-2">
                      <Image
                        className="main-admin__icon col-4"
                        src="airlines-icon.svg"
                      />
                      <div className="col-8 ms-4">
                        <h4 className="mb-0">Airlines</h4>
                        <p className="mb-0">
                          {airlines.data?.airlinesData?.length} Airlines
                        </p>
                      </div>
                    </div>
                    <Link to="/admin-airlines" className="text-decoration-none">
                      <p className="text-dark bg-info-subtle text-center mb-0 py-1">
                        Lihat Detail
                      </p>
                    </Link>
                  </div>
                  <div className="main-admin__card bg-warning-subtle shadow rounded-3 me-2 mb-4">
                    <div className="d-flex p-4 pb-2">
                      <Image
                        className="main-admin__icon col-4"
                        src="airport-icon.svg"
                      />
                      <div className="col-8 ms-4">
                        <h4 className="mb-0">Airports</h4>
                        <p className="mb-0">
                          {airports.data?.airport?.length} Airports
                        </p>
                      </div>
                    </div>
                    <Link to="/admin-airports" className="text-decoration-none">
                      <p className="text-dark bg-info-subtle text-center mb-0 py-1">
                        Lihat Detail
                      </p>
                    </Link>
                  </div>
                  <div className="main-admin__card bg-warning-subtle shadow rounded-3 me-2 mb-4">
                    <div className="d-flex p-4 pb-2">
                      <Image
                        className="main-admin__icon col-4"
                        src="flight-icon.svg"
                      />
                      <div className="col-8 ms-4">
                        <h4 className="mb-0">Flights</h4>
                        <p className="mb-0">{flights.data?.length} Flights</p>
                      </div>
                    </div>
                    <Link to="/admin-flights" className="text-decoration-none">
                      <p className="text-dark bg-info-subtle text-center mb-0 py-1">
                        Lihat Detail
                      </p>
                    </Link>
                  </div>
                  <div className="main-admin__card bg-warning-subtle shadow rounded-3 me-2 mb-2">
                    <div className="d-flex p-4 pb-2">
                      <Image
                        className="main-admin__icon col-4"
                        src="booking-icon.svg"
                      />
                      <div className="col-8 ms-4">
                        <h4 className="mb-0">Bookings</h4>
                        <p className="mb-0">
                          {bookings.data?.bookings?.length} Bookings
                        </p>
                      </div>
                    </div>
                    <Link to="/admin-bookings" className="text-decoration-none">
                      <p className="text-dark bg-info-subtle text-center mb-0 py-1">
                        Lihat Detail
                      </p>
                    </Link>
                  </div>
                  <div className="main-admin__card bg-warning-subtle shadow rounded-3 me-2 mb-2">
                    <div className="d-flex p-4 pb-2">
                      <Image
                        className="main-admin__icon col-4"
                        src="passengers-icon.svg"
                      />
                      <div className="col-8 ms-4">
                        <h4 className="mb-0">Passengers</h4>
                        <p className="mb-0">
                          {passengers.data?.passengers?.length} Passengers
                        </p>
                      </div>
                    </div>
                    <Link
                      to="/admin-passengers"
                      className="text-decoration-none"
                    >
                      <p className="text-dark bg-info-subtle text-center mb-0 py-1">
                        Lihat Detail
                      </p>
                    </Link>
                  </div>
                  <div className="main-admin__card bg-warning-subtle shadow rounded-3 me-2 mb-2">
                    <div className="d-flex p-4 pb-2">
                      <Image
                        className="main-admin__icon col-4"
                        src="seats-icon.svg"
                      />
                      <div className="col-8 ms-4">
                        <h4 className="mb-0">Seats</h4>
                        <p className="mb-0">
                          {seats.data?.seats?.length} Seats
                        </p>
                      </div>
                    </div>
                    <Link to="/admin-seats" className="text-decoration-none">
                      <p className="text-dark bg-info-subtle text-center mb-0 py-1">
                        Lihat Detail
                      </p>
                    </Link>
                  </div>
                  <div className="main-admin__card bg-warning-subtle shadow rounded-3 me-2 mb-2">
                    <div className="d-flex p-4 pb-2">
                      <Image
                        className="main-admin__icon col-4"
                        src="payment-icon.svg"
                      />
                      <div className="col-8 ms-4">
                        <h4 className="mb-0">Payments</h4>
                        <p className="mb-0">{payments.data?.length} Payments</p>
                      </div>
                    </div>
                    <Link to="/admin-payments" className="text-decoration-none">
                      <p className="text-dark bg-info-subtle text-center mb-0 py-1">
                        Lihat Detail
                      </p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Navigate to="/admin-login" />
      )}
    </>
  );
}

export default Admin;
