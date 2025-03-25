import { useState, useEffect } from "react";
import AboutUs from "../../components/About Us/AboutUs";
import Header from "../../components/Header/Header";
import ContactUs from "../../components/Contact/ContactUs";
import WhatWeOffer from "../../components/WhatWeOffer/WhatweOffer";
import Faq from "../../components/Faq/Faq";
import OurServices from "../../components/OurServices/OurServices";
import Footer from "../../components/Footer/Footer";
import Statistics from "../../components/Stats/Statistics";
import Navbar from "../../components/Navbar/Navbar";
import LoadingComponent from "../../components/Loading/LoadingComponent";

import "./Home.css";
import ForgotPassword from "../../components/ForgotPassword/ForgotPassword";
import Training from "../../components/Training/Training";

const Home = ({
  setShowLogin,
  handleScrollTo,
  aboutUsRef,
  whatWeOfferRef,
  contactUsRef,
  faqRef,
  servicesRef,
  navigate,
}) => {
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // Adjust timeout as needed

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingComponent />;
  }

  return (
    <>
      <div className="nav-bar">
        <Navbar
          setShowLogin={setShowLogin}
          handleScrollTo={handleScrollTo}
          aboutUsRef={aboutUsRef}
          whatWeOfferRef={whatWeOfferRef}
          contactUsRef={contactUsRef}
          faqRef={faqRef}
          servicesRef={servicesRef}
        />
      </div>
      <div className="home">
        <Header />
        <div className="line">
          <hr />
        </div>
        <section ref={aboutUsRef} className="about-content">
          <AboutUs />
        </section>
        <div className="line">
          <hr />
        </div>

        {/* <section>
          <Training />
        </section>
        <div className="line">
          <hr />
        </div> */}
        <section>
          <OurServices />
        </section>
        <div className="line">
          <hr />
        </div>
        <section ref={whatWeOfferRef}>
          <WhatWeOffer />
        </section>
        <div className="line">
          <hr />
        </div>
        <section ref={faqRef}>
          <Faq />
        </section>
        <div className="line">
          <hr />
        </div>
        <section>
          <Statistics />
        </section>
        <section ref={contactUsRef}>
          <ContactUs />
        </section>
        <section>
          <Footer />
        </section>
      </div>
    </>
  );
};

export default Home;
