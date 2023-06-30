import React, { useState, useEffect } from "react";
import { Image, Card, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import Moment from "moment";

import "bootstrap/dist/css/bootstrap.min.css";
import "./DestinasiFav.css";

const DestinasiFav = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [data, setData] = useState("");

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

  console.log(data?.data);

  return (
    <div className="destinasi-fav position-relative d-flex flex-column mx-auto">
      <h5 className="fw-bold pt-0">Destinasi Favorit</h5>
      <div className="destinasi-fav__cat d-flex mb-1">
        <Link
          to="/"
          className={`${selectedCategory === "" ? "destinasi-fav__category-1 px-3" : "destinasi-fav__category-2 px-5 px-md-3"} d-flex align-items-center justify-content-center text-decoration-none mt-2 py-2 `}
          onClick={() => handleCategoryClick("")}
        >
          <Image className="destinasi-fav__search-img me-2" src="/search.svg" alt="search" />
          Semua
        </Link>

        <Link
          to="?city=Asia"
          className={`${selectedCategory === "Asia" ? "destinasi-fav__category-1 px-3" : "destinasi-fav__category-2 px-5 px-md-3"} d-flex align-items-center justify-content-center text-decoration-none mt-2 py-2 `}
          onClick={() => handleCategoryClick("Asia")}
        >
          <Image className="destinasi-fav__search-img me-2" src="/search.svg" alt="search" />
          Asia
        </Link>

        <Link
          to="?city=Amerika"
          className={`${selectedCategory === "Amerika" ? "destinasi-fav__category-1 px-3" : "destinasi-fav__category-2 px-5 px-md-3"} d-flex align-items-center justify-content-center text-decoration-none mt-2 py-2 `}
          onClick={() => handleCategoryClick("Amerika")}
        >
          <Image className="destinasi-fav__search-img me-2" src="/search.svg" alt="search" />
          Amerika
        </Link>
        <Link
          to="?city=Australia"
          className={`${selectedCategory === "Australia" ? "destinasi-fav__category-1 px-3" : "destinasi-fav__category-2 px-5 px-md-3"} d-flex align-items-center justify-content-center text-decoration-none mt-2 py-2 `}
          onClick={() => handleCategoryClick("Australia")}
        >
          <Image className="destinasi-fav__search-img me-2" src="/search.svg" alt="search" />
          Australia
        </Link>
        <Link
          to="?city=Eropa"
          className={`${selectedCategory === "Eropa" ? "destinasi-fav__category-1 px-3" : "destinasi-fav__category-2 px-5 px-md-3"} d-flex align-items-center justify-content-center text-decoration-none mt-2 py-2 `}
          onClick={() => handleCategoryClick("Eropa")}
        >
          <Image className="destinasi-fav__search-img me-2" src="/search.svg" alt="search" />
          Eropa
        </Link>
        <Link
          to="?city=Afrika"
          className={`${selectedCategory === "Afrika" ? "destinasi-fav__category-1 px-3" : "destinasi-fav__category-2 px-5 px-md-3"} d-flex align-items-center justify-content-center text-decoration-none mt-2 py-2 `}
          onClick={() => handleCategoryClick("Afrika")}
        >
          <Image className="destinasi-fav__search-img me-2" src="/search.svg" alt="search" />
          Afrika
        </Link>
      </div>

      <Container>
        <div className="destinasi-card d-flex justify-content-evenly flex-wrap mb-5 mx-auto">
          {data?.data?.map((flight) => (
            <Card className="destinasi-card__list shadow mt-3" key={flight.id}>
              <Card.Img variant="top" className="p-2 pb-0" src="/Frame-152.svg" />
              <Card.Body className="pt-2">
                <Card.Text className="destinasi-card__text-1 fw-bold mb-1">
                  {flight?.departureAirport?.city} &rarr; {flight?.arrivalAirport?.city}
                </Card.Text>
                <Card.Text className="destinasi-card__text-2 fw-bold mb-1">{flight.airline.airline_name}</Card.Text>
                <Card.Text className="destinasi-card__text-2 mb-1 text-black">
                  {Moment(flight.departure_time).format("DD")} - {Moment(flight.arrival_time).format("DD MMMM YYYY")}
                </Card.Text>
                <Card.Text className="destinasi-card__text-1 mb-1 text-black">
                  Mulai dari <span className="text-danger fw-bold">IDR {flight.economyClass_price}</span>
                </Card.Text>
              </Card.Body>
            </Card>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default DestinasiFav;
