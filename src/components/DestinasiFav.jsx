import React, { useState } from "react";
import { Image, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./DestinasiFav.css";

const DestinasiFav = () => {
  return (
    <div className="destinasi-fav position-relative d-flex flex-column">
      <h5 className="fw-bold">Destinasi Favorit</h5>
      <div className="d-flex mb-5">
        <Link to="/" className="destinasi-fav__category-1 d-flex align-items-center justify-content-center text-white text-decoration-none mt-2 p-1">
          <Image className="destinasi-fav__search-img me-2" src="/search.svg" alt="search" />
          Semua
        </Link>
        <Link to="/" className="destinasi-fav__category-2 d-flex align-items-center justify-content-center text-decoration-none ms-3 mt-2 p-1">
          <Image className="destinasi-fav__search-img me-2" src="/search.svg" alt="search" />
          Asia
        </Link>
        <Link to="/" className="destinasi-fav__category-2 d-flex align-items-center justify-content-center text-decoration-none ms-3 mt-2 p-1">
          <Image className="destinasi-fav__search-img me-2" src="/search.svg" alt="search" />
          Amerika
        </Link>
        <Link to="/" className="destinasi-fav__category-2 d-flex align-items-center justify-content-center text-decoration-none ms-3 mt-2 p-1">
          <Image className="destinasi-fav__search-img me-2" src="/search.svg" alt="search" />
          Australia
        </Link>
        <Link to="/" className="destinasi-fav__category-2 d-flex align-items-center justify-content-center text-decoration-none ms-3 mt-2 p-1">
          <Image className="destinasi-fav__search-img me-2" src="/search.svg" alt="search" />
          Eropa
        </Link>
        <Link to="/" className="destinasi-fav__category-2 d-flex align-items-center justify-content-center text-decoration-none ms-3 mt-2 p-1">
          <Image className="destinasi-fav__search-img me-2" src="/search.svg" alt="search" />
          Afrika
        </Link>
      </div>
      <div className="destinasi-card d-flex justify-content-center flex-wrap mb-5 mx-4">
        <Card className="shadow" style={{ width: "18.47%" }}>
          <Card.Img variant="top" className="p-2 pb-0" src="/Frame-152.svg" />
          <Card.Body className="pt-2">
            <Card.Text className="destinasi-card__text-1 fw-bold mb-1">Jakarta &rarr; Bangkok</Card.Text>
            <Card.Text className="destinasi-card__text-2 fw-bold mb-1">AirAsia</Card.Text>
            <Card.Text className="destinasi-card__text-2 mb-1 text-black">20 - 30 Maret 2023</Card.Text>
            <Card.Text className="destinasi-card__text-1 mb-1 text-black">
              Mulai dari <span className="text-danger fw-bold">IDR 950.000</span>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="ms-3 shadow" style={{ width: "18.47%" }}>
          <Card.Img variant="top" className="p-2 pb-0" src="/Frame-152.svg" />
          <Card.Body className="pt-2">
            <Card.Text className="destinasi-card__text-1 fw-bold mb-1">Jakarta &rarr; Bangkok</Card.Text>
            <Card.Text className="destinasi-card__text-2 fw-bold mb-1">AirAsia</Card.Text>
            <Card.Text className="destinasi-card__text-2 mb-1 text-black">20 - 30 Maret 2023</Card.Text>
            <Card.Text className="destinasi-card__text-1 mb-1 text-black">
              Mulai dari <span className="text-danger fw-bold">IDR 950.000</span>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="ms-3 shadow" style={{ width: "18.47%" }}>
          <Card.Img variant="top" className="p-2 pb-0" src="/frame154.svg" />
          <Card.Body className="pt-3">
            <Card.Text className="destinasi-card__text-1 fw-bold mb-1">Jakarta &rarr; Sydney</Card.Text>
            <Card.Text className="destinasi-card__text-2 fw-bold mb-1">AirAsia</Card.Text>
            <Card.Text className="destinasi-card__text-2 mb-1 text-black">5 - 25 Maret 2023</Card.Text>
            <Card.Text className="destinasi-card__text-1 mb-1 text-black">
              Mulai dari <span className="text-danger fw-bold">IDR 3.650.000</span>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="ms-3 shadow" style={{ width: "18.47%" }}>
          <Card.Img variant="top" className="p-2 pb-0" src="/frame154.svg" />
          <Card.Body className="pt-3">
            <Card.Text className="destinasi-card__text-1 fw-bold mb-1">Jakarta &rarr; Sydney</Card.Text>
            <Card.Text className="destinasi-card__text-2 fw-bold mb-1">AirAsia</Card.Text>
            <Card.Text className="destinasi-card__text-2 mb-1 text-black">5 - 25 Maret 2023</Card.Text>
            <Card.Text className="destinasi-card__text-1 mb-1 text-black">
              Mulai dari <span className="text-danger fw-bold">IDR 3.650.000</span>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="ms-3 shadow" style={{ width: "18.47%" }}>
          <Card.Img variant="top" className="p-2 pb-0" src="/Frame-152.svg" />
          <Card.Body className="pt-2">
            <Card.Text className="destinasi-card__text-1 fw-bold mb-1">Jakarta &rarr; Bangkok</Card.Text>
            <Card.Text className="destinasi-card__text-2 fw-bold mb-1">AirAsia</Card.Text>
            <Card.Text className="destinasi-card__text-2 mb-1 text-black">20 - 30 Maret 2023</Card.Text>
            <Card.Text className="destinasi-card__text-1 mb-1 text-black">
              Mulai dari <span className="text-danger fw-bold">IDR 950.000</span>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default DestinasiFav;
