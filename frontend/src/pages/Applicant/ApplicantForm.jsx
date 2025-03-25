import { useState } from "react";
import "./ApplicantForm.css";
import Footer from "../../components/Footer/Footer";
import DummyNav from "../../components/DummyNav/DummyNav";
import ThankYou from "../../components/ThankYou/ThankYou";

const Applicant = ({ formData: initialFormData, handleSubmit }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    dateOfBirth: "",
    gender: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    country: "",
    category: "",
    highestQualification: "",
    workExperience: "",
    resume: null,
    adhaar: null,
    ...initialFormData,
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const onFileChangeHandler = (event) => {
    const { name, files } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: files[0],
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const formDataToSend = new FormData();
      for (const key in formData) {
        formDataToSend.append(key, formData[key]);
      }

      const response = await fetch(
        "http://localhost:4000/api/forms/save-applicant-form",
        {
          method: "POST",
          body: formDataToSend,
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const responseData = await response.json();
      console.log("Form submission response:", responseData);

      setFormData({
        fullName: "",
        dateOfBirth: "",
        gender: "",
        email: "",
        phone: "",
        address: "",
        city: "",
        state: "",
        pincode: "",
        country: "",
        category: "",
        highestQualification: "",
        workExperience: "",
        resume: null,
        adhaar: null,
      });

      setFormSubmitted(true);
    } catch (error) {
      console.error("Form submission error:", error);
    }
  };

  return (
    <>
      <DummyNav />
      {formSubmitted ? (
        <ThankYou />
      ) : (
        <div className="applicant-form">
          <h3>Applicant Registration Form</h3>
          <form onSubmit={handleFormSubmit} className="applicant-details">
            <label htmlFor="fullName">Full Name</label>
            <input
              onChange={onChangeHandler}
              value={formData.fullName}
              type="text"
              name="fullName"
              id="fullName"
              required
            />
            <label htmlFor="dateOfBirth">Date of Birth</label>
            <input
              onChange={onChangeHandler}
              value={formData.dateOfBirth}
              type="date"
              name="dateOfBirth"
              id="dateOfBirth"
              required
            />
            <label htmlFor="gender">Gender</label>
            <select
              name="gender"
              onChange={onChangeHandler}
              value={formData.gender}
              required
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            <label htmlFor="email">Email</label>
            <input
              onChange={onChangeHandler}
              value={formData.email}
              type="email"
              name="email"
              id="email"
              required
            />
            <label htmlFor="phone">Phone Number</label>
            <input
              onChange={onChangeHandler}
              value={formData.phone}
              type="tel"
              name="phone"
              id="phone"
              required
            />
            <label htmlFor="address">Address</label>
            <input
              onChange={onChangeHandler}
              value={formData.address}
              type="text"
              name="address"
              id="address"
              required
            />
            <label htmlFor="city">City</label>
            <input
              onChange={onChangeHandler}
              value={formData.city}
              type="text"
              name="city"
              id="city"
              required
            />
            <label htmlFor="state">State/Province</label>
            <input
              onChange={onChangeHandler}
              value={formData.state}
              type="text"
              name="state"
              id="state"
              required
            />
            <label htmlFor="pincode">Pincode</label>
            <input
              onChange={onChangeHandler}
              value={formData.pincode}
              type="text"
              name="pincode"
              id="pincode"
              required
            />
            <label htmlFor="country">Country</label>
            <input
              onChange={onChangeHandler}
              value={formData.country}
              type="text"
              name="country"
              id="country"
              required
            />
            <label htmlFor="highestQualification">Highest Qualification</label>
            <input
              onChange={onChangeHandler}
              value={formData.highestQualification}
              type="text"
              name="highestQualification"
              id="highestQualification"
              required
            />
            <label htmlFor="category">Category</label>
            <select
              name="category"
              id="category"
              value={formData.category}
              onChange={onChangeHandler}
            >
              <option value="">Select Category</option>
              <option value="software-development">Software Development</option>
              <option value="webapplication-development">
                Website Development
              </option>
              <option value="mobileapplication-development">
                Mobile Application Development
              </option>
            </select>
            <label htmlFor="workExperience">Work Experience</label>
            <textarea
              onChange={onChangeHandler}
              value={formData.workExperience}
              name="workExperience"
              id="workExperience"
              rows="4"
              cols="50"
            />
            <label htmlFor="resume">Resume</label>
            <input
              type="file"
              name="resume"
              id="resume"
              onChange={onFileChangeHandler}
              required
            />
            <label htmlFor="adhaar">Adhaar</label>
            <input
              type="file"
              name="adhaar"
              id="adhaar"
              onChange={onFileChangeHandler}
              required
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      )}
      <Footer />
    </>
  );
};

export default Applicant;
