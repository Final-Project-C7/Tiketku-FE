import "./SelectFlight.css";
import Button from "react-bootstrap/Button";
import SelectDay from "../components/Filter/SelectDay";
import FilterPrice from "../components/Filter/FIlterPrice";
import Filter from "../components/Filter/Filter";
import Loading from "../components/Loading";
import NavbarHomepage from "../components/NavbarHomepage";

function SelectFlight() {
  return (
    <>
      <NavbarHomepage />
      <div className="container-fluid" id="select-flight">
        <p className="title">Pilih Penerbangan</p>

        <SelectDay />

        <div className="d-flex justify-content-end">
          <Button className="d-flex align-items-center btn-filter mt-3">
            <FilterPrice />
          </Button>
        </div>

        <div className="row filter-loading">
          <div className="col-3 filter-l">
            <Filter />
          </div>
          <div className="col-9 text-center">
            <Loading />
          </div>
        </div>
      </div>
    </>
  );
}

export default SelectFlight;
