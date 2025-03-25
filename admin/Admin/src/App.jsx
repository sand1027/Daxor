import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import Users from "./components/User/Users";
import Applicant from "./components/ApplicantForm/Applicant";
import Business from "./components/BusinessForm/Business";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Sidebar />
        <Routes>
          <Route path="/users" element={<Users />} />
          <Route path="/applicant" element={<Applicant />} />
          <Route path="/business" element={<Business />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
