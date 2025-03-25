import { useState, useEffect } from "react";
import { assets } from "../assets/assets";
import "./Header.css";
import { useTypewriter } from "react-simple-typewriter";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";

const Header = ({ setShowLogin }) => {
  const [typeEffect] = useTypewriter({
    words: ["Tomorrow's Talent,"],
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 50,
  });

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    checkLoggedInStatus();
  }, []);

  const checkLoggedInStatus = () => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${storedToken}`;
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  };

  const handleRegisterClick = async (path) => {
    try {
      if (isLoggedIn) {
        navigate(path);
        setTimeout(() => {
          window.location.reload();
        }, 10);
      } else {
        toast.error("Please login to Register", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        setShowLogin(true); // Show login modal or component
      }
    } catch (error) {
      console.error("Error while handling registration:", error);
    }
  };

  return (
    <div className="header">
      <ToastContainer />
      <div className="header-contents">
        <h2>
          Your Next Chapter Starts Now. <span>Apply for an Internship.</span>
        </h2>
        <h3>
          Empowering <span> {typeEffect}</span> Today
        </h3>

        <div className="header-buttons">
          <button onClick={() => handleRegisterClick("/applicant")}>
            Register as an Applicant
          </button>
          <button onClick={() => handleRegisterClick("/business")}>
            Register as Business
          </button>
        </div>
      </div>
      <img src={assets.headerpic} alt="" />
    </div>
  );
};

export default Header;
