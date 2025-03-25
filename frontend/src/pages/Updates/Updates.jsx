import { useState, useEffect } from "react";
import axios from "axios";
import "./Updates.css";
import { Table, Button } from "reactstrap";
import moment from "moment";
import DummyNav from "../../components/DummyNav/DummyNav";
import Footer from "../../components/Footer/Footer";
import LoadingComponent from "../../components/Loading/LoadingComponent";

const Uploads = ({ userId }) => {
  const [forms, setForms] = useState({ applicantForms: [], businessForms: [] });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchForms = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/api/forms/${userId}`
        );
        setForms(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching forms", error);
        setLoading(false);
      }
    };

    fetchForms();
  }, [userId]);

  if (loading) {
    return <LoadingComponent />;
  }

  return (
    <>
      <div className="dummy-nav">
        <DummyNav />
      </div>
      <div className="uploads-container">
        <h2 className="uploads-title">Applicant Forms</h2>
        {forms.applicantForms.length === 0 ? (
          <p>No forms submitted</p>
        ) : (
          <Table striped className="uploads-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Date</th>
                <th>Progress</th>
              </tr>
            </thead>
            <tbody>
              {forms.applicantForms.map((form) => (
                <tr key={form._id}>
                  <td>{form.fullName}</td>
                  <td>{form.email}</td>
                  <td>{moment(form.date).format("MMMM D, YYYY")}</td>
                  <td>{form.progress}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}

        {forms.businessForms.length > 0 && (
          <>
            <h2 className="uploads-title">Business Forms</h2>
            <Table striped className="uploads-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {forms.businessForms.map((form) => (
                  <tr key={form._id}>
                    <td>{form.companyName}</td>
                    <td>{form.email}</td>
                    <td>{moment(form.date).format("MMMM D, YYYY")}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </>
        )}
      </div>

      <Footer />
    </>
  );
};

export default Uploads;
