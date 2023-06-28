import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Image, Button, Container, Form, Modal } from "react-bootstrap";
import NavbarUser from "../components/NavbarUser";
import "./Akun.css";

function Akun() {
  const [user, setUser] = useState(null);
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false); // State untuk menampilkan modal update
  const [updatedUser, setUpdatedUser] = useState({}); // Set initial value to empty object

  useEffect(() => {
    // Fungsi untuk mengambil data pengguna berdasarkan token
    const getUserData = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get("http://localhost:8000/api/v1/user/user-info", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUser(response.data.data.user);
      } catch (error) {
        // Handle error jika terjadi masalah saat mengambil data pengguna
        console.log("Error:", error);
      }
    };

    getUserData();
  }, []);

  const saveProfile = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.put("http://localhost:8000/api/v1/user/update", updatedUser, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      // Handle the response if needed
      console.log(response.data);

      // Update the user state with the updated user data

      setShowUpdateModal(true);
    } catch (error) {
      // Handle error if update fails
      console.log("Error:", error);
    }
  };

  const logoutHandler = () => {
    // Menampilkan modal konfirmasi saat logout
    setShowConfirmationModal(true);
  };

  const confirmLogoutHandler = () => {
    // Hapus token atau informasi login lainnya dari localStorage
    localStorage.removeItem("token");

    // Lakukan tindakan lain yang diperlukan setelah logout, seperti mengarahkan pengguna ke halaman login
    window.location.href = "/login";
  };

  const cancelLogoutHandler = () => {
    // Menutup modal konfirmasi tanpa melakukan logout
    setShowConfirmationModal(false);
  };
  return (
    <>
      <NavbarUser />

      <div className="border-bottom shadow-sm">
        <Container className="akun">
          <div className="d-flex">
            <h4 className="fw-bold"> Akun</h4>
          </div>
          <div className="akun-top d-flex align-items-center mx-2 mb-4">
            <div className="akun-top__alert col-12 text-white d-flex px-3 py-2 mt-2">
              <Link to="/">
                <Image className="akun-top__arrow-left my-2" src="./arrow-left.png" alt="arrow left" />
              </Link>
              <h5 className="ms-4 pt-2">Beranda</h5>
            </div>
          </div>
        </Container>
      </div>
      <Container>
        <div className="filter-akun row mt-4 mx-auto" style={{ marginLeft: "120px" }}>
          <div className="col-5">
            <div className="account-list p-3 pb-1 mb-3 rounded-3">
              <div className="d-flex border-bottom pb-3">
                <Image className="me-3" src="fi_edit-3.svg" />
                <p className="mb-0">Ubah Profil</p>
              </div>
            </div>
            <div className="account-list p-3 pb-1 mb-3 rounded-3">
              <div className="d-flex border-bottom pb-3">
                <Image className="me-3" src="fi_settings.svg" />
                <p className="mb-0">Pengaturan Akun</p>
              </div>
            </div>

            <div onClick={logoutHandler} className="account-list p-3 pb-1 mb-3 rounded-3">
              <div className="d-flex border-bottom pb-3">
                <Image className="me-3" src="fi_log-out.svg" />
                <p className="mb-0">Keluar</p>
              </div>
            </div>
          </div>
          <div className="col-7">
            <div className="border rounded-1 p-4 mb-4">
              <h4 className="fw-bold">Ubah Data Profil</h4>
              <Form className="mt-4">
                <div className="d-flex align-items-start bg rounded-top-4 py-3 " style={{ background: "#A06ECE" }}>
                  <h5 className="me-auto text-white ms-4 mb-0">Data Diri</h5>
                </div>
                <div className="mx-4 mt-3">
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
                      type="email"
                      defaultValue={user ? user.email : ""}
                      readOnly
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
            </div>
          </div>
        </div>
        <Modal show={showConfirmationModal} onHide={cancelLogoutHandler} centered>
          <Modal.Body>
            <p className="mb-3">Are you sure you want to logout?</p>
            <div className="d-flex justify-content-end gap-2">
              <Button variant="secondary" onClick={cancelLogoutHandler}>
                Cancel
              </Button>
              <Button variant="primary" className="logout-button" onClick={confirmLogoutHandler}>
                Logout
              </Button>
            </div>
          </Modal.Body>
        </Modal>

        <Modal show={showUpdateModal} onHide={() => setShowUpdateModal(false)} centered>
          <Modal.Body className="text-center">
            {" "}
            {/* Tambahkan kelas CSS text-center */}
            <p className="mb-0 mt-3 fw-bold" style={{ fontSize: "17px" }}>
              Update successful
            </p>
            <div className="d-flex justify-content-end gap-2">
              <Button
                variant="primary"
                onClick={() => setShowUpdateModal(false)}
                style={{
                  width: "100px",
                  background: "#ffffff",
                  color: "#7126b5",
                  borderColor: "#ffffff",
                  fontWeight: "bold",
                }}
              >
                OK
              </Button>
            </div>
          </Modal.Body>
        </Modal>
      </Container>
    </>
  );
}

export default Akun;
