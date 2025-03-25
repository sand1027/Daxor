import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import AdminLoginPopUp from "../../components/AdminLoginPopUp/AdminLoginPopUp";
import "./Navbar.css";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoginPopupOpen, setIsLoginPopupOpen] = useState(false);

  useEffect(() => {
    // Check localStorage to see if the user is logged in
    const loggedIn = localStorage.getItem("isLoggedIn") === "true";
    setIsLoggedIn(loggedIn);
  }, []);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
    setIsLoginPopupOpen(false);
  };

  const handleLogout = () => {
    // Clear localStorage and reset state
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("user");
    setIsLoggedIn(false);
  };

  const toggleLoginPopup = () => {
    setIsLoginPopupOpen(!isLoginPopupOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">Admin Panel</Link>
      </div>
      <div className="nav-item">
        {isLoggedIn ? (
          <>
            <FaUserCircle size={30} />
            <button onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <button onClick={toggleLoginPopup}>Login</button>
        )}
      </div>
      {isLoginPopupOpen && (
        <AdminLoginPopUp
          onClose={toggleLoginPopup}
          onLoginSuccess={handleLoginSuccess}
        />
      )}
    </nav>
  );
};

export default Navbar;
