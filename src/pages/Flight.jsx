import "./Flight.css";
import Button from "react-bootstrap/Button";
import SelectDay from "../components/Filter/SelectDay";
import Filter from "../components/Filter/Filter";
import Loading from "../components/Loading";
import NavbarHomepage from "../components/NavbarHomepage";
import Notfound from "../components/Notfound";
import Result from "../components/Result";
import SoldoutComponent from "../components/Soldout";
import MyModal from "../components/Beranda/MyModal";

function Flight() {
  return (
    <>
      <NavbarHomepage />
      <div className="container-fluid" id="select-flight">
        <h4 className="title">Pilih Penerbangan</h4>
        <SelectDay />
        <div className="d-flex justify-content-end">
          <MyModal/>
        </div>
        <div className="row filter-loading mt-4">
          <div className="col-3 filter-l">
            <Filter />
          </div>
          <div className="col-9 text-center mb-5">
            <Loading />
          </div>
        </div>
      </div>
    </>
  );
}

export default Flight;
