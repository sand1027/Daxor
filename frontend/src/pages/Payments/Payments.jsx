import { useState } from "react";

import "./Payments.css";
import {
  FaUserCheck,
  FaRocket,
  FaBriefcase,
  FaUsers,
  FaTrophy,
  FaCalendarCheck,
  FaChalkboardTeacher,
  FaTasks,
  FaLaptopCode,
  FaChartLine,
} from "react-icons/fa";

import DummyNav from "../../components/DummyNav/DummyNav";
import Footer from "../../components/Footer/Footer";

const PaymentPage = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);

  const plans = [
    { id: 1, name: "1 Month", price: 4999, offer: null, duration: "1 Month" },
    { id: 2, name: "2 Months", price: 7999, offer: null, duration: "2 Months" },
    { id: 3, name: "3 Months", price: 9999, offer: null, duration: "3 Months" },
  ];

  const handlePlanSelect = (plan) => {
    setSelectedPlan(plan);
  };

  const renderPlanDetails = () => {
    switch (selectedPlan?.id) {
      case 1:
        return (
          <>
            <div className="description-item">
              <FaRocket /> Fast-track your onboarding process
            </div>
            <div className="description-item">
              <FaBriefcase /> Engage in short-term impactful projects
            </div>
            <div className="description-item">
              <FaTasks /> Daily task assignments to ensure productivity
            </div>
            <div className="description-item">
              <FaChalkboardTeacher /> One-on-one mentorship sessions
            </div>
            <div className="description-item">
              <FaLaptopCode /> Access to premium project tools
            </div>
          </>
        );
      case 2:
        return (
          <>
            <div className="description-item">
              <FaUsers /> Team collaboration opportunities
            </div>
            <div className="description-item">
              <FaTrophy /> Performance incentives
            </div>
            <div className="description-item">
              <FaChartLine /> Career development workshops
            </div>
            <div className="description-item">
              <FaTasks /> Weekly progress evaluations
            </div>
            <div className="description-item">
              <FaLaptopCode /> Access to exclusive project resources
            </div>
          </>
        );
      case 3:
        return (
          <>
            <div className="description-item">
              <FaTrophy /> Extended mentorship and training
            </div>
            <div className="description-item">
              <FaCalendarCheck /> Flexible scheduling options
            </div>
            <div className="description-item">
              <FaChartLine /> Advanced career development programs
            </div>
            <div className="description-item">
              <FaUsers /> Leadership opportunities within teams
            </div>
            <div className="description-item">
              <FaTasks /> Comprehensive project management experience
            </div>
          </>
        );
      default:
        return (
          <p>
            Choose a subscription plan that suits your needs and embark on a
            journey of learning and growth with Daxor.
          </p>
        );
    }
  };

  return (
    <>
      <DummyNav />
      <div className="payment-page">
        <div className="left-section">
          <div className="section-title">
            <h2>
              Empower Your <span style={{ color: "blue" }}>Team,</span>{" "}
              <span style={{ color: "blue" }}>Hire </span>an
              <span style={{ color: "blue" }}> Intern</span>
            </h2>
          </div>
          <div className="section-icon">
            <FaUserCheck style={{ color: "blue", fontSize: "5rem" }} />
          </div>
          <div className="section-description">
            <p>
              Access a diverse talent pool, gain fresh perspectives, and build
              your future workforce.
            </p>
          </div>
        </div>

        <div className="right-section">
          <div className="top-section">
            {plans.map((plan) => (
              <div
                key={plan.id}
                className={`card ${
                  selectedPlan?.id === plan.id ? "selected" : ""
                }`}
                onClick={() => handlePlanSelect(plan)}
              >
                <h3>{plan.name}</h3>
                {plan.offer && <p>{plan.offer}</p>}
                <p>INR {plan.price}/Incl GST</p>
              </div>
            ))}
          </div>
          <div className="bottom-section">
            <div className="program-description">
              <h3>Daxor Internship Program</h3>
              {renderPlanDetails()}
            </div>

            <div className="payment-details">
              <h3>Payment Details</h3>
              <p>Amount: ₹ {selectedPlan ? selectedPlan.price : "0.00"}</p>
              <form>
                {Array.from({ length: selectedPlan ? 1 : 0 }, (_, i) => (
                  <div key={i}>
                    <label>
                      Full Name Person {i + 1}:{" "}
                      <input type="text" name={`fullName${i + 1}`} required />
                    </label>
                    <label>
                      Email Person {i + 1}:{" "}
                      <input type="email" name={`email${i + 1}`} required />
                    </label>
                    <label>
                      Mobile No Person {i + 1}:{" "}
                      <input type="tel" name={`mobile${i + 1}`} required />
                    </label>
                    <label>
                      Already registered with Daxor:{" "}
                      <select name={`registered${i + 1}`} required>
                        <option value="">--Select--</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                      </select>
                    </label>
                  </div>
                ))}
                <button type="submit" disabled={!selectedPlan}>
                  Pay ₹ {selectedPlan ? selectedPlan.price : "0.00"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="foot">
        <Footer />
      </div>
    </>
  );
};

export default PaymentPage;
