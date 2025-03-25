import { useState, useEffect } from "react";
import "./BusinessForm.css";
import DummyNav from "../../components/DummyNav/DummyNav";
import Footer from "../../components/Footer/Footer";
import ThankYou from "../../components/ThankYou/ThankYou"; // Import the ThankYou component

const BusinessForm = () => {
  const initialFormData = {
    companyName: "",
    businessType: "",
    contactPerson: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    country: "",
    website: "",
    aboutCompany: "",
    logo: null,
  };

  const [formData, setFormData] = useState(initialFormData);
  const [formSubmitted, setFormSubmitted] = useState(false); // State to track form submission

  useEffect(() => {
    // Simulate fetching initial data or set from API if needed
    const initialData = {
      companyName: "",
      businessType: "",
      contactPerson: "",
      email: "",
      phone: "",
      address: "",
      city: "",
      state: "",
      pincode: "",
      country: "",
      website: "",
      aboutCompany: "",
      logo: null,
    };
    setFormData(initialData);
  }, []); // This useEffect runs once on component mount

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    for (const key in formData) {
      formDataToSend.append(key, formData[key]);
    }

    try {
      const response = await fetch(
        "http://localhost:4000/api/forms/save-business-form",
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

      // Clear form fields after successful submission
      setFormData(initialFormData);
      // Set form submission state to true
      setFormSubmitted(true);

      // Optionally, you can handle success notification or redirect here
    } catch (error) {
      console.error("Form submission error:", error);
      // Handle error notification or display to user
    }
  };

  return (
    <>
      <DummyNav />
      <div className="business-inputs">
        <h3>Business Registration Form</h3>
        {formSubmitted ? ( // Conditional rendering based on form submission state
          <ThankYou /> // Show ThankYou component if form is submitted
        ) : (
          <form onSubmit={handleSubmit} className="business-details">
            <label htmlFor="companyName">Company Name</label>
            <input
              onChange={onChangeHandler}
              value={formData.companyName}
              type="text"
              name="companyName"
              id="companyName"
            />
            <label htmlFor="businessType">Business Type</label>
            <input
              onChange={onChangeHandler}
              value={formData.businessType}
              type="text"
              name="businessType"
              id="businessType"
            />
            <label htmlFor="contactPerson">Contact Person</label>
            <input
              onChange={onChangeHandler}
              value={formData.contactPerson}
              type="text"
              name="contactPerson"
              id="contactPerson"
            />
            <label htmlFor="email">Email</label>
            <input
              onChange={onChangeHandler}
              value={formData.email}
              type="email"
              name="email"
              id="email"
            />
            <label htmlFor="phone">Phone Number</label>
            <input
              onChange={onChangeHandler}
              value={formData.phone}
              type="number"
              name="phone"
              id="phone"
            />
            <label htmlFor="address">Address</label>
            <input
              onChange={onChangeHandler}
              value={formData.address}
              type="text"
              name="address"
              id="address"
            />
            <label htmlFor="city">City</label>
            <input
              onChange={onChangeHandler}
              value={formData.city}
              type="text"
              name="city"
              id="city"
            />
            <label htmlFor="state">State/Province</label>
            <input
              onChange={onChangeHandler}
              value={formData.state}
              type="text"
              name="state"
              id="state"
            />
            <label htmlFor="pincode">Pincode</label>
            <input
              onChange={onChangeHandler}
              value={formData.pincode}
              type="number"
              name="pincode"
              id="pincode"
            />
            <label htmlFor="country">Country</label>
            <input
              onChange={onChangeHandler}
              value={formData.country}
              type="text"
              name="country"
              id="country"
            />
            <label htmlFor="website">Website</label>
            <input
              onChange={onChangeHandler}
              value={formData.website}
              type="text"
              name="website"
              id="website"
            />
            <label htmlFor="aboutCompany">About Company</label>
            <textarea
              onChange={onChangeHandler}
              value={formData.aboutCompany}
              name="aboutCompany"
              id="aboutCompany"
              rows="4"
              cols="50"
            />

            <button type="submit">Submit</button>
          </form>
        )}
      </div>
      <Footer />
    </>
  );
};

export default BusinessForm;
