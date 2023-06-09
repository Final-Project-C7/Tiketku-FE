import "../pages/SelectFlight.css";
import soldout from "/ilustration_engine.svg";

function SoldoutComponent() {
    return (
        <>
        <img src={soldout} />
        <p className="mt-4 sold-out">
            Maaf, Tiket terjual habis
            <br />
            <span>Coba cari perjalanan lainnya</span>
        </p>
        </>
    );
}

export default SoldoutComponent;