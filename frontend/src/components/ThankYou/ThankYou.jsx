import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "./ThankYou.css";

const ThankYou = () => {
  return (
    <div className="thank-you-container">
      <div className="thank-you-content">
        <h2 className="thank-you-heading">Thank You!</h2>
        <p className="thank-you-message">
          Your submission has been received. We appreciate your time.
        </p>
        <Link to="/" className="btn-home">
          Go to Home
        </Link>
      </div>
    </div>
  );
};

export default ThankYou;
