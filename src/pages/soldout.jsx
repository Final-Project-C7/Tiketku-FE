import "./soldout.css";
import SelectDay from "../components/Filter/SelectDay";
import NavbarHomepage from "../components/NavbarHomepage";
import soldout from "/ilustration_engine.svg";

function Soldout() {
    return (
        <>
        <NavbarHomepage />
        <div className="container-fluid" id="sold-out">
        <p className="title">Detail Penerbangan</p>

        <SelectDay />

        <div className="d-flex justify-content-center mt-4">
            <img src={soldout}/>
            </div>
        <div className="d-flex justify-content-center text-center mt-4">
            <p className="sold-out">
                Maaf, Tiket terjual habis
                <br />
                <span>Coba cari perjalanan lainnya</span>
            </p>
        </div>
        </div>
        </>
    )
}
export default Soldout;