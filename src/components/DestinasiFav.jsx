import React, { useState } from "react";
import { Image, Button, Card } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import "./DestinasiFav.css";

const DestinasiFav = () => {
  return (
    <div className="destinasi-fav position-relative d-flex flex-column">
      <h5 className="fw-bold">Destinasi Favorit</h5>
      <div className="d-flex mb-5">
        <div className="destinasi-fav__category-1 d-flex align-items-center justify-content-center text-white mt-2 p-1">
          <Image className="destinasi-fav__search-img me-2" src="/search.svg" alt="search" />
          Semua
        </div>
        <div className="destinasi-fav__category-2 d-flex align-items-center justify-content-center ms-3 mt-2 p-1">
          <Image className="destinasi-fav__search-img me-2" src="/search.svg" alt="search" />
          Asia
        </div>
        <div className="destinasi-fav__category-2 d-flex align-items-center justify-content-center ms-3 mt-2 p-1">
          <Image className="destinasi-fav__search-img me-2" src="/search.svg" alt="search" />
          Amerika
        </div>
        <div className="destinasi-fav__category-2 d-flex align-items-center justify-content-center ms-3 mt-2 p-1">
          <Image className="destinasi-fav__search-img me-2" src="/search.svg" alt="search" />
          Australia
        </div>
        <div className="destinasi-fav__category-2 d-flex align-items-center justify-content-center ms-3 mt-2 p-1">
          <Image className="destinasi-fav__search-img me-2" src="/search.svg" alt="search" />
          Eropa
        </div>
        <div className="destinasi-fav__category-2 d-flex align-items-center justify-content-center ms-3 mt-2 p-1">
          <Image className="destinasi-fav__search-img me-2" src="/search.svg" alt="search" />
          Afrika
        </div>
      </div>
      <div className="destinasi-card d-flex justify-content-center mb-5 mx-4">
        <Card className="shadow" style={{ width: "13rem" }}>
          <Card.Img variant="top" className="p-2 pb-0" src="/Frame-152.svg" />
          <Card.Body className="pt-2">
            <Card.Text className="destinasi-card__text-1 fw-bold mb-1">Jakarta -> Bangkok</Card.Text>
            <Card.Text className="destinasi-card__text-2 fw-bold mb-1">AirAsia</Card.Text>
            <Card.Text className="destinasi-card__text-2 mb-1 text-black">20 - 30 Maret 2023</Card.Text>
            <Card.Text className="destinasi-card__text-1 mb-1 text-black">
              Mulai dari <span className="text-danger fw-bold">IDR 950.000</span>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="ms-3 shadow" style={{ width: "13rem" }}>
          <Card.Img variant="top" className="p-2 pb-0" src="/Frame-152.svg" />
          <Card.Body className="pt-2">
            <Card.Text className="destinasi-card__text-1 fw-bold mb-1">Jakarta -> Bangkok</Card.Text>
            <Card.Text className="destinasi-card__text-2 fw-bold mb-1">AirAsia</Card.Text>
            <Card.Text className="destinasi-card__text-2 mb-1 text-black">20 - 30 Maret 2023</Card.Text>
            <Card.Text className="destinasi-card__text-1 mb-1 text-black">
              Mulai dari <span className="text-danger fw-bold">IDR 950.000</span>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="ms-3 shadow" style={{ width: "13rem" }}>
          <Card.Img variant="top" className="p-2 pb-0" src="/Frame-154.svg" />
          <Card.Body className="pt-3">
            <Card.Text className="destinasi-card__text-1 fw-bold mb-1">Jakarta -> Sydney</Card.Text>
            <Card.Text className="destinasi-card__text-2 fw-bold mb-1">AirAsia</Card.Text>
            <Card.Text className="destinasi-card__text-2 mb-1 text-black">5 - 25 Maret 2023</Card.Text>
            <Card.Text className="destinasi-card__text-1 mb-1 text-black">
              Mulai dari <span className="text-danger fw-bold">IDR 3.650.000</span>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="ms-3 shadow" style={{ width: "13rem" }}>
          <Card.Img variant="top" className="p-2 pb-0" src="/Frame-154.svg" />
          <Card.Body className="pt-3">
            <Card.Text className="destinasi-card__text-1 fw-bold mb-1">Jakarta -> Sydney</Card.Text>
            <Card.Text className="destinasi-card__text-2 fw-bold mb-1">AirAsia</Card.Text>
            <Card.Text className="destinasi-card__text-2 mb-1 text-black">5 - 25 Maret 2023</Card.Text>
            <Card.Text className="destinasi-card__text-1 mb-1 text-black">
              Mulai dari <span className="text-danger fw-bold">IDR 3.650.000</span>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="ms-3 shadow" style={{ width: "13rem" }}>
          <Card.Img variant="top" className="p-2 pb-0" src="/Frame-152.svg" />
          <Card.Body className="pt-2">
            <Card.Text className="destinasi-card__text-1 fw-bold mb-1">Jakarta -> Bangkok</Card.Text>
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
