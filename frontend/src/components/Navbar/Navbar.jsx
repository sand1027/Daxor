import React, { useState, useEffect } from "react";
import { assets } from "../../components/assets/assets";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = ({
  setShowLogin,
  aboutUsRef,
  whatWeOfferRef,
  contactUsRef,
  faqRef,
  servicesRef,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    setIsLoggedIn(!!storedToken);
  }, []);

  const handleLogin = () => {
    setShowLogin(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    setIsProfileMenuOpen(false);
  };

  const handleLinkClick = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    setIsMenuOpen(false); // Close the menu after clicking on a link
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={`navbar ${isMenuOpen ? "active" : ""}`}>
      <Link to="/">
        <img src={assets.logo} alt="Logo" className="logo" />
      </Link>
      <ul className={`navbar-menu ${isMenuOpen ? "show" : ""}`}>
        <Link to="/">
          <li>Home</li>
        </Link>
        <li onClick={() => handleLinkClick(aboutUsRef)}>About Us</li>
        <li onClick={() => handleLinkClick(whatWeOfferRef)}>Client Feedback</li>
        <li onClick={() => handleLinkClick(servicesRef)}>Our Services</li>
        <li onClick={() => handleLinkClick(contactUsRef)}>Contact Us</li>
        <li onClick={() => handleLinkClick(faqRef)}>FAQ</li>
      </ul>

      {/* Login Section (Conditional Rendering) */}
      <div className="login-section">
        {isLoggedIn ? (
          // Profile Dropdown (visible only when logged in)
          <div className="profile-icon-container">
            <img
              src={assets.profile}
              alt="Profile"
              className="profile-icon"
              onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
            />
            {isProfileMenuOpen && (
              <div className="profile-menu">
                <Link to="/uploads">
                  <div className="menu-item">Updates</div>
                </Link>
                <Link to="/profile">
                  <div className="menu-item">Profile</div>
                </Link>
                <div className="menu-item" onClick={handleLogout}>
                  Logout
                </div>
              </div>
            )}
          </div>
        ) : (
          <button className="signin-btn" onClick={handleLogin}>
            Sign In
          </button>
        )}
      </div>

      <img
        src={assets.bars}
        alt="Menu Icon"
        className="menu-icon"
        onClick={toggleMenu}
      />
    </div>
  );
};

export default Navbar;
