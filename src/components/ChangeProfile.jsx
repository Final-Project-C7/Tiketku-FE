import React, { useState } from "react";
import { Image, Button, Container, Form, Modal } from "react-bootstrap";
import photoChange from '/photochange.png';// Ubah path file gambar jika perlu
import axios from "axios";
import { useParams } from "react-router-dom";

function ChangeProfile({ user }) {
  const [showWaitModal, setShowWaitModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [showFullImage, setShowFullImage] = useState(false);
  const [updatedUser, setUpdatedUser] = useState({});


  const saveProfile = async () => {
    try {
      const token = localStorage.getItem("token");
      const formData = new FormData();

      // Add updated user data to FormData
      Object.keys(updatedUser).forEach((key) => {
        formData.append(key, updatedUser[key]);
      });

      setShowWaitModal(true);

      const response = await axios.put(
        "http://localhost:8000/api/v1/user/update",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      // Handle the response if needed
      console.log(response.data);

      setShowWaitModal(false);
      setShowUpdateModal(true);

      // Reset updatedUser state to an empty object
      setUpdatedUser({});
    } catch (error) {
      // Handle error if update fails
      console.log("Error:", error);
    }
  };

  const closeModalAndRefresh = () => {
    setShowUpdateModal(false);
    window.location.reload();
  };

  const openFullImage = () => {
    setShowFullImage(true);
  };
  const closeFullImage = () => {
    setShowFullImage(false);
  };

  return (
    <div className="border rounded-1 p-4 mb-4">
      <h4 className="fw-bold">Ubah Data Profil</h4>
      <Form className="mt-4">
        <div className="d-flex align-items-start bg rounded-top-4 py-3" style={{ background: "#A06ECE" }}>
          <h5 className="me-auto text-white ms-4 mb-0">Data Diri</h5>
        </div>
        <div className="mx-4 mt-3">
          <div className="d-flex align-items-center justify-content-center mb-3">
            {/* Mengubah logika pengecekan gambar */}
            {updatedUser.image ? (
              <img
                src={URL.createObjectURL(updatedUser.image)}
                alt="Profile"
                onClick={openFullImage}
                className="rounded-circle"
                style={{
                  width: "250px",
                  height: "250px",
                  objectFit: "cover",
                  cursor: "pointer",
                }}
              />
            ) : (
              <img
                src={user && user.image ? user.image : ""}
                alt="Profile"
                onClick={openFullImage}
                className="rounded-circle"
                style={{
                  width: "250px",
                  height: "250px",
                  objectFit: "cover",
                  cursor: "pointer",
                }}
              />
            )}
          </div>
          <div
            className="mx-4 mt-3 pb-3"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <div
              className="border rounded-1 border-0 mb-2 p-2"
              style={{
                width: "30px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "30px",
                marginTop: "-10px",
              }}
            >
              <label htmlFor="logo-input">
                <img
                  id="logo-image"
                  className="logo"
                  src={photoChange}
                  alt="Logo"
                  style={{
                    width: "25px",
                    height: "25px",
                    cursor: "pointer",
                  }}
                />
                <input
                  id="logo-input"
                  className="account__input col-12 border-0"
                  type="file"
                  accept="image/png, image/jpg, image/jpeg, image/gif"
                  style={{ display: "none" }}
                  onChange={(e) =>
                    setUpdatedUser((prevUser) => ({
                      ...prevUser,
                      image: e.target.files[0],
                    }))
                  }
                />
              </label>
            </div>
          </div>

          <p className="fw-bold mb-1" style={{ color: "#4B1979" }}>
            Nama Lengkap
          </p>
          <div className="border rounded-1 border-2 mb-2 p-2">
            <input
              className="account__input col-12 border-0"
              type="text"
              defaultValue={user ? user.name : ""}
              onChange={(e) =>
                setUpdatedUser((prevUser) => ({
                  ...prevUser,
                  name: e.target.value,
                }))
              }
            />
          </div>
        </div>
        <div className="mx-4 mt-3">
          <p className="fw-bold mb-1" style={{ color: "#4B1979" }}>
            Nomor Telepon
          </p>
          <div className="border rounded-1 border-2 mb-2 p-2">
            <input
              className="account__input col-12 border-0"
              type="text"
              defaultValue={user ? user.phoneNumber : ""}
              onChange={(e) =>
                setUpdatedUser((prevUser) => ({
                  ...prevUser,
                  phoneNumber: e.target.value,
                }))
              }
            />
          </div>
        </div>
        <div className="mx-4 mt-3 pb-3">
          <p className="fw-bold mb-1" style={{ color: "#4B1979" }}>
            Email
          </p>
          <div className="border rounded-1 border-2 mb-2 p-2">
            <input
              className="account__input col-12 border-0"
              type="text"
              defaultValue={user ? user.email : ""}
              onChange={(e) =>
                setUpdatedUser((prevUser) => ({
                  ...prevUser,
                  email: e.target.value,
                }))
              }
            />
          </div>
        </div>

        <Button className="save-btn-akun offset-5 col-5" onClick={saveProfile}>
          Simpan
        </Button>
      </Form>

      {/* Tambahkan modal untuk menampilkan informasi "Tunggu" */}
      <Modal show={showWaitModal} onHide={() => setShowWaitModal(false)}>
        <Modal.Body>Harap tunggu...</Modal.Body>
      </Modal>

      {/* Tambahkan modal untuk menampilkan informasi "Update berhasil" */}
      <Modal show={showUpdateModal} onHide={closeModalAndRefresh}>
        <Modal.Header closeButton>
          <Modal.Title>Update Berhasil</Modal.Title>
        </Modal.Header>
        <Modal.Body>Profil telah berhasil diperbarui.</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={closeModalAndRefresh}>
            Tutup
          </Button>
        </Modal.Footer>
      </Modal>
      

      {/* Tambahkan modal untuk menampilkan gambar secara penuh */}
      <Modal show={showFullImage} onHide={() => setShowFullImage(false)}>
        <Modal.Body>
          {user && user.image && (
            <img
              src={user.image}
              alt="Full Profile"
              className="rounded-circle"
              style={{
                width: "100%",
                height: "auto",
                objectFit: "contain",
              }}
            />
          )}
        </Modal.Body>
        <Modal.Footer style={{ padding: "0px", background: "#7126b5 " }}>
            <Button
              style={{ width: "20%", background: "#e42c64" }}
              variant="secondary"
              onClick={closeFullImage}
            >
              Close
            </Button>
          </Modal.Footer>
      </Modal>
      
    </div>
  );
}

export default ChangeProfile;
