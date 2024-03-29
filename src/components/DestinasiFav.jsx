import React, { useState, useEffect } from "react";
import { Image, Card, Container, Modal, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import Moment from "moment";
import ModalPassengers from "./ModalPassengers";

import "bootstrap/dist/css/bootstrap.min.css";
import "./DestinasiFav.css";

const dataWithContinent = [
  { city: "Kuala Lumpur", continent: "Asia" },
  { city: "Dubai", continent: "Asia" },
  { city: "Surabaya", continent: "Asia" },
  { city: "Bangkok", continent: "Asia" },
  { city: "Jakarta", continent: "Asia" },
  { city: "Bali", continent: "Asia" },
  { city: "Beijing", continent: "Asia" },
  { city: "Florida", continent: "Amerika" },
  { city: "Incheon", continent: "Asia" },
  { city: "Sydney", continent: "Australia" },
  { city: "Paris", continent: "Eropa" },
  { city: "Surabaya", continent: "Asia" },
  { city: "Incheon", continent: "Asia" },
  { city: "Lombok", continent: "Asia" },
  { city: "Singapura", continent: "Asia" },
  { city: "Bangkok", continent: "Asia" },
  { city: "Los Angeles", continent: "Amerika" },
  { city: "Rio De Janeiro", continent: "Amerika" },
  { city: "Miami", continent: "Amerika" },
  { city: "Vancouver", continent: "Amerika" },
  { city: "Sydney", continent: "Australia" },
  { city: "Hobart", continent: "Australia" },
  { city: "Cairns", continent: "Australia" },
  { city: "Gold Coast", continent: "Australia" },
  { city: "London", continent: "Eropa" },
  { city: "Stockholm", continent: "Eropa" },
  { city: "Moskow", continent: "Eropa" },
  { city: "Amsterdam", continent: "Eropa" },
  { city: "Berlin", continent: "Eropa" },
  { city: "Roma", continent: "Eropa" },
  { city: "Kairo", continent: "Afrika" },
  { city: "Casablanca", continent: "Afrika" },
  { city: "Johannesburg", continent: "Afrika" },
  { city: "Lagos", continent: "Afrika" },
];

const DestinasiFav = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [data, setData] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [selectedFlight, setSelectedFlight] = useState(null);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const handleCardClick = (flight) => {
    setSelectedFlight(flight);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/v1/flight")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="destinasi-fav position-relative d-flex flex-column mx-auto">
      <h5 className="fw-bold pt-0">Destinasi Favorit</h5>
      <input
        className="col-12 col-sm-11 search-desti ms-3 mt-3 mb-2"
        type="search"
        placeholder="   Cari ..."
        aria-label="Search"
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <div className="destinasi-fav__cat d-flex mb-1">
        <Link
          to="/"
          className={`${
            selectedCategory === ""
              ? "destinasi-fav__category-1 px-3"
              : "destinasi-fav__category-2 px-5 px-md-3"
          } d-flex align-items-center justify-content-center text-decoration-none mt-2 py-2 `}
          onClick={() => handleCategoryClick("")}
        >
          <Image
            className="destinasi-fav__search-img me-2"
            src="/search.svg"
            alt="search"
          />
          Semua
        </Link>
        <Link
          to="?continent=Asia"
          className={`${
            selectedCategory === "Asia"
              ? "destinasi-fav__category-1 px-3"
              : "destinasi-fav__category-2 px-5 px-md-3"
          } d-flex align-items-center justify-content-center text-decoration-none mt-2 py-2 `}
          onClick={() => handleCategoryClick("Asia")}
        >
          <Image
            className="destinasi-fav__search-img me-2"
            src="/search.svg"
            alt="search"
          />
          Asia
        </Link>
        <Link
          to="?continent=Amerika"
          className={`${
            selectedCategory === "Amerika"
              ? "destinasi-fav__category-1 px-3"
              : "destinasi-fav__category-2 px-5 px-md-3"
          } d-flex align-items-center justify-content-center text-decoration-none mt-2 py-2 `}
          onClick={() => handleCategoryClick("Amerika")}
        >
          <Image
            className="destinasi-fav__search-img me-2"
            src="/search.svg"
            alt="search"
          />
          Amerika
        </Link>
        <Link
          to="?continent=Australia"
          className={`${
            selectedCategory === "Australia"
              ? "destinasi-fav__category-1 px-3"
              : "destinasi-fav__category-2 px-5 px-md-3"
          } d-flex align-items-center justify-content-center text-decoration-none mt-2 py-2 `}
          onClick={() => handleCategoryClick("Australia")}
        >
          <Image
            className="destinasi-fav__search-img me-2"
            src="/search.svg"
            alt="search"
          />
          Australia
        </Link>
        <Link
          to="?continent=Eropa"
          className={`${
            selectedCategory === "Eropa"
              ? "destinasi-fav__category-1 px-3"
              : "destinasi-fav__category-2 px-5 px-md-3"
          } d-flex align-items-center justify-content-center text-decoration-none mt-2 py-2 `}
          onClick={() => handleCategoryClick("Eropa")}
        >
          <Image
            className="destinasi-fav__search-img me-2"
            src="/search.svg"
            alt="search"
          />
          Eropa
        </Link>
        <Link
          to="?continent=Afrika"
          className={`${
            selectedCategory === "Afrika"
              ? "destinasi-fav__category-1 px-3"
              : "destinasi-fav__category-2 px-5 px-md-3"
          } d-flex align-items-center justify-content-center text-decoration-none mt-2 py-2 `}
          onClick={() => handleCategoryClick("Afrika")}
        >
          <Image
            className="destinasi-fav__search-img me-2"
            src="/search.svg"
            alt="search"
          />
          Afrika
        </Link>
      </div>
      <Container>
        <div className="destinasi-card d-flex justify-content-evenly flex-wrap mb-5 mx-auto">
          {console.log(data)}
          {data?.data
            ?.filter((flight) => [1, 3, 5, 7, 8, 9, 10, 11].includes(flight.id))
            .filter((flight) => {
              if (selectedCategory === "") {
                return true;
              }
              const departureCity =
                flight?.departureAirport?.city.toLowerCase();
              const arrivalCity = flight?.arrivalAirport?.city.toLowerCase();
              const departureContinent = dataWithContinent
                .find((d) => d.city.toLowerCase() === departureCity)
                ?.continent.toLowerCase();
              const arrivalContinent = dataWithContinent
                .find((d) => d.city.toLowerCase() === arrivalCity)
                ?.continent.toLowerCase();
              return (
                departureContinent === selectedCategory.toLowerCase() ||
                arrivalContinent === selectedCategory.toLowerCase()
              );
            })

            .filter((flight) => {
              if (searchQuery === "") {
                return true;
              }
              const departureCity =
                flight?.departureAirport?.city.toLowerCase();
              const arrivalCity = flight?.arrivalAirport?.city.toLowerCase();
              return (
                departureCity.includes(searchQuery.toLowerCase()) ||
                arrivalCity.includes(searchQuery.toLowerCase())
              );
            })

            .map((flight) => (
              <Card
                className="destinasi-card__list mt-3"
                style={{
                  cursor: "pointer",
                  boxShadow: "0px 0px 4px 0px rgba(0, 0, 0, 0.15)",
                }}
                key={flight.id}
                onClick={() => handleCardClick(flight)} // Add click event handler to toggle modal
              >
                <Card.Img
                  variant="top"
                  className="p-2 pb-0"
                  style={{
                    width: "100%",
                    height: "120px",
                    objectFit: "cover",
                    borderRadius: "13px",
                  }}
                  src={flight?.arrivalAirport?.imgURL}
                />
                <Card.Body className="pt-2">
                  <Card.Text className="destinasi-card__text-1 fw-bold mb-1">
                    {flight?.departureAirport?.city} &rarr;{" "}
                    {flight?.arrivalAirport?.city}
                  </Card.Text>
                  <Card.Text className="destinasi-card__text-2 fw-bold mb-1">
                    {flight.airline.airline_name}
                  </Card.Text>
                  <Card.Text className="destinasi-card__text-2 mb-1 text-black">
                    {Moment(flight.departure_time).format("DD")} -{" "}
                    {Moment(flight.arrival_time).format("DD MMMM YYYY")}
                  </Card.Text>
                  <Card.Text className="destinasi-card__text-1 mb-1 text-black">
                    Mulai dari{" "}
                    <span className="text-danger fw-bold">
                      IDR {flight.business_price}
                    </span>
                  </Card.Text>
                </Card.Body>
              </Card>
            ))}
        </div>
      </Container>

      {/* Modal for detailed data */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Flight Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Display detailed flight data here */}
          {selectedFlight && (
            <div>
              <Image
                variant="top"
                className="p-2 pb-0"
                style={{
                  width: "100%",
                  height: "120px",
                  objectFit: "cover",
                  borderRadius: "13px",
                }}
                src={selectedFlight?.arrivalAirport?.imgURL}
              />
              <h5>
                {selectedFlight.departureAirport.city} &rarr;{" "}
                {selectedFlight.arrivalAirport.city}
              </h5>
              <p>Airline: {selectedFlight.airline.airline_name}</p>
              <p>
                Departure: {Moment(selectedFlight.departure_time).format("DD")}{" "}
                - {Moment(selectedFlight.arrival_time).format("DD MMMM YYYY")}
              </p>
              <p>
                Price:{" "}
                <span className="text-danger fw-bold">
                  IDR {selectedFlight.business_price}
                </span>
              </p>
              {/* Add more flight details as needed */}
              <div className="car-date-passengers col-12 col-md-6 d-flex flex-wrap ms-md-4 ms-xl-0 mt-2 mt-sm-0">
                <div className="col-1 d-flex align-items-center">
                  <Image
                    className="card-date__img-1"
                    src="/Passengers.svg"
                    alt="flight takeoff"
                  />
                  <p className="mt-3">To</p>
                </div>
                <div className="col-9 d-flex ms-4 ms-md-4">
                  <div className="col-6 col-md-6 ms-1 ms-md-0">
                    <h3 className="mb-1">Passengers</h3>
                    <ModalPassengers />
                  </div>
                </div>
              </div>
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          <Link to={`/checkout`} state={selectedFlight}>
            <Button variant="secondary">NEXT</Button>
          </Link>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default DestinasiFav;
