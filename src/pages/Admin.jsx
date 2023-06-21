import React from "react";
import { Navbar, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./Admin.css";

function Admin() {
  return (
    <>
      <div className="d-flex">
        <div className="side-bar-admin col-2 bg-body-tertiary shadow">
          <Image className="side-bar-admin__logo p-4" src="logo.svg" />
          <div className="mt-3">
            <Link to="/admin" className="text-decoration-none">
              <div className="side-bar-admin__list side-bar-admin__selected d-flex align-items-center py-3 px-4 mb-1">
                <Image className="side-bar-admin__icon" src="dashboard-icon.svg" style={{ filter: "invert(100%) sepia(0%) saturate(0%) hue-rotate(325deg) brightness(104%) contrast(101%)" }} />
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
            <h4 className="me-auto mb-0">Dashboard</h4>
            <Image className="me-3" src="/fi_user_org.svg" />
          </Navbar.Collapse>
          <div className="container p-4">
            <h1>Welcome to Admin Page</h1>
            <div className="main-admin d-flex flex-wrap mt-4">
              <div className="main-admin__card bg-warning-subtle shadow rounded-3 me-2 mb-4">
                <div className="d-flex p-4 pb-2">
                  <Image className="main-admin__icon col-4" src="users-icon.svg" />
                  <div className="col-8 ms-4">
                    <h4 className="mb-0">Users</h4>
                    <p className="mb-0">(jumlah) Users</p>
                  </div>
                </div>
                <Link to="/" className="text-decoration-none">
                  <p className="text-dark bg-info-subtle text-center mb-0 py-1">Lihat Detail</p>
                </Link>
              </div>
              <div className="main-admin__card bg-warning-subtle shadow rounded-3 me-2 mb-4">
                <div className="d-flex p-4 pb-2">
                  <Image className="main-admin__icon col-4" src="airlines-icon.svg" />
                  <div className="col-8 ms-4">
                    <h4 className="mb-0">Airlines</h4>
                    <p className="mb-0">(jumlah) Airlines</p>
                  </div>
                </div>
                <Link to="/" className="text-decoration-none">
                  <p className="text-dark bg-info-subtle text-center mb-0 py-1">Lihat Detail</p>
                </Link>
              </div>
              <div className="main-admin__card bg-warning-subtle shadow rounded-3 me-2 mb-4">
                <div className="d-flex p-4 pb-2">
                  <Image className="main-admin__icon col-4" src="airport-icon.svg" />
                  <div className="col-8 ms-4">
                    <h4 className="mb-0">Airports</h4>
                    <p className="mb-0">(jumlah) Airports</p>
                  </div>
                </div>
                <Link to="/" className="text-decoration-none">
                  <p className="text-dark bg-info-subtle text-center mb-0 py-1">Lihat Detail</p>
                </Link>
              </div>
              <div className="main-admin__card bg-warning-subtle shadow rounded-3 me-2 mb-4">
                <div className="d-flex p-4 pb-2">
                  <Image className="main-admin__icon col-4" src="flight-icon.svg" />
                  <div className="col-8 ms-4">
                    <h4 className="mb-0">Flights</h4>
                    <p className="mb-0">(jumlah) Flights</p>
                  </div>
                </div>
                <Link to="/" className="text-decoration-none">
                  <p className="text-dark bg-info-subtle text-center mb-0 py-1">Lihat Detail</p>
                </Link>
              </div>
              <div className="main-admin__card bg-warning-subtle shadow rounded-3 me-2 mb-2">
                <div className="d-flex p-4 pb-2">
                  <Image className="main-admin__icon col-4" src="booking-icon.svg" />
                  <div className="col-8 ms-4">
                    <h4 className="mb-0">Bookings</h4>
                    <p className="mb-0">(jumlah) Bookings</p>
                  </div>
                </div>
                <Link to="/" className="text-decoration-none">
                  <p className="text-dark bg-info-subtle text-center mb-0 py-1">Lihat Detail</p>
                </Link>
              </div>
              <div className="main-admin__card bg-warning-subtle shadow rounded-3 me-2 mb-2">
                <div className="d-flex p-4 pb-2">
                  <Image className="main-admin__icon col-4" src="passengers-icon.svg" />
                  <div className="col-8 ms-4">
                    <h4 className="mb-0">Passengers</h4>
                    <p className="mb-0">(jumlah) Passengers</p>
                  </div>
                </div>
                <Link to="/" className="text-decoration-none">
                  <p className="text-dark bg-info-subtle text-center mb-0 py-1">Lihat Detail</p>
                </Link>
              </div>
              <div className="main-admin__card bg-warning-subtle shadow rounded-3 me-2 mb-2">
                <div className="d-flex p-4 pb-2">
                  <Image className="main-admin__icon col-4" src="seats-icon.svg" />
                  <div className="col-8 ms-4">
                    <h4 className="mb-0">Seats</h4>
                    <p className="mb-0">(jumlah) Seats</p>
                  </div>
                </div>
                <Link to="/" className="text-decoration-none">
                  <p className="text-dark bg-info-subtle text-center mb-0 py-1">Lihat Detail</p>
                </Link>
              </div>
              <div className="main-admin__card bg-warning-subtle shadow rounded-3 me-2 mb-2">
                <div className="d-flex p-4 pb-2">
                  <Image className="main-admin__icon col-4" src="payment-icon.svg" />
                  <div className="col-8 ms-4">
                    <h4 className="mb-0">Payments</h4>
                    <p className="mb-0">(jumlah) Payments</p>
                  </div>
                </div>
                <Link to="/" className="text-decoration-none">
                  <p className="text-dark bg-info-subtle text-center mb-0 py-1">Lihat Detail</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Admin;
