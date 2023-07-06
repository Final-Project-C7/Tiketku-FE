import React, { useState, useEffect } from "react";
import axios from "axios";

const SeatCustomer = (props) => {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [data, setData] = useState([]);

  const handleSeatSelect = (seat) => {
    if (selectedSeats.length < props.passenger) {
      if (selectedSeats.includes(seat)) {
        setSelectedSeats(selectedSeats.filter((s) => s !== seat));
      } else {
        setSelectedSeats([...selectedSeats, seat]);
      }
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    const headers = { Authorization: `Bearer ${token}` };
    axios
      .get("http://localhost:8000/api/v1/seats", { headers })
      .then((response) => {
        setData(response.data.data.seats);
      })
      .catch((error) => {
        // console.error(error);
      });
  }, []);

  const style = `
  .seat-picker {
    text-align: center;
  }
  
  .seat-grid {
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-top: 20px;
  }
  
  .seats {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    background-color: lightgray;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .selected {
    background-color: #73CA5C;
    color: white;
  }

  @media screen and (max-width: 576px) {
    .seat-grid {
      gap: 5px;
      margin-top: 10px;
    }

    .seat-picker__list {
      width: 15rem !important;
    }
  }
`;

  return (
    <>
      <style>{style}</style>
      <div className="seat-picker">
        <div className="d-flex mx-auto ms-md-1 mx-lg-auto justify-content-center">
          <div className="seat-picker__list row" style={{ width: "17rem" }}>
            <div className="col-2 col-sm-1 ms-sm-2">
              <p className="mb-0" style={{ color: "#8A8A8A" }}>
                A
              </p>
            </div>
            <div className="col-2 col-sm-1 ms-sm-3">
              <p className="mb-0" style={{ color: "#8A8A8A" }}>
                B
              </p>
            </div>
            <div className="col-2 col-sm-1 ms-sm-3 me-sm-3">
              <p className="mb-0" style={{ color: "#8A8A8A" }}>
                C
              </p>
            </div>
            <div className="col-2 col-sm-1 ms-sm-4">
              <p className="mb-0" style={{ color: "#8A8A8A" }}>
                D
              </p>
            </div>
            <div className="col-2 col-sm-1 ms-sm-3">
              <p className="mb-0" style={{ color: "#8A8A8A" }}>
                E
              </p>
            </div>
            <div className="col-2 col-sm-1 ms-sm-3">
              <p className="mb-0" style={{ color: "#8A8A8A" }}>
                F
              </p>
            </div>
          </div>
        </div>

        {data.map(
          (seat, index) =>
            index % 6 === 0 && (
              <div className="seat-grid" key={index}>
                {data.slice(index, index + 6).map((seat, seatIndex) => (
                  <React.Fragment key={seat.seat_number}>
                    {seatIndex === 3 && (
                      <p className="bg-secondary-subtle d-flex align-items-center justify-content-center rounded-1 px-1 mb-0" style={{ color: "#8A8A8A" }}>
                        {index / 6 + 1}
                      </p>
                    )}
                    <label className={`text-white-50 seats ${selectedSeats.includes(seat.seat_number) ? "selected" : ""}`} key={seat.seat_number}>
                      <input type="checkbox" value={seat.seat_number} checked={selectedSeats.includes(seat.seat_number)} onChange={() => handleSeatSelect(seat.seat_number)} hidden />
                    </label>
                  </React.Fragment>
                ))}
              </div>
            )
        )}
      </div>
    </>
  );
};

export default SeatCustomer;
