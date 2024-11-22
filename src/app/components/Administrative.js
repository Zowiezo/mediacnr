"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "../styles/Administrative.css";

const Administrative = () => {
  const router = useRouter();
  const [currentSlide, setCurrentSlide] = useState(0);

  const servicesData = [
    {
      title: "Admin & Office Management",
      description:
        "We offer comprehensive administrative support, including virtual assistance, office management, calendar management, email handling, and all related admin tasks to help streamline your operations.",
    },
    {
      title: "Sales & Client Support",
      description:
        "Our team provides client-facing services to handle sales inquiries, follow-ups, and after-sales support, ensuring that your clients receive a seamless experience and are well taken care of.",
    },
    {
      title: "Compliance & Legal Support",
      description:
        "We assist with legal document preparation, compliance checks, and maintaining industry standards, ensuring your business operates legally and efficiently.",
    },
  ];

  // Function to move to the next slide
  const nextSlide = () => {
    if (currentSlide < servicesData.length - 2) {
      setCurrentSlide(currentSlide + 1);
    } else {
      setCurrentSlide(0);
    }
  };

  // Function to move to the previous slide
  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    } else {
      setCurrentSlide(servicesData.length - 2);
    }
  };

  // Function to navigate back to "Services" screen
  const goBack = () => {
    router.push("/services");
  };

  return (
    <section className="administrative-section">
      {/* Heading */}
      <h1 className="heading">
        Administrative Services
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

      {/* Back Button in Bottom Right */}
      <button
        className="back-btn"
        onClick={goBack}
        aria-label="Back to Services"
      >
        ← Services
      </button>
    </section>
  );
};

export default Administrative;
