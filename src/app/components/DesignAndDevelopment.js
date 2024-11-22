"use client";

import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "../styles/DesignAndDevelopment.css";

const DesignAndDevelopment = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const servicesData = [
    {
      title: "Content Creation & Marketing",
      description:
        "We produce high-quality content, from blog posts and social media visuals to video production and motion graphics, ensuring your brand story is compelling and consistent.",
    },
    {
      title: "Web Design & Graphic Design",
      description:
        "We create intuitive, responsive websites that focus on user experience, along with stunning graphic designs for both print and digital needs, ensuring a cohesive brand image across all touch-points.",
    },
    {
      title: "Website Development",
      description:
        "Our development team builds high-performance websites with custom functionalities tailored to your business needs, ensuring your site is both beautiful and powerful.",
    },
    {
      title: "Branding & Development",
      description:
        "We develop comprehensive brand identity packages, including logo creation, typography, and brand guidelines to ensure consistent communication and visual representation of your brand across all platforms.",
    },
    {
      title: "Influencer Marketing",
      description:
        "We identify and connect with influencers that align with your brand, helping you leverage their following to build credibility and expand your reach.",
    },
  ];

  const nextSlide = () => {
    if (currentSlide < servicesData.length - 2) {
      setCurrentSlide(currentSlide + 1);
    } else {
      setCurrentSlide(0);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    } else {
      setCurrentSlide(servicesData.length - 2);
    }
  };

  return (
    <section className="design-section">
      {/* Heading */}
      <h1 className="heading">
        Design & Development Services
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

export default DesignAndDevelopment;
