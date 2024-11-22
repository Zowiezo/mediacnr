"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "../styles/SpecializedServices.css";

const SpecializedServices = () => {
  const router = useRouter();

  const [currentSlide, setCurrentSlide] = useState(0);

  const servicesData = [
    {
      title: "Public Relations (PR) & Media Outreach",
      description:
        "We manage your brand’s reputation through media relations, press releases, crisis management, and thought leadership opportunities to enhance visibility and credibility.",
    },
    {
      title: "Event Marketing & Management",
      description:
        "We plan and execute brand events, including launches, activations, webinars, and virtual experiences, to create engaging opportunities for audience interaction and brand promotion.",
    },
    {
      title: "Video Production & Editing",
      description:
        "Our team offers full-scale video production, from scriptwriting and storyboarding to filming and post-production, ensuring high-quality video content that engages and converts.",
    },
    {
      title: "SEO & Content Marketing",
      description:
        "We create search-engine-optimized content to improve your website’s ranking on search engines, increasing organic traffic and visibility.",
    },
    {
      title: "Affiliate Marketing",
      description:
        "We help brands develop and manage affiliate marketing programs, partnering with relevant affiliates to drive traffic, leads, and sales.",
    },
    {
      title: "Lead Generation & Nurturing",
      description:
        "We implement strategies to generate leads, qualify them, and nurture them through targeted marketing until they’re ready for sales, ensuring a steady stream of potential clients.",
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

  // Function to navigate back to "Services" screen
  const goBack = () => {
    router.push("/services");
  };

  return (
    <section className="specialized-section">
      {/* Heading */}
      <h1 className="heading">
        Specialized Services
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

export default SpecializedServices;
