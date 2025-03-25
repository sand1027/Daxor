import { useState } from "react";
import "./Faq.css";
import { assets } from "../assets/assets";

const questions = [
  {
    question: "What should I expect during my internship?",
    answer:
      " Your internship will be a valuable learning experience. You'll be working on real projects, learning new skills, and gaining exposure to the industry. You'll also have the opportunity to network with professionals and build your resume.",
  },
  {
    question: "What are the company's expectations for me?",
    answer:
      "We expect you to be punctual, professional, and eager to learn. We want you to take initiative, ask questions, and contribute to the team. We also expect you to follow our company policies and procedures.",
  },
  {
    question: "Do you offer customer support?",
    answer: "Yes, we offer 24/7 customer support.",
  },
];

const Faq = () => {
  const [openQuestions, setOpenQuestions] = useState([]);

  const toggleQuestion = (index) => {
    setOpenQuestions((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <div className="faq">
      <div className="faq-head">
        <h1>Frequently Asked Questions</h1>
      </div>

      {questions.map((q, index) => (
        <div key={index} className="faq-item">
          <div className="faq-question" onClick={() => toggleQuestion(index)}>
            <span>{q.question}</span>
            <img src={assets.add} alt="Toggle Answer" />
          </div>
          {openQuestions.includes(index) && (
            <div className="faq-answer">{q.answer}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Faq;
