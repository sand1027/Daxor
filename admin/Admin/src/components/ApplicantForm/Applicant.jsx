import { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "../Sidebar/Sidebar";
import "./Applicant.css";

const Applicant = () => {
  const [applicantForms, setApplicantForms] = useState([]);

  useEffect(() => {
    const fetchApplicantForms = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4000/api/forms/forms/applicants"
        );
        if (response.data.success) {
          const formsWithStatus = response.data.forms.map((form) => ({
            ...form,
            statusVisible: true,
          }));
          setApplicantForms(formsWithStatus);
        } else {
          console.error(
            "Error fetching applicant forms:",
            response.data.message
          );
        }
      } catch (error) {
        console.error("Error fetching applicant forms:", error);
      }
    };

    fetchApplicantForms();
  }, []);

  const handleDownload = async (formId) => {
    try {
      const response = await axios.get(
        `http://localhost:4000/api/forms/forms/download/${formId}`,
        {
          responseType: "blob", // Ensure response type is blob for file download
        }
      );

      // Create a temporary URL for the downloaded file
      const url = window.URL.createObjectURL(new Blob([response.data]));

      // Create a link element and trigger download
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", `applicant_files_${formId}.zip`); // Adjust filename and extension
      document.body.appendChild(link);
      link.click();
      link.parentNode.removeChild(link);
    } catch (error) {
      console.error("Download Error:", error);
    }
  };

  const handleAction = async (formId, newStatus, type) => {
    try {
      const response = await axios.put(
        `http://localhost:4000/api/forms/update-progress/${formId}`,
        { progress: newStatus, type }
      );
      if (response.data.success) {
        // Update the state to reflect the change in progress and show status column
        setApplicantForms((prevForms) =>
          prevForms.map((form) =>
            form._id === formId
              ? { ...form, progress: newStatus, statusVisible: true }
              : form
          )
        );
      } else {
        console.error("Error updating form status:", response.data.message);
      }
    } catch (error) {
      console.error("Error updating form status:", error);
    }
  };

  return (
    <div className="admin-panel">
      <Sidebar />
      <div className="forms-content">
        <h1>Applicant Forms</h1>
        <div className="forms-list">
          {applicantForms.length > 0 ? (
            <table className="forms-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Full Name</th>
                  <th>Email</th>
                  <th>User Uploaded</th>

                  <th>Download Files</th>
                  <th>Actions</th>
                  <th>Status</th>
                  <th>Category</th>
                </tr>
              </thead>
              <tbody>
                {applicantForms.map((form) => (
                  <tr key={form._id}>
                    <td>{form._id}</td>
                    <td>{form.fullName}</td>

                    <td>{form.email}</td>
                    <td>{form.user.name}</td>
                    <td>
                      <button onClick={() => handleDownload(form._id)}>
                        Download Files
                      </button>
                    </td>
                    <td>
                      <button
                        className="action-btn"
                        onClick={() =>
                          handleAction(form._id, "Approved", "applicant")
                        }
                      >
                        Approve
                      </button>
                      <button
                        className="action-btn"
                        onClick={() =>
                          handleAction(form._id, "Rejected", "applicant")
                        }
                      >
                        Reject
                      </button>
                      <button
                        className="action-btn"
                        onClick={() =>
                          handleAction(form._id, "Waitlisted", "applicant")
                        }
                      >
                        Waitlist
                      </button>
                    </td>
                    <td>{form.progress || "No Status"}</td>
                    <td>{form.category}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>No applicant forms found</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Applicant;
