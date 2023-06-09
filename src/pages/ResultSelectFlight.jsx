import "./ResultSelectFlight.css";
import Button from "react-bootstrap/Button";
import SelectDay from "../components/Filter/SelectDay";
import FilterPrice from "../components/Filter/FIlterPrice";
import Filter from "../components/Filter/Filter";
import Result from "../components/Result";
import NavbarHomepage from "../components/NavbarHomepage";


function ResultSelectFlight() {
  return (
    <>
      <NavbarHomepage />
      <div className="container-fluid" id="select-flight">
        <p className="title">Pilih Penerbangan</p>

        <SelectDay />

        <div className="d-flex justify-content-end mb-3">
          <FilterPrice/>
        </div>

        <div className="row filter-loading">
          <div className="col-3 filter-l">
            <Filter />
          </div>
          <div className="col-9 text">
            <Result /> 
          </div>
        </div>
      </div>
    </>
  );
}

export default ResultSelectFlight;
