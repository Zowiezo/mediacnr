"use client";

import React from "react";

const AboutUs = () => {
  return (
    <section
      style={{
        display: "flex",
        height: "100vh",
        backgroundColor: "black",
        padding: "2rem",
        position: "relative",
        flexDirection: "row",
      }}
    >
      {/* Rotated "About Us" Heading */}
      <div
        style={{
          transform: "rotate(-90deg)",
          transformOrigin: "left bottom",
          fontFamily: "Montserrat",
          fontSize: "9rem",
          fontWeight: 100,
          color: "#12FFC6",
          position: "absolute",
          left: "250px",
          bottom: "6%",
        }}
      >
        About Us
      </div>

      {/* Text Content */}
      <div
        style={{
          maxWidth: "700px",
          lineHeight: "1.8",
          fontSize: "1rem",
          marginLeft: "25rem",
          marginTop: "8rem",
          textAlign: "left",
          color: "#fff",
          fontWeight: "100",
        }}
      >
        <p style={{ marginBottom: "1.2rem" }}>
          At Media.CNR, we are dedicated to empowering businesses by delivering
          innovative marketing solutions and strategic guidance. Founded by a
          multifaceted professional with a deep passion for marketing strategy,
          event management, and social media management, Media.CNR bridges the
          gap between creativity and business.
        </p>
        <p style={{ marginBottom: "1.2rem" }}>
          Our approach is rooted in understanding the unique challenges of
          today’s competitive landscape. We develop comprehensive marketing
          plans, backed by in-depth market research and data-driven insights, to
          ensure that every strategy is tailored to meet your specific goals.
          Whether it’s managing high-impact events, optimizing your digital
          presence, or crafting compelling content, we are here to elevate your
          brand and connect you with your target audience.
        </p>
        <p style={{ marginBottom: "1.2rem" }}>
          At Media.CNR, we pride ourselves on our commitment to precision,
          attention to detail, and a client-centric focus. We believe in the
          power of continuous learning and adaptation, staying at the forefront
          of industry trends and leveraging new technologies to give you a
          competitive edge.
        </p>
        {/* <p style={{ marginBottom: "1.2rem" }}>
          Let us help you navigate the complexities of the market, providing the
          tools and insights necessary to achieve lasting growth and success.
        </p> */}
      </div>
    </section>
  );
};

export default AboutUs;
