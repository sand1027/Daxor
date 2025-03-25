import { useState, useEffect, useRef } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Home from "./pages/Home/Home";
import ApplicantForm from "./pages/Applicant/ApplicantForm";
import BusinessForm from "./pages/Business/BusinessForm";
import LoginPopUp from "./components/LoginPopUp/LoginPopUp";
import PaymentPage from "./pages/Payments/Payments";
import Uploads from "./pages/Updates/Updates";
import ApplicationDevelopment from "./pages/Services/ApplicationDevelopment/ApplicationDevelopment";
import "./App.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SoftwareDevelopment from "./pages/Services/SoftwareDevelopment/SoftwareDevelopment";
import ProjectServices from "./pages/Services/ProjectServices/ProjectServices";
import CloudServices from "./pages/Services/CloudService/CloudService";
import ConsultingServices from "./pages/Services/ConsultingServices/ConsultingServices";
import ResourceManagement from "./pages/Services/ResourceManagement/ResourceManagement";
import DataManagement from "./pages/Services/DataManagement/DataManagement";
import AzureInfraManagement from "./pages/Services/AzureInfraManagement/AzureInfraManagement";
import DataLake from "./pages/Services/DataLakeServices/DataLakeServices";
import ApplicationModernization from "./pages/Services/ApplicationModrenization/ApplicationModrenization";
import AIAnalytics from "./pages/Services/AIAnalytics/AIAnalytics";
import WebApplication from "./pages/Services/WebApplication/WebApplication";
import Profile from "./pages/Profile/Profile";
import ExploreInterns from "./components/ExploreInterns/ExploreInterns";
import ForgotPassword from "./components/ForgotPassword/ForgotPassword";

const userId = localStorage.getItem("userId");

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const refs = {
    aboutUs: useRef(null),
    whatWeOffer: useRef(null),
    contactUs: useRef(null),
    faq: useRef(null),
    services: useRef(null),
  };

  const handleScrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      <ToastContainer />
      {showLogin && <LoginPopUp setShowLogin={setShowLogin} />}
      <div className="app">
        <Routes>
          <Route
            path="/"
            element={
              <Home
                setShowLogin={setShowLogin}
                handleScrollTo={handleScrollToSection}
                aboutUsRef={refs.aboutUs}
                whatWeOfferRef={refs.whatWeOffer}
                contactUsRef={refs.contactUs}
                faqRef={refs.faq}
                servicesRef={refs.services}
                navigate={navigate}
              />
            }
          />
          <Route path="/applicant" element={<ApplicantForm />} />
          <Route path="/business" element={<BusinessForm />} />
          <Route path="/payments" element={<PaymentPage />} />
          <Route path="/uploads" element={<Uploads userId={userId} />} />
          <Route
            path="/software-development"
            element={<SoftwareDevelopment />}
          />
          <Route
            path="/application-development"
            element={<ApplicationDevelopment />}
          />
          <Route
            path="/web-application-development"
            element={<WebApplication />}
          />
          <Route path="/project-services" element={<ProjectServices />} />
          <Route path="/cloud-service" element={<CloudServices />} />
          <Route path="/consulting-services" element={<ConsultingServices />} />
          <Route path="/resource-management" element={<ResourceManagement />} />
          <Route path="/data-management" element={<DataManagement />} />
          <Route path="/azure-management" element={<AzureInfraManagement />} />
          <Route path="/dl-services" element={<DataLake />} />
          <Route path="/am-services" element={<ApplicationModernization />} />
          <Route path="/ai-services" element={<AIAnalytics />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/explore-interns" element={<ExploreInterns />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
