import { assets } from "../assets/assets";
import "./Training.css";
import "../Responsive.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

const Training = () => {
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
    <div className="training-container">
      <div className="training-section">
        <div className="training-text">
          <h2>Daxor Intern Training Program</h2>
          <p>
            Enhance your skills and prepare for your career with our
            comprehensive training program.
          </p>
        </div>

        <div className="training-slider">
          <Slider {...sliderSettings}>
            <div className="slider-img">
              <img src={assets.training1} alt="Training" />
            </div>
            <div className="slider-img">
              <img src={assets.training2} alt="Training" />
            </div>
            <div className="slider-img">
              <img src={assets.training3} alt="Training" />
            </div>
          </Slider>
        </div>
      </div>

      <div className="training-info">
        <h2>Why Choose Our Training Program?</h2>
        <p>
          At <span>Daxor</span>, we offer a well-rounded training program that:
        </p>

        <div className="training-item">
          <img
            src={assets.foundation}
            alt="Skills"
            className="training-img-left"
          />
          <div className="training-content-right">
            <h3>Building a Strong Foundation</h3>
            <p>
              Gain hands-on experience and learn practical skills that are
              highly valued by employers.
            </p>
          </div>
        </div>

        <div className="training-item">
          <div className="training-content-left">
            <h3>Teamwork and Collaboration</h3>
            <p>
              Work with experienced mentors who will guide you through your
              training and help you grow professionally.
            </p>
          </div>
          <img
            src={assets.teamwork}
            alt="Guidance"
            className="training-img-right"
          />
        </div>

        <div className="training-item">
          <img
            src={assets.training6}
            alt="Network"
            className="training-img-left"
          />
          <div className="training-content-right">
            <h3>IT Skills in Practice</h3>
            <p>
              Connect with professionals and peers, creating valuable
              relationships for your future career.
            </p>
          </div>
        </div>

        <div className="training-item">
          <div className="training-content-left">
            <h3>Explores Career Paths</h3>
            <p>
              Discover different fields and career options to find your true
              calling.
            </p>
          </div>
          <img
            src={assets.training7}
            alt="Career Paths"
            className="training-img-right"
          />
        </div>
      </div>
    </div>
  );
};

export default Training;
