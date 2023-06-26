import React, { useState } from "react";
import { Image, Button, Card, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./DestinasiFav.css";

const DestinasiFav = ({ destinations, onFilter }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleApplyFilter = () => {
    const filteredDestinations = destinations.filter((destination) =>
      destination.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    onFilter(filteredDestinations);
  };

  return (
    <div className="destinasi-fav position-relative d-flex flex-column mx-auto">
      <h5 className="fw-bold">Destinasi Favorit</h5>
      <div className="d-flex mb-5">
        <Button className="destinasi-fav__category-2 d-flex align-items-center justify-content-center text-dark text-decoration-none mt-2 p-1">
          <Image className="destinasi-fav__search-img me-2" src="/search.svg" alt="search" />
          <div 
          onClick={handleApplyFilter}
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Semua"
          >
          Semua</div>
        </Button>

        <Button className="destinasi-fav__category-2 d-flex align-items-center justify-content-center text-dark text-decoration-none mt-2 p-1">
          <Image className="destinasi-fav__search-img me-2" src="/search.svg" alt="search" />
          <div 
          onClick={handleApplyFilter}
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Semua"
          >
          Asia</div>
        </Button>

        <Button className="destinasi-fav__category-2 d-flex align-items-center justify-content-center text-dark text-decoration-none mt-2 p-1">
          <Image className="destinasi-fav__search-img me-2" src="/search.svg" alt="search" />
          <div 
          onClick={handleApplyFilter}
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Semua"
          >
          Amerika</div>
        </Button>

        <Button className="destinasi-fav__category-2 d-flex align-items-center justify-content-center text-dark text-decoration-none mt-2 p-1">
          <Image className="destinasi-fav__search-img me-2" src="/search.svg" alt="search" />
          <div 
          onClick={handleApplyFilter}
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Semua"
          >
          Australia</div>
        </Button>

        <Button className="destinasi-fav__category-2 d-flex align-items-center justify-content-center text-dark text-decoration-none mt-2 p-1">
          <Image className="destinasi-fav__search-img me-2" src="/search.svg" alt="search" />
          <div 
          onClick={handleApplyFilter}
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Semua"
          >
          Eropa</div>
        </Button>

        <Button className="destinasi-fav__category-2 d-flex align-items-center justify-content-center text-dark text-decoration-none mt-2 p-1">
          <Image className="destinasi-fav__search-img me-2" src="/search.svg" alt="search" />
          <div 
          onClick={handleApplyFilter}
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Semua"
          >
          Afrika</div>
        </Button>

        {/* <Link to="/" className="destinasi-fav__category-1 d-flex align-items-center justify-content-center text-white text-decoration-none mt-2 p-1">
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
        </Link> */}

      </div>
      
      <Container>
      <div className="destinasi-card d-flex flex-wrap mb-5">
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
      </Container>
    </div>
  );
};

export default DestinasiFav;
