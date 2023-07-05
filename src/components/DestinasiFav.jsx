import React, { useState, useEffect } from "react";
import { Image, Card, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import Moment from "moment";

import "bootstrap/dist/css/bootstrap.min.css";
import "./DestinasiFav.css";

const dataWithContinent = [
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
  { city: "Tokyo", continent: "Asia" },
  { city: "Singapura", continent: "Asia" },
  { city: "Bangkok", continent: "Asia" },
  { city: "New York", continent: "Amerika" },
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

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  useEffect(() => {
    axios
      .get("https://c7-tiketku.up.railway.app/api/v1/flight")
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
          {data?.data
            ?.filter((flight) =>
              [3, 4, 6, 7, 9, 8, 12, 14, 15, 16, 17, 19].includes(flight.id)
            )
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
                className="destinasi-card__list shadow mt-3"
                style={{ cursor: "pointer" }}
                key={flight.id}
              >
                <Link to={`/checkout`} state={flight}>
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
                        IDR {flight.economyClass_price}
                      </span>
                    </Card.Text>
                  </Card.Body>
                </Link>
              </Card>
            ))}
        </div>
      </Container>
    </div>
  );
};

export default DestinasiFav;
