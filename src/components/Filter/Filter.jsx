import "../../pages/SelectFlight.css";
import fibox from "/fi_box.svg";
import chevronright from "/fi_chevron-right.svg";
import heart from "/fi_heart.svg";
import dollar from "/fi_dollar-sign.svg";

function Filter() {
  return (
    <>
      <p className="title-filter">Filter</p>
      <div className="transit d-flex align-items-center">
        <img src={fibox} alt="Image" className="mr-2" />
        <p className="m-auto">Transit</p>
        <img className="arrow-right" src={chevronright} alt="Image" />
      </div>
      <hr className="divider-filter" />
      <div className="transit d-flex align-items-center">
        <img src={heart} alt="Image" className="mr-2" />
        <p className="m-auto">Fasilitas</p>
        <img src={chevronright} alt="Image" className="arrow-right" />
      </div>
      <hr className="divider-filter" />
      <div className="transit d-flex align-items-center">
        <img src={dollar} alt="Image" className="mr-2" />
        <p className="m-auto">Harga</p>
        <img src={chevronright} alt="Image" className="arrow-right" />
      </div>
    </>
  );
}

export default Filter;
