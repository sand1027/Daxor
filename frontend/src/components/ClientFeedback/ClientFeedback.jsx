import "./ClientFeedback.css";
import { assets } from "../assets/assets";

const ClientFeedback = () => {
  const feedbacks = [
    {
      id: 1,
      name: "Suhas",
      role: "Software Development",
      feedback:
        "I was given real responsibilities that contributed to the team's goals. I felt like a valued member of the team.",
    },
    {
      id: 2,
      name: "Anjan",
      role: "Cloud Services",
      feedback:
        "We were impressed with Daxor's ability to understand our unique challenges and tailor solutions to meet our specific needs. Their team is professional, responsive, and a pleasure to work with",
    },
    {
      id: 3,
      name: "Rakesh",
      role: "AI Analytics",
      feedback:
        "Daxor's analytics platform has revolutionized the way we track and analyze customer behavior. Their insights have helped us optimize our marketing campaigns and improve customer satisfaction.",
    },
  ];

  return (
    <>
      <div className="client-feedback-title">
        <h1>Clients Feedback</h1>
      </div>
      <div className="client-feedback-section">
        <p className="client-feedback-subtitle">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. It is a long
          established fact that a reader.
        </p>

        <div className="feedback-cards">
          {feedbacks.map((feedback) => (
            <div key={feedback.id} className="feedback-card">
              <img src={assets.quote} alt="" className="icon" />
              <p className="feedback-text">{feedback.feedback}</p>
              <div className="client-info">
                <h3 className="client-name">{feedback.name}</h3>
                <p className="client-role">{feedback.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ClientFeedback;
