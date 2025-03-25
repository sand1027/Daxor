import { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "../Sidebar/Sidebar";
import "./Business.css";

const Business = () => {
  const [businessForms, setBusinessForms] = useState([]);

  useEffect(() => {
    const fetchBusinessForms = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4000/api/forms/forms/businesses"
        );
        if (response.data.success) {
          setBusinessForms(response.data.forms);
        } else {
          console.error(
            "Error fetching business forms:",
            response.data.message
          );
        }
      } catch (error) {
        console.error("Error fetching business forms:", error);
      }
    };

    fetchBusinessForms();
  }, []);

  return (
    <div className="admin-panel">
      <div className="forms-content">
        <h1>Business Forms</h1>
        <div className="forms-list">
          {businessForms.length > 0 ? (
            <table className="forms-table">
              <thead>
                <tr>
                  <th>Form ID</th>
                  <th>Company Name</th>
                  <th>Email</th>
                  <th>Contact Person</th>
                  <th>Phone Number</th>
                </tr>
              </thead>
              <tbody>
                {businessForms.map((form) => (
                  <tr key={form._id}>
                    <td>{form._id}</td>
                    <td>{form.companyName}</td>
                    <td>{form.email}</td>
                    <td>{form.contactPerson}</td>
                    <td>{form.phone}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>No business forms found</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Business;
