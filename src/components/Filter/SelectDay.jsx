import "../../pages/SelectFlight.css";
import arrowleft from "/fi_arrow-left.svg";
import Button from "react-bootstrap/Button";

function SelectDay() {
  return (
    <>
    <div className="container-fluid">
      <div className="row search-flight">
        <div className="col-12 col-md-8 lg-8 title-search d-flex align-items-center mb-3">
          <img
            src={arrowleft}
            alt="arrow-left"
            style={{
              width: "24px",
              filter: "invert(100%)",
            }}
          />
          <p className="ms-3 mt-3">JKT &gt; MLB -2 Penumpang - Economy</p>
        </div>
        <div className="col-12 col-md-4">
          <Button variant="s btn-search" className="">
            Ubah Pencarian
          </Button>
        </div>
      </div>

      <div className="row">
        <div className="col-12 table-responsive d-flex justify-content-center btn-flight">
          <Button variant="secondary" className="select-day__btn">
            <p>
              Selasa <span>01/03/2023</span>
            </p>
          </Button>
          <hr className="vertical-divider" />
          <Button variant="secondary" className="select-day__btn ">
            <p>
              Rabu <span>02/03/2023</span>{" "}
            </p>
          </Button>
          <hr className="vertical-divider" />
          <Button variant="secondary" className="select-day__btn">
            <p>
              Kamis <span>03/03/2023</span>{" "}
            </p>
          </Button>
          <hr className="vertical-divider" />
          <Button variant="secondary" className="select-day__btn">
            <p>
              Jumat <span>04/03/2023</span>{" "}
            </p>
          </Button>
          <hr className="vertical-divider" />
          <Button variant="secondary" className="select-day__btn">
            <p>
              Sabtu <span>05/03/2023</span>{" "}
            </p>
          </Button>
          <hr className="vertical-divider" />
          <Button variant="secondary" className="select-day__btn">
            <p>
              Minggu <span>06/03/2023</span>{" "}
            </p>
          </Button>
          <hr className="vertical-divider" />
          <Button variant="secondary" className="select-day__btn">
            <p>
              Senin <span>07/03/2023</span>{" "}
            </p>
          </Button>
          <hr className="vertical-divider " />
          <Button variant="secondary" className="select-day__btn">
            <p>
              Selasa <span>08/03/2023</span>{" "}
            </p>
          </Button>
        </div>
        <hr className="horizontal-divider mt-3" />
      </div>
      </div>
    </>
  );
}

export default SelectDay;