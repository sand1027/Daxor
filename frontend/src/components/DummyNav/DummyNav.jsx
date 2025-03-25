import { assets } from "../assets/assets";
import { Link } from "react-router-dom";
import "./DummyNav.css";

const DummyNav = () => {
  return (
    <div className="d-nav">
      <Link to="/">
        <img src={assets.logo} alt="" />
      </Link>
    </div>
  );
};

export default DummyNav;
