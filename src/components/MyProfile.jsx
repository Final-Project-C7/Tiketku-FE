import React from "react";

function MyProfile({ user }) {
  return (
    <div className="profile">
      <h4 className="fw-bold" style={{ fontSize: "25px" }}>My Profile</h4>
      {user && (
        <div className="prof">
          <img 
          src={user.image} 
          alt="Profile"
          style={{
            width: "300px",
            height: "300px",
            borderRadius: "50%",
            objectFit: "cover",
            }}
          />
          <p className="fw-bold mt-3" style={{ fontSize: "20px" }}>{user.name}</p>
          <p className="fw-bold" style={{ fontSize: "16px" }}>{user.phoneNumber}</p>
          <p className="fw-bold" style={{ fontSize: "16px" }}>{user.email}</p>
          {/* Tambahkan informasi profil lainnya sesuai kebutuhan */}
        </div>
      )}
    </div>
  );
}

export default MyProfile;
