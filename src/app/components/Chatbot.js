"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import "../styles/Chatbot.css";

const Chatbot = () => {
  const [step, setStep] = useState(0);
  const [responses, setResponses] = useState([]);
  const [showChatbot, setShowChatbot] = useState(false);
  const [showModal, setShowModal] = useState(false);
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
      response: "Creative & Design Services & Marketing Support",
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
    setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
  };

  const handleFinalSubmit = () => {
    // Collect selected services from responses
    const selectedServices = responses
      .filter((response) => response.answer === "Yes")
      .map((response) => response.service)
      .join(", ");

    // Collect the feedback from user responses
    const feedback = responses
      .map(
        (response) =>
          `${steps[response.step - 1].question} Answer: ${response.answer}`
      )
      .join("\n");

    // Prepare template parameters
    const templateParams = {
      name: userDetails.name,
      surname: userDetails.surname,
      number: userDetails.number,
      email: userDetails.email,
      company: userDetails.company,
      services: selectedServices, // List of services selected by the user
      feedback: feedback, // Detailed feedback
      to_email: "info@mediacnr.co.za",
    };

    // Send email using EmailJS
    emailjs
      .send(
        "service_4h9c1ji", // Replace with your service ID
        "template_3b3qgj7", // Replace with your template ID
        templateParams,
        "roYbhd90GtWcwChYM" // Replace with your public key
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setShowModal(true);
          setResponses([]); // Reset responses after submission
          setShowChatbot(false); // Hide the chatbot
          setStep(0); // Reset the step
        },
        (error) => {
          console.log("FAILED...", error);
        }
      );
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
            <Image
              src="/logo-white.svg"
              alt="Company Logo"
              className="chatbot-logo"
              width={100}
              height={50}
            />
            <button onClick={() => setShowChatbot(false)} className="close-btn">
              ✖️
            </button>
          </div>
          {step === 0 && (
            <>
              <p>Welcome to Media.CNR! Please enter your details.</p>
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
              <button onClick={() => setStep(1)} className="option-button-yes">
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
            </>
          )}
          {step === "end" && (
            <>
              <h3>Your Selected Services:</h3>
              <ul>
                {responses
                  .filter((r) => r.answer === "Yes")
                  .map((r, idx) => (
                    <li key={idx}>{r.service}</li>
                  ))}
              </ul>
              <button onClick={handleFinalSubmit} className="option-button-yes">
                Submit
              </button>
            </>
          )}
        </motion.div>
      )}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Thank you for reaching out to us!</h2>

            <p>
              Your inquiry has been successfully submitted.{" "}
              <span>
                {" "}
                Our team will review your request and respond within 24-48
                hours.
              </span>{" "}
              We look forward to working with you at media.CNR
            </p>

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
