import { useState } from "react";
import "./LoginPopUp.css";
import axios from "axios";
import { assets } from "../../components/assets/assets";
import { Link } from "react-router-dom";

const LoginPopUp = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState("Login");
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState(null);
  const url = "http://localhost:4000";

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  const onLogin = async (event) => {
    event.preventDefault();
    setError(null);

    try {
      let newUrl = url;
      if (currState === "Login") {
        newUrl += "/api/user/login";
      } else {
        newUrl += "/api/user/register";
      }
      const response = await axios.post(newUrl, data);
      if (response.data.success) {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("userId", response.data.userId);
        setShowLogin(false);
        window.location.reload();
      } else {
        if (response.data.message === "Invalid credentials") {
          setError("Wrong password. Please try again.");
        } else {
          setError(response.data.message || "Login/Registration failed");
        }
      }
    } catch (error) {
      setError(error.response?.data?.message || "An error occurred");
    }
  };

  return (
    <div className="login-popup">
      <form onSubmit={onLogin} className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt="Close"
          />
        </div>
        {error && <p className="error-message">{error}</p>}{" "}
        <div className="login-popup-inputs">
          {currState === "Login" ? null : (
            <input
              name="name"
              onChange={onChangeHandler}
              value={data.name}
              type="text"
              placeholder="Your name"
              required
            />
          )}

          <input
            name="email"
            onChange={onChangeHandler}
            value={data.email}
            type="email"
            placeholder="Your Email"
            required
          />
          <input
            name="password"
            onChange={onChangeHandler}
            value={data.password}
            type="password"
            placeholder="Password"
            required
          />
        </div>
        <button type="submit">
          {currState === "Sign Up" ? "Create account" : "Login"}
        </button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>Click To Continue</p>
        </div>
        {currState === "Login" ? (
          <p>
            Create a new account?{" "}
            <span onClick={() => setCurrState("Sign Up")}>Click Here</span>
          </p>
        ) : (
          <p>
            Existing User?{" "}
            <span onClick={() => setCurrState("Login")}>Login Here</span>
          </p>
        )}
        <Link to="/forgot-password">
          <button onClick={() => setShowLogin(false)}>
            Forgot Password?? Click Here
          </button>
        </Link>
      </form>
    </div>
  );
};

export default LoginPopUp;
