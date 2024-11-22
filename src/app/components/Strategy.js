"use client";

import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "../styles/Strategy.css";

const Strategy = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const servicesData = [
    {
      title: "Marketing Strategy Development",
      description:
        "We design fully customized marketing plans tailored to your business goals, including digital, traditional, and omnichannel strategies to ensure long-term growth.",
    },
    {
      title: "Brand Strategy & Development",
      description:
        "Our experts help craft a comprehensive brand strategy that differentiates your business and creates an emotional connection with your target market.",
    },
    {
      title: "Conversion Rate Optimization (CRO)",
      description:
        "We analyze your website and sales funnels to identify and implement improvements that increase the likelihood of turning visitors into paying customers.",
    },
    {
      title: "E-Commerce Strategy & Development",
      description:
        "We help businesses set up or improve their e-commerce presence, offering services such as product page optimization, payment gateway integration, and online sales strategy.",
    },
  ];

  const nextSlide = () => {
    if (currentSlide < servicesData.length - 2) {
      setCurrentSlide(currentSlide + 1);
    } else {
      setCurrentSlide(0); // Loop back to the first slide
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    } else {
      setCurrentSlide(servicesData.length - 2); // Loop back to the last slide
    }
  };

  return (
    <section className="strategy-section">
      {/* Heading */}
      <h1 className="heading">
        Strategy & Consulting Services
        <span className="heading-dot">•</span>
      </h1>

      {/* Slider */}
      <div className="slider-container">
        {/* Previous Slide Button */}
        <button className="slider-btn prev-btn" onClick={prevSlide}>
          <FaChevronLeft />
        </button>

        {/* Cards */}
        {servicesData
          .slice(currentSlide, currentSlide + 2)
          .map((service, index) => (
            <div key={index} className="card">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}

        {/* Next Slide Button */}
        <button className="slider-btn next-btn" onClick={nextSlide}>
          <FaChevronRight />
        </button>
      </div>

      {/* Slider Navigation (dots) */}
      <div className="slider-navigation">
        {servicesData.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`dot ${currentSlide === index ? "active" : ""}`}
          ></div>
        ))}
      </div>
    </section>
  );
};

export default Strategy;
