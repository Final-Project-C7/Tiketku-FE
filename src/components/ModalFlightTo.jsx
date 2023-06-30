import React, { useState, useEffect } from "react";
import { Button, Modal, Image, Form } from "react-bootstrap";
import axios from "axios";

function ModalFlightTo(props) {
  const [show, setShow] = useState(false);
  const [options, setOptions] = useState([]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  const style = `
  .modal-search {
    border: 1px solid #D0D0D0;
  }

  .modal-search input:focus {
    outline-style: none !important;
  }

  .modal-search__img {
    width: 20px;
    height: 20px;
    opacity: 0.4;
  }

  .close-btn__img {
    width: 18px;
    height: 18px;
  }

  .history__text {
    color: #151515;
    font-weight: 500;
  }

  .delete-btn:hover, delete-btn:active {
    background-color: transparent !important;
  }

  .delete-btn__img {
    width: 12px;
    height: 12px;
  }

  .modal-flight-from__select:active, .modal-flight-from__select:focus {
    outline: none !important;
  }
  `;

  useEffect(() => {
    const fetchOptions = async () => {
      try {
        const response = await axios.get("https://c7-tiketku.up.railway.app/api/v1/airports"); // Replace with your API endpoint
        const data = response.data.data.airport;
        console.log(data);

        const transformedOptions = data.map((option) => ({
          value: option.city,
          label: option.city,
        }));

        setOptions(transformedOptions);
      } catch (error) {
        console.error("Error fetching options:", error);
      }
    };

    fetchOptions();
  }, []);

  return (
    <>
      <style>{style}</style>
      <div className="col-sm-12 col-md-7 border-bottom text-dark fw-bold pb-3 ms-sm-3 ms-md-4 ms-xl-0 ms-xxl-4 me-5" onClick={handleShow} style={{ cursor: "pointer" }}>
        <input className="border-0 bg-transparent" type="search" aria-label="Search" value={props.arrival} onChange={(e) => props.setArrival(e.target.value)} disabled hidden />
        {props.arrival === "" ? "Surabaya" : props.arrival}
      </div>
      <Modal size="lg" show={show} onHide={handleClose} centered>
        <Modal.Body>
          <div className="d-flex align-items-center">
            <Form className="modal-search d-flex py-1 px-1 rounded-2 col-11 me-auto" onSubmit={handleSubmit}>
              <Button className="delete-btn bg-transparent border-0" type="submit" onClick={handleClose}>
                <Image className="modal-search__img " src="/search.svg" alt="search" />
              </Button>
              <select className="modal-flight-from__select bg-transparent border-0 col-11" value={props.arrival} onChange={(e) => props.setArrival(e.target.value)}>
                {options.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </Form>
            <Button className="delete-btn bg-transparent border-0" onClick={handleClose}>
              <Image className="close-btn__img" src="/close-button.svg" />
            </Button>
          </div>
          <div className="d-flex mt-4">
            <h5 className="me-auto">Pencarian Terkini</h5>
            <h5 className="text-danger">Hapus</h5>
          </div>
          <div className="d-flex align-items-center border-bottom mt-3">
            <p className="history__text me-auto">Jakarta</p>
            <Button className="delete-btn bg-transparent border-0">
              <Image className="delete-btn__img" src="close-button.svg" alt="delete icon" />
            </Button>
          </div>
          <div className="d-flex align-items-center border-bottom mt-3">
            <p className="history__text me-auto">Jakarta</p>
            <Button className="delete-btn bg-transparent border-0">
              <Image className="delete-btn__img" src="close-button.svg" alt="delete icon" />
            </Button>
          </div>
          <div className="d-flex align-items-center border-bottom mt-3">
            <p className="history__text me-auto">Jakarta</p>
            <Button className="delete-btn bg-transparent border-0">
              <Image className="delete-btn__img" src="close-button.svg" alt="delete icon" />
            </Button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalFlightTo;
