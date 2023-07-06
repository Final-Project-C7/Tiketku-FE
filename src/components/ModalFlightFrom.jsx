import React, { useState, useEffect } from "react";
import { Button, Modal, Image, Form } from "react-bootstrap";
import axios from "axios";

function ModalFlightFrom(props) {
  const [show, setShow] = useState(false);
  const [options, setOptions] = useState([]);
  const [recentSearches, setRecentSearches] = useState([]);
  const [filteredOptions, setFilteredOptions] = useState([]);

  const handleClose = () => {
    if (props.departure.trim().length > 0 && !recentSearches.includes(props.departure)) {
      const updatedSearches = [...recentSearches, props.departure];
      setRecentSearches(updatedSearches);
      localStorage.setItem("recentSearches", JSON.stringify(updatedSearches));
    }
    setShow(false);
  };

  const handleShow = () => setShow(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    const selectedValue = e.target.querySelector("input").value.trim();
    props.setDeparture(selectedValue);
    handleClose();
  };

  const handleInputChange = (e) => {
    const inputValue = e.target.value.trim();
    const filteredOptions = options.filter((option) => option.label.toLowerCase().includes(inputValue.toLowerCase()));
    setFilteredOptions(filteredOptions);
  };

  useEffect(() => {
    const fetchOptions = async () => {
      try {
        const response = await axios.get("https://c7-tiketku.up.railway.app/api/v1/airports"); // Replace with your API endpoint
        const data = response.data.data.airport;

        const transformedOptions = data.map((option) => ({
          value: option.city,
          label: option.city,
        }));

        setOptions(transformedOptions);
        setFilteredOptions(transformedOptions);
      } catch (error) {
        console.error("Error fetching options:", error);
      }
    };

    fetchOptions();

    // Retrieve recent searches from localStorage when the component mounts
    const storedRecentSearches = localStorage.getItem("recentSearches");
    if (storedRecentSearches) {
      setRecentSearches(JSON.parse(storedRecentSearches));
    }
  }, []);

  const handleRecentSearch = (search) => {
    props.setDeparture(search);
    handleClose();
  };

  const handleDeleteRecentSearch = (search) => {
    const updatedSearches = recentSearches.filter((item) => item !== search);
    setRecentSearches(updatedSearches);
    localStorage.setItem("recentSearches", JSON.stringify(updatedSearches));
  };

  const handleOptionSelect = (option) => {
    props.setDeparture(option.value);
    // Komentari handleClose() untuk mencegah penutupan modal
    // handleClose();
  };

  const renderOptions = () => {
    if (filteredOptions.length > 0 && props.departure.trim().length > 0) {
      return filteredOptions.map((option) => (
        <button
          key={option.value}
          className="dropdown-option"
          onClick={() => handleOptionSelect(option)} // Menggunakan handleOptionSelect
        >
          {option.label}
        </button>
      ));
    }
    return <option value="" disabled></option>;
  };

  const renderRecentSearches = () => {
    if (recentSearches.length > 0) {
      return recentSearches.map((search, index) => (
        <div key={index} className="border-bottom border-2 d-flex mt-2">
          <Button variant="link" className="history__text me-auto ps-0" onClick={() => handleRecentSearch(search)}>
            {search}
          </Button>
          <Button variant="link" className="delete-btn border-0 pe-0" onClick={() => handleDeleteRecentSearch(search)}>
            <Image className="delete-btn__img" src="/close-button.svg" />
          </Button>
        </div>
      ));
    }
    return <p className="text-muted">Tidak ada pencarian terkini.</p>;
  };

  // Clear recent searches from state and localStorage
  const clearRecentSearches = () => {
    setRecentSearches([]);
    localStorage.removeItem("recentSearches");
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

    .delete-btn:hover,
    delete-btn:active {
      background-color: transparent !important;
    }

    .delete-btn__img {
      width: 12px;
      height: 12px;
    }

    .modal-flight-from__input:active,
    .modal-flight-from__input:focus {
      outline: none !important;
    }

    .dropdown-option {
      background: none;
      border: none;
      padding: 0.25rem 0.5rem;
      cursor: pointer;
      width: 100%;
      text-align: left;
    }
  
    .dropdown-option:hover {
      background-color: #f8f9fa;
    }
  
  `;

  return (
    <>
      <style>{style}</style>
      <div className="col-sm-12 col-md-7 border-bottom text-dark fw-bold pb-3 ms-sm-3 ms-md-4 ms-xl-0 me-5" onClick={handleShow} style={{ cursor: "pointer" }}>
        <input className="border-0 bg-transparent" type="search" aria-label="Search" value={props.departure} onChange={(e) => props.setDeparture(e.target.value)} disabled hidden />
        {props.departure === "" ? "Jakarta" : props.departure}
      </div>

      <Modal size="lg" show={show} onHide={handleClose} centered>
        <Modal.Body>
          <div className="d-flex align-items-center">
            <Form className="modal-search d-flex py-1 px-1 rounded-2 col-11 me-auto" onSubmit={handleSubmit}>
              <Button className="delete-btn bg-transparent border-0" type="submit" onClick={handleClose}>
                <Image className="modal-search__img" src="/search.svg" alt="search" />
              </Button>
              <input className="modal-flight-from__input bg-transparent border-0 col-11" type="text" value={props.departure} onChange={(e) => props.setDeparture(e.target.value)} onKeyUp={handleInputChange} list="options" />
            </Form>
            <Button className="delete-btn bg-transparent border-0" onClick={handleClose}>
              <Image className="close-btn__img" src="/close-button.svg" />
            </Button>
          </div>
          <div className="d-flex mt-4">
            <h5 className="me-auto">Pencarian Terkini</h5>
            <div className="text-danger" onClick={clearRecentSearches} style={{ cursor: "pointer" }}>
              Hapus
            </div>
          </div>
          {renderRecentSearches()}
          {renderOptions()}
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalFlightFrom;
