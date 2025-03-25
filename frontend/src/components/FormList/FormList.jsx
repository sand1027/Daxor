import { useState, useEffect } from "react";
import axios from "axios";

const FormsList = () => {
  const [forms, setForms] = useState({ applicantForms: [], businessForms: [] });

  useEffect(() => {
    const fetchForms = async () => {
      try {
        // Replace with actual API URL
        const response = await axios.get(`/api/forms/${userId}/forms`);
        setForms(response.data);
      } catch (error) {
        console.error("Error fetching forms:", error);
        // Handle error
      }
    };

    fetchForms();
  }, []);

  return (
    <div>
      <h2>Applicant Forms</h2>
      <ul>
        {forms.applicantForms.map((form) => (
          <li key={form._id}>{form.fullName}</li>
          // Adjust as per your form structure
        ))}
      </ul>

      <h2>Business Forms</h2>
      <ul>
        {forms.businessForms.map((form) => (
          <li key={form._id}>{form.companyName}</li>
          // Adjust as per your form structure
        ))}
      </ul>
    </div>
  );
};

export default FormsList;
