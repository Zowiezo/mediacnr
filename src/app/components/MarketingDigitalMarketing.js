"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "../styles/MarketingDigitalMarketing.css";

const MarketingDigitalMarketing = () => {
  const router = useRouter();
  const [currentSlide, setCurrentSlide] = useState(0);

  const servicesData = [
    {
      title: "Social Media & Marketing Support",
      description:
        "From social media strategy to daily content management, our team ensures your social platforms reflect your brand's voice and engage your audience effectively.",
    },
    {
      title: "Digital Marketing & Strategy",
      description:
        "We develop integrated digital strategies, encompassing SEO (search engine optimization), SEM (search engine marketing), email marketing, content marketing, and social advertising to maximize your online visibility.",
    },
    {
      title: "Paid Advertising (PPC, Social Media Ads)",
      description:
        "Our paid media specialists design and manage pay-per-click (PPC) campaigns across platforms like Google Ads, Facebook, and Instagram to drive high-quality leads and conversions for your business.",
    },
    {
      title: "All Types of Marketing",
      description:
        "We execute 360° marketing strategies, including traditional marketing methods such as TV, radio, print, direct mail, and event marketing, ensuring your brand has full visibility across all channels.",
    },
    {
      title: "Marketing Automation & CRM",
      description:
        "We integrate and manage customer relationship management (CRM) tools and marketing automation platforms to streamline your marketing efforts and maintain consistent communication with your audience.",
    },
    {
      title: "Email Marketing",
      description:
        "We design and execute email marketing campaigns that keep your audience engaged and drive conversions, with personalized and targeted messaging.",
    },
    {
      title: "Marketing Research & Consulting",
      description:
        "Our team provides data-driven market research, competitor analysis, and industry insights to inform your business decisions and help you capitalize on market trends.",
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
    <section className="marketing-section">
      {/* Heading */}
      <h1 className="heading">
        Marketing & Digital Marketing
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

export default MarketingDigitalMarketing;
