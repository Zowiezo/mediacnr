"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "../styles/Chatbot.css";

const Chatbot = () => {
  const [step, setStep] = useState(0);
  const [responses, setResponses] = useState([]);
  const [showChatbot, setShowChatbot] = useState(false);
  const [showModal, setShowModal] = useState(false); // For success modal
  const [userDetails, setUserDetails] = useState({
    name: "",
    surname: "",
    number: "",
    email: "",
    company: "",
  });

  const steps = [
    {
      id: 1,
      question: "Do you need help attracting new customers online?",
      options: ["Yes", "No"],
      response: "Marketing & Digital Marketing Services",
    },
    {
      id: 2,
      question: "Are you struggling with consistent branding or visuals?",
      options: ["Yes", "No"],
      response: "Creative & Design Services + Marketing Support",
    },
    {
      id: 3,
      question: "Do you want to improve your business strategy?",
      options: ["Yes", "No"],
      response: "Strategy & Consulting Services",
    },
    {
      id: 4,
      question: "Do you need content creation like videos or blog articles?",
      options: ["Yes", "No"],
      response: "Creative Services with Specialized Support",
    },
    {
      id: 5,
      question: "Are you organizing an event or launching a product?",
      options: ["Yes", "No"],
      response: "Specialized Services (Event Marketing, PR)",
    },
    {
      id: 6,
      question: "Are you interested in combining multiple services?",
      options: ["Yes", "No"],
      response: "Combined Services Plan",
    },
    {
      id: 7,
      question: "Do you want us to create a unique package for you?",
      options: ["Yes", "No"],
      response: "Consultation Step",
    },
  ];

  const handleAnswer = (answer) => {
    const currentStep = steps[step];
    if (answer === "Yes") {
      setResponses((prev) => [
        ...prev,
        { step: step + 1, answer, service: currentStep.response },
      ]);
    } else {
      setResponses((prev) => [...prev, { step: step + 1, answer }]);
    }
    if (step < steps.length - 1) {
      setStep(step + 1);
    } else {
      setStep("end");
    }
  };

  const handleUserDetails = (e) => {
    setUserDetails({
      ...userDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleDetailsSubmit = () => {
    if (Object.values(userDetails).every((field) => field !== "")) {
      setStep(1);
      setUserDetails({
        name: "",
        surname: "",
        number: "",
        email: "",
        company: "",
      });
    } else {
      alert("Please fill in all fields.");
    }
  };

  const handleClose = () => {
    setShowChatbot(false);
    setStep(0);
    setResponses([]);
  };

  const handleFinalSubmit = () => {
    // Show the modal upon submission
    setShowModal(true);
    setResponses([]);
    setShowChatbot(false);
    setStep(0);
  };

  const handleBack = () => {
    if (step > 0) {
      setStep(step - 1);
      setResponses((prev) => prev.slice(0, prev.length - 1));
    }
  };

  useEffect(() => {
    setShowChatbot(true);
  }, []);

  return (
    <div className="chatbot-container">
      <button
        onClick={() => setShowChatbot(!showChatbot)}
        className="chatbot-toggle-btn"
      >
        💬
      </button>

      {showChatbot && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="chatbot-ui"
        >
          <div className="chatbot-header">
            <img
              src="/logo-white.svg"
              alt="Company Logo"
              className="chatbot-logo"
            />
            <button onClick={handleClose} className="close-btn">
              ✖️
            </button>
          </div>

          {step === 0 && (
            <>
              <div className="chatbot-message">
                <p style={{ marginBottom: "1rem" }}>Welcome to Media.CNR!</p>
                <p style={{ marginBottom: "0.2rem" }}>
                  We’re here to help you with your custom solutions. Please
                  enter your details below.
                </p>
              </div>
              <input
                type="text"
                name="name"
                placeholder="First Name"
                value={userDetails.name}
                onChange={handleUserDetails}
                className="chatbot-input"
              />
              <input
                type="text"
                name="surname"
                placeholder="Surname"
                value={userDetails.surname}
                onChange={handleUserDetails}
                className="chatbot-input"
              />
              <input
                type="text"
                name="number"
                placeholder="Phone Number"
                value={userDetails.number}
                onChange={handleUserDetails}
                className="chatbot-input"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={userDetails.email}
                onChange={handleUserDetails}
                className="chatbot-input"
              />
              <input
                type="text"
                name="company"
                placeholder="Company Name"
                value={userDetails.company}
                onChange={handleUserDetails}
                className="chatbot-input"
              />
              <button
                onClick={handleDetailsSubmit}
                className="option-button-yes"
              >
                Submit
              </button>
            </>
          )}

          {step > 0 && step !== "end" && (
            <>
              <p className="chatbot-question">{steps[step - 1].question}</p>
              <div>
                {steps[step - 1].options.map((option, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleAnswer(option)}
                    className={
                      option === "Yes"
                        ? "option-button-yes"
                        : "option-button-no"
                    }
                  >
                    {option}
                  </button>
                ))}
              </div>
              <button onClick={handleBack} className="back-button">
                Back
              </button>
            </>
          )}

          {step === "end" && (
            <div className="chatbot-final-recommendations">
              <h3>Your Selected Services:</h3>
              <ul>
                {responses
                  .filter((response) => response.answer === "Yes")
                  .map((response, idx) => (
                    <li key={idx}>{response.service}</li>
                  ))}
              </ul>
              <button onClick={handleFinalSubmit} className="option-button-yes">
                Submit
              </button>
            </div>
          )}
        </motion.div>
      )}
      {/* Success Modal */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2
              style={{
                marginBottom: "0.7rem",
                fontWeight: "200",
                color: "#12ffc6",
              }}
            >
              Thank you for reaching out to us!
            </h2>
            <p style={{ marginBottom: "1.2rem" }}>
              Your inquiry has been successfully submitted.
            </p>
            <p style={{ marginBottom: "1.2rem" }}>
              Our team will review your request and respond within 24-48 hours.
            </p>
            <p>We look forward to working with you at media.CNR</p>
            <button
              className="close-modal-btn"
              onClick={() => setShowModal(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
