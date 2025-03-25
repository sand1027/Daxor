import { useState } from "react";
import axios from "axios";
import "./ContactUs.css"; // Assuming you have a CSS file for styling
import { assets } from "../assets/assets.js";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:4000/send-message",
        formData
      );
      setMessage(response.data.message);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      setError(error.response?.data?.error || "Failed to send message");
    }
  };

  return (
    <div className="contact-us">
      <div className="contact-head">
        <h1>Contact Us</h1>
      </div>
      <div className="contact-us-top">
        <h2>Feel Free To Contact Us Today And Get</h2>
        <h2>Your Solution</h2>
      </div>
      <div className="contact-us-info">
        <div className="contact-us-left">
          <h3>Get in touch</h3>
          <p>
            Give us a call or drop by anytime, we endeavor to answer all the
            calls and enquiries within 24hrs
          </p>
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="multifeilds">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>
            <div className="multifeilds">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
              />
            </div>
            <textarea
              name="message"
              rows="10"
              placeholder="How can we Help?"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            <div className="multifeild">
              <input type="checkbox" name="agree" required />
              <p>I agree to Terms & Conditions</p>
            </div>
            <button type="submit">Send Message</button>
          </form>
          {message && <p className="success-message">{message}</p>}
          {error && <p className="error-message">{error}</p>}
        </div>
        <div className="contact-us-right">
          <div className="contact-us-links">
            <div className="contact-info">
              <img src={assets.phone} alt="phone" />
              <a href="tel:+919445331669">+91 9445331669</a>
            </div>

            <div className="contact-info">
              <img src={assets.email} alt="email" />
              <a href="mailto:contactus@daxor.in">contactus@daxor.in</a>
            </div>

            <div className="contact-info">
              <img src={assets.address} alt="address" />
              <a href="https://maps.app.goo.gl/xgpfANrmaa3h2syL6" target="#">
                Address: 1234 Street Name, City, Country
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
