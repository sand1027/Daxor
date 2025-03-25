import { assets } from "../assets/assets";
import "./AboutUs.css";
import "../Responsive.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

const AboutUs = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: false,
  };

  return (
    <div className="about-container">
      <div className="about-section">
        <div className="about-text">
          <h2>Freelance at will</h2>
          <p>Earn when you want to. Monetize your skills at your will.</p>
          <Link to="./payments">
            <button>Get Started</button>
          </Link>
        </div>

        <div className="about-slider">
          <Slider {...sliderSettings}>
            <div className="slider-img">
              <img src={assets.slider1} alt="Freelance" />
            </div>
            <div className="slider-img">
              <img src={assets.slider2} alt="Freelance" />
            </div>
            <div className="slider-img">
              <img src={assets.slider3} alt="Freelance" />
            </div>
          </Slider>
        </div>
      </div>

      <div className="about-info">
        <h2>About Us</h2>
        <p>
          At <span>Daxor</span>, we bridge the gap between academic learning and
          real-world experience by offering exceptional internship opportunities
          for students. We believe internships are a powerful tool that can:
        </p>

        <div className="about-item">
          <img src={assets.network2} alt="Skills" className="about-img-left" />
          <div className="about-content-right">
            <h3>Equip students with valuable skills</h3>
            <p>
              Our internships provide students with hands-on experience in their
              chosen field, allowing them to develop and refine practical skills
              that are highly sought after by employers.
            </p>
          </div>
        </div>

        <div className="about-item">
          <div className="about-content-left">
            <h3>Foster professional development</h3>
            <p>
              Interns gain exposure to professional settings, workplace culture,
              and industry best practices. This prepares them for a smooth
              transition into the workforce after graduation.
            </p>
          </div>
          <img
            src={assets.project2}
            alt="Development"
            className="about-img-right"
          />
        </div>

        <div className="about-item">
          <img src={assets.network1} alt="Network" className="about-img-left" />
          <div className="about-content-right">
            <h3>Build a strong network</h3>
            <p>
              Interns have the chance to connect with experienced professionals
              who can become valuable mentors and provide guidance throughout
              their careers.
            </p>
          </div>
        </div>

        <div className="about-item">
          <div className="about-content-left">
            <h3>Discover career paths</h3>
            <p>
              Internships allow students to explore different fields and confirm
              their career interests, setting them on a path to success.
            </p>
          </div>
          <img
            src={assets.project1}
            alt="Career Paths"
            className="about-img-right"
          />
        </div>

        <h2>Why Choose Daxor for Internships?</h2>
        <p>
          We differentiate ourselves by providing a comprehensive internship
          experience that goes beyond simply assigning tasks. Heres what sets us
          apart:
        </p>

        <div className="about-item">
          <img
            src={assets.project1}
            alt="Projects"
            className="about-img-left"
          />
          <div className="about-content-right">
            <h3>Meaningful projects</h3>
            <p>
              We offer interns the opportunity to work on real-world projects
              that contribute to the companys goals. This allows them to see the
              impact of their work and gain a sense of accomplishment.
            </p>
          </div>
        </div>

        <div className="about-item">
          <div className="about-content-left">
            <h3>Mentorship and support</h3>
            <p>
              Each intern is assigned a dedicated mentor who provides guidance,
              feedback, and support throughout the internship.
            </p>
          </div>
          <img
            src={assets.mentorship}
            alt="Mentorship"
            className="about-img-right"
          />
        </div>

        <div className="about-item">
          <img
            src={assets.teamwork}
            alt="Environment"
            className="about-img-left"
          />
          <div className="about-content-right">
            <h3>Positive work environment</h3>
            <p>
              We foster a collaborative and inclusive work environment where
              interns feel valued and respected.
            </p>
          </div>
        </div>

        <div className="about-item">
          <div className="about-content-left">
            <h3>Learning and development opportunities</h3>
            <p>
              We offer workshops, seminars, and other learning resources to help
              interns develop their professional skills and knowledge.
            </p>
          </div>
          <img
            src={assets.software2}
            alt="Learning"
            className="about-img-right"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
