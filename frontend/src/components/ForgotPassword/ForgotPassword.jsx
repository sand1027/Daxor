import React, { useState } from "react";
import axios from "axios";
import LoadingSpinner from "../Loading/LoadingComponent"; // Import the LoadingSpinner component
import "./ForgotPassword.css"; // Import the CSS for styling
import { Link } from "react-router-dom";
import DummyNav from "../DummyNav/DummyNav";
import Footer from "../Footer/Footer";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [stage, setStage] = useState(1);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false); // State for loading indicator
  const [passwordChanged, setPasswordChanged] = useState(false); // State to track password change success
  const [errorToast, setErrorToast] = useState(""); // State for error message as toast

  const handleSendOTP = async () => {
    try {
      setLoading(true); // Activate loading indicator
      const response = await axios.post(
        "http://localhost:4000/forgot-password",
        { email }
      );
      setMessage(response.data.message);
      setStage(2); // Move to next stage
    } catch (error) {
      setErrorToast(error.response?.data?.error || "An error occurred");
    } finally {
      setLoading(false); // Deactivate loading indicator
    }
  };

  const handleVerifyOTP = async () => {
    try {
      setLoading(true); // Activate loading indicator
      const response = await axios.post("http://localhost:4000/verify-otp", {
        email,
        otp,
      });
      setMessage(response.data.message);
      setStage(3); // Move to next stage
    } catch (error) {
      setErrorToast(error.response?.data?.error || "An error occurred");
    } finally {
      setLoading(false); // Deactivate loading indicator
    }
  };

  const handleResetPassword = async () => {
    try {
      setLoading(true); // Activate loading indicator
      const response = await axios.post(
        "http://localhost:4000/reset-password",
        {
          email,
          newPassword,
        }
      );
      setMessage(response.data.message);
      setPasswordChanged(true); // Set password changed state
    } catch (error) {
      setErrorToast(error.response?.data?.error || "An error occurred");
    } finally {
      setLoading(false); // Deactivate loading indicator
    }
  };

  const renderStage = () => {
    switch (stage) {
      case 1:
        return (
          <div className="forgot-password-container">
            <h2>Forgot Password</h2>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button onClick={handleSendOTP}>Send OTP</button>
          </div>
        );
      case 2:
        return (
          <div className="forgot-password-container">
            <h2>Verify OTP</h2>
            <p>OTP has been sent to your email. Please enter it below:</p>
            <input
              type="text"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />
            <button onClick={handleVerifyOTP}>Verify OTP</button>
          </div>
        );
      case 3:
        return (
          <div className="forgot-password-container">
            <h2>Reset Password</h2>
            <p>Enter your new password:</p>
            <input
              type="password"
              placeholder="Enter new password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
            <button onClick={handleResetPassword}>Reset Password</button>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <DummyNav />
      <div>
        {loading && <LoadingSpinner />}{" "}
        {passwordChanged ? (
          <div className="success-message">
            <p>Password changed successfully!</p>
            <Link to="/">
              <button>Go to Home</button>
            </Link>
          </div>
        ) : (
          renderStage()
        )}
        {message && !passwordChanged && <p>{message}</p>}
        {errorToast && (
          <div className="error-toast">
            <p>{errorToast}</p>
            <button onClick={() => setErrorToast("")}>Close</button>
          </div>
        )}
      </div>
      <div className="footer-container">
        {" "}
        <div className="foot">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
