import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-content">
        <Link to="/applicant">Applicant Form</Link>
        <Link to="/users">Users</Link>
        <Link to="/business">Business Form</Link>
      </div>
    </div>
  );
};

export default Sidebar;
