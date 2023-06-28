import React, { useState } from "react";
import { Image, Button, Card, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./DestinasiFav.css";

const DestinasiFav = () => {
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };
  return (
    <div className="destinasi-fav position-relative d-flex flex-column mx-auto">
      <h5 className="fw-bold pt-0">Destinasi Favorit</h5>
      <div className="destinasi-fav__cat d-flex mb-1">
        {/* <Button className="destinasi-fav__category-2 d-flex align-items-center justify-content-center text-dark text-decoration-none mt-2 p-1">
          <Image className="destinasi-fav__search-img me-2" src="/search.svg" alt="search" />
          <div 
          onClick={handleApplyFilter}
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Semua"
          className="text__card"
          >
          Semua</div>
        </Button>

        <Button className="destinasi-fav__category-2 d-flex align-items-center justify-content-center text-dark text-decoration-none mt-2 p-1">
          <Image className="destinasi-fav__search-img me-2" src="/search.svg" alt="search" />
          <div 
          onClick={handleApplyFilter}
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Asia"
          className="text__card"
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
        </Button> */}

        <Link
          to="/"
          className={`${selectedCategory === "" ? "destinasi-fav__category-1 px-3" : "destinasi-fav__category-2 px-5 px-md-3"} d-flex align-items-center justify-content-center text-decoration-none mt-2 py-2 `}
          onClick={() => handleCategoryClick("")}
        >
          <Image className="destinasi-fav__search-img me-2" src="/search.svg" alt="search" />
          Semua
        </Link>

        <Link
          to="?cat=Asia"
          className={`${selectedCategory === "Asia" ? "destinasi-fav__category-1 px-3" : "destinasi-fav__category-2 px-5 px-md-3"} d-flex align-items-center justify-content-center text-decoration-none mt-2 py-2 `}
          onClick={() => handleCategoryClick("Asia")}
        >
          <Image className="destinasi-fav__search-img me-2" src="/search.svg" alt="search" />
          Asia
        </Link>

        <Link
          to="?cat=Amerika"
          className={`${selectedCategory === "Amerika" ? "destinasi-fav__category-1 px-3" : "destinasi-fav__category-2 px-5 px-md-3"} d-flex align-items-center justify-content-center text-decoration-none mt-2 py-2 `}
          onClick={() => handleCategoryClick("Amerika")}
        >
          <Image className="destinasi-fav__search-img me-2" src="/search.svg" alt="search" />
          Amerika
        </Link>
        <Link
          to="?cat=Australia"
          className={`${selectedCategory === "Australia" ? "destinasi-fav__category-1 px-3" : "destinasi-fav__category-2 px-5 px-md-3"} d-flex align-items-center justify-content-center text-decoration-none mt-2 py-2 `}
          onClick={() => handleCategoryClick("Australia")}
        >
          <Image className="destinasi-fav__search-img me-2" src="/search.svg" alt="search" />
          Australia
        </Link>
        <Link
          to="?cat=Eropa"
          className={`${selectedCategory === "Eropa" ? "destinasi-fav__category-1 px-3" : "destinasi-fav__category-2 px-5 px-md-3"} d-flex align-items-center justify-content-center text-decoration-none mt-2 py-2 `}
          onClick={() => handleCategoryClick("Eropa")}
        >
          <Image className="destinasi-fav__search-img me-2" src="/search.svg" alt="search" />
          Eropa
        </Link>
        <Link
          to="?cat=Afrika"
          className={`${selectedCategory === "Afrika" ? "destinasi-fav__category-1 px-3" : "destinasi-fav__category-2 px-5 px-md-3"} d-flex align-items-center justify-content-center text-decoration-none mt-2 py-2 `}
          onClick={() => handleCategoryClick("Afrika")}
        >
          <Image className="destinasi-fav__search-img me-2" src="/search.svg" alt="search" />
          Afrika
        </Link>
      </div>

      <Container>
        {/* <Row className="mb-5">
          <Col sm={12} md={6} lg={3} className="d-flex">
            <Card className="shadow" style={{ width: "95%" }}>
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
          </Col>

          <Col sm={12} md={6} lg={3} className="d-flex">
            <Card className="shadow" style={{ width: "95%", heigh: "70%" }}>
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
          </Col>

          <Col sm={12} md={6} lg={3} className="d-flex">
            <Card className="shadow" style={{ width: "95%" }}>
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
          </Col>

          <Col sm={12} md={6} lg={3} className="d-flex">
            <Card className="shadow" style={{ width: "95%" }}>
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
          </Col>
        </Row> */}

        <div className="destinasi-card d-flex justify-content-center flex-wrap flex-xl-nowrap mb-5 mx-auto">
          <Card className="col-5 col-md-4 col-xl-3 shadow mt-3">
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
          <Card className="col-5 col-md-4 col-xl-3 shadow ms-3 mt-3">
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

          <Card className="col-5 col-md-4 col-xl-3 shadow ms-3 mt-3">
            <Card.Img variant="top" className="p-2 pb-0" src="/frame154.svg" />
            <Card.Body className="pt-2">
              <Card.Text className="destinasi-card__text-1 fw-bold mb-1">Jakarta &rarr; Sydney</Card.Text>
              <Card.Text className="destinasi-card__text-2 fw-bold mb-1">AirAsia</Card.Text>
              <Card.Text className="destinasi-card__text-2 mb-1 text-black">5 - 25 Maret 2023</Card.Text>
              <Card.Text className="destinasi-card__text-1 mb-1 text-black">
                Mulai dari <span className="text-danger fw-bold">IDR 3.650.000</span>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="col-5 col-md-4 col-xl-3 shadow ms-3 mt-3">
            <Card.Img variant="top" className="p-2 pb-0" src="/frame154.svg" />
            <Card.Body className="pt-2">
              <Card.Text className="destinasi-card__text-1 fw-bold mb-1">Jakarta &rarr; Sydney</Card.Text>
              <Card.Text className="destinasi-card__text-2 fw-bold mb-1">AirAsia</Card.Text>
              <Card.Text className="destinasi-card__text-2 mb-1 text-black">5 - 25 Maret 2023</Card.Text>
              <Card.Text className="destinasi-card__text-1 mb-1 text-black">
                Mulai dari <span className="text-danger fw-bold">IDR 3.650.000</span>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </Container>
    </div>
  );
};

export default DestinasiFav;
