import React from "react";
import { Navbar, Image, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import FormModalAdminAirports from "../components/Form/FormModalAirports";

import "./AdminUsers.css";

function AdminAirports() {
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
              <div className="side-bar-admin__list side-bar-admin__selected d-flex align-items-center py-3 px-4 mb-1">
                <Image className="side-bar-admin__icon" src="airport-icon.svg" style={{ filter: "invert(100%) sepia(0%) saturate(0%) hue-rotate(325deg) brightness(104%) contrast(101%)" }} />
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
            <h4 className="me-auto mb-0">Airports</h4>
            <Image className="me-3" src="/fi_user_org.svg" />
          </Navbar.Collapse>
          <div className="container p-4">
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb">
                <li class="breadcrumb-item active" aria-current="page">
                  <Link to="/admin" class="text-decoration-none text-dark fw-bold d-flex align-items-center">
                    <Image className="breadcrumb__img me-1" src="dashboard-icon.svg" /> Dashboard
                  </Link>
                </li>
                <li class="breadcrumb-item active" aria-current="page">
                  Airports
                </li>
              </ol>
            </nav>

            <div>
              <h4 className="mb-4">Airports List</h4>
              <FormModalAdminAirports />
              <table className="table table-striped-columns">
                <thead>
                  <tr>
                    <th>No</th>
                    <th>Airport Name</th>
                    <th>City</th>
                    <th>Country</th>
                    <th>Image URL</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Soekarno-Hatta International Airport</td>
                    <td>Jakarta</td>
                    <td>Indonesia</td>
                    <td>https://ik.imagekit.io/test123/IMG-1685202069643_V3uz9HkYJ.png</td>
                    <td>
                      <div className="d-flex">
                        <Button className="btn-secondary d-flex py-1 px-3">
                          <Image className="create-icon" src="/edit-icon.svg" />
                          <p className="text-white ms-1 mb-0">Edit</p>
                        </Button>
                        <Button className="btn-danger d-flex py-1 px-3 ms-1">
                          <Image className="create-icon" src="/delete-icon.svg" />
                          <p className="text-white ms-1 mb-0">Delete</p>
                        </Button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminAirports;
