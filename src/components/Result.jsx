import "../pages/ResultSelectFlight.css";
import { Card, Button, Row, Col } from "react-bootstrap";
import loading from "/Airlane.png";
import koper from "/Koper.svg";
import panah from "/expand_circle_down.svg";

function result() {
  return (
    <Card style={{ width: "100%" }} className="filter-2">
      <Card.Body>
        <Card.Title className="title">
          <Col className="col-12 d-flex gap-2">
            <div>
            <Card.Img
              variant="top"
              src={loading}
              style={{ width: "24px", marginRight: "10px" }}
            />
            Jet Air - Economy
            </div>
            <div className="float-right">
            <Card.Img
              variant="top"
              src={panah}
              style={{ width: "30px", marginLeft: "500px" }}
            />
            </div>
          </Col>
        </Card.Title>
        <Row
          className="d-flex justify-content-between"
          style={{ marginLeft: "20px", marginTop: 0 }}
        >
          <Col className="col-8 d-flex gap-3 align-items-center">
            <div>
              <Card.Text className="fw-bold mb-1"> 07:00 </Card.Text>
              <Card.Text className="fw-bold mb-1"> JKT </Card.Text>
            </div>
            <div style={{ width: "100%" }}>
              <Card.Text
                className="title-departure text-center"
                style={{ marginBottom: "1px" }}
              >
                4h 0m
              </Card.Text>
              <hr
                align="center"
                color="green"
                size="2"
                width="100%"
                style={{ margin: 0 }}
              />
              <Card.Text className="title-departure text-center">
                Direct
              </Card.Text>
            </div>
            <div className="d-flex gap-3 align-items-center">
              <div>
                <Card.Text className="fw-bold mb-1"> 11:00 </Card.Text>
                <Card.Text className="fw-bold mb-1"> MLB </Card.Text>
              </div>
              <Card.Img
                variant="top"
                src={koper}
                style={{ width: "24px", marginRight: "10px" }}
              />
            </div>
          </Col>
          <Col className="col-4 d-flex flex-column align-items-end">
            <Card.Text
              className="fw-bold mb-1"
              style={{ color: "#7126B5", fontWeight: "bold", fontSize: "16px" }}
            >
              IDR 4.950.000{" "}
            </Card.Text>
            <Button className="col-3 py-1.5" variant="primary">
              Pilih
            </Button>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}

export default result;
