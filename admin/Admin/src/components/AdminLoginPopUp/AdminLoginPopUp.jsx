import React, { useState } from "react";
import axios from "axios";
import { FaUserCircle } from "react-icons/fa";
import "./AdminLoginPopUp.css";

const AdminLoginPopUp = ({ onClose, onLoginSuccess }) => {
  const [loginForm, setLoginForm] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");

  const handleLoginChange = (e) => {
    setLoginForm({ ...loginForm, [e.target.name]: e.target.value });
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:4000/admin/login",
        loginForm
      );
      setMessage(`Logged in as: ${response.data.admin.name}`);
      onClose(); // Close login popup

      // Store login status and user info in localStorage
      localStorage.setItem("isLoggedIn", true);
      localStorage.setItem("user", JSON.stringify(response.data.admin));

      // Inform Navbar of successful login
      onLoginSuccess();
    } catch (error) {
      setMessage(error.response.data.message);
    }
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h2>Login</h2>
        <form onSubmit={handleLoginSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={loginForm.email}
            onChange={handleLoginChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={loginForm.password}
            onChange={handleLoginChange}
            required
          />
          <button type="submit">Login</button>
        </form>
        {message && <p className="message">{message}</p>}
      </div>
    </div>
  );
};

export default AdminLoginPopUp;
