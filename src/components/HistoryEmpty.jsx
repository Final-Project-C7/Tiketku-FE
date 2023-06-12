import { Button } from "react-bootstrap";
import Empty from "/Cart_shopping_list.svg";

import "./Riwayat.css";

function HistoryEmpty() {
    return (
        <>
        <div className="d-flex justify-content-center mt-4">
        <img src={Empty}/>
        </div>
        <p className="mt-4 empty justify-content-center text-center mt-4">
            Oops! Riwayat pesanan kosong!
            <br />
            <span>Anda belum melakukan pemesanan penerbangan</span>
        </p>
        <div className="d-flex justify-content-center">
        <Button className="history-empty border-0 align-items-center mt-4">Cari Penerbangan</Button>
        </div>
        </>
    );
}

export default HistoryEmpty;