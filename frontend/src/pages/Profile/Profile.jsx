import { useState, useEffect } from "react";
import axios from "axios";
import "./Profile.css";
import DumyNav from "../../components/DummyNav/DummyNav";
import Footer from "../../components/Footer/Footer";

const Profile = () => {
  const [user, setUser] = useState({ name: "", email: "" });
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const userId = localStorage.getItem("userId");

        if (!userId) {
          setMessage("User ID not found in local storage");
          return;
        }

        const response = await axios.get(
          `http://localhost:4000/api/user/profile/${userId}`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        setUser(response.data);
      } catch (error) {
        setMessage("Error fetching user details");
      }
    };

    fetchUserDetails();
  }, []);

  const handleUpdateDetails = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      const userId = localStorage.getItem("userId");

      if (!token || !userId) {
        setMessage("Token or userId not found");
        return;
      }

      const response = await axios.put(
        `http://localhost:4000/api/user/profile/${userId}`,
        { name: user.name, email: user.email },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setMessage(response.data.message);
    } catch (error) {
      setMessage("Error updating details");
    }
  };

  const handleChangePassword = async (e) => {
    e.preventDefault();

    if (!currentPassword || !newPassword || !confirmNewPassword) {
      setMessage("Please fill in all password fields");
      return;
    }

    if (newPassword !== confirmNewPassword) {
      setMessage("New passwords do not match");
      return;
    }

    try {
      const token = localStorage.getItem("token");
      const userId = localStorage.getItem("userId");

      if (!token || !userId) {
        setMessage("Token or userId not found");
        return;
      }

      const response = await axios.put(
        `http://localhost:4000/api/user/change-password/${userId}`,
        { currentPassword, newPassword },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setMessage(response.data.message);
    } catch (error) {
      if (error.response) {
        setMessage(error.response.data.message);
      } else {
        setMessage("Error changing password");
      }
    }
  };

  return (
    <>
      <DumyNav />
      <div className="profile">
        <h2>Profile</h2>
        {message && <p className="message">{message}</p>}

        <form onSubmit={handleUpdateDetails} className="profile-form">
          <div className="form-group">
            <label>Name:</label>
            <input
              type="text"
              value={user.name}
              onChange={(e) => setUser({ ...user, name: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
            />
          </div>
          <button type="submit">Update Details</button>
        </form>

        <form onSubmit={handleChangePassword} className="profile-form">
          <div className="form-group">
            <label>Current Password:</label>
            <input
              type="password"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>New Password:</label>
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Confirm New Password:</label>
            <input
              type="password"
              value={confirmNewPassword}
              onChange={(e) => setConfirmNewPassword(e.target.value)}
            />
          </div>
          <button type="submit">Change Password</button>
        </form>
      </div>
      <div className="foot">
        <Footer />
      </div>
    </>
  );
};

export default Profile;
