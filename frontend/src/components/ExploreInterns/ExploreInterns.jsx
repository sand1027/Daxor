import React, { useEffect, useState } from "react";
import axios from "axios";
import "./ExploreInterns.css";

const ExploreInterns = () => {
  const [applicants, setApplicants] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchApplicants = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          "http://localhost:4000/api/forms/forms/applicants"
        );
        if (response.data && response.data.length > 0) {
          // Extract only fullName and category from each applicant object
          const simplifiedApplicants = response.data.map((form) => ({
            fullName: form.fullName,
            category: form.category,
          }));
          setApplicants(simplifiedApplicants);
          setError(""); // Clear any previous errors
        } else {
          setApplicants([]);
          setError("No applicants found."); // Set error message if no data is returned
        }
      } catch (error) {
        console.error("Error fetching applicants:", error);
        setError("Error fetching applicants. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchApplicants();
  }, []); // Fetch data on component mount

  return (
    <div className="explore-interns">
      <h2>Explore Interns</h2>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <div className="applicant-table">
          <h3>Applicant Information</h3>
          {applicants.length > 0 ? (
            <table>
              <thead>
                <tr>
                  <th>Full Name</th>
                  <th>Category Applied</th>
                </tr>
              </thead>
              <tbody>
                {applicants.map((applicant, index) => (
                  <tr key={index}>
                    <td>{applicant.fullName}</td>
                    <td>{applicant.category}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>{error}</p>
          )}
        </div>
      )}
    </div>
  );
};

export default ExploreInterns;
