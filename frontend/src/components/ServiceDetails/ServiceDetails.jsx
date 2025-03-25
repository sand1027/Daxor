import { Link } from "react-router-dom";

const ServiceCard = ({ id, title, description, logo }) => (
  <Link to={`/services/${id}`} className="card-link">
    <div className="card">
      <div className="card-content">
        <img src={logo} alt={title} className="service-logo" />
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  </Link>
);

export default ServiceCard;
