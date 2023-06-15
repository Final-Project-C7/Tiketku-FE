import "./SelectFlight.css";
import Button from "react-bootstrap/Button";
import SelectDay from "../components/Filter/SelectDay";
import FilterPrice from "../components/Filter/FIlterPrice";
import Filter from "../components/Filter/Filter";
import Loading from "../components/Loading";
import NavbarHomepage from "../components/NavbarHomepage";
import Notfound from "../components/Notfound";
import Result from "../components/Result";
import SoldoutComponent from "../components/Soldout";

function SelectFlight() {
  return (
    <>
      <NavbarHomepage />
      <div className="container-fluid" id="select-flight">
        <p className="title">Pilih Penerbangan</p>

        <SelectDay />

        <div className="d-flex justify-content-end">
          {/* <FilterPrice /> */}
        </div>

        <div className="row filter-loading mt-4">
          <div className="col-3 filter-l">
            <Filter />
          </div>
          <div className="col-9 text-center mb-5">
            <SoldoutComponent />
          </div>
        </div>
      </div>
    </>
  );
}

export default SelectFlight;
