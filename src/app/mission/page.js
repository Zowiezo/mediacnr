"use client";

import React from "react";

const MissionVision = () => {
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
      {/* Rotated "Mission & Vision" Heading */}
      <div
        style={{
          transform: "rotate(-90deg)",
          transformOrigin: "left bottom",
          fontFamily: "Montserrat",
          fontSize: "5rem",
          fontWeight: 100,
          color: "#12FFC6",
          position: "absolute",
          left: "190px",
          bottom: "6%",
        }}
      >
        Mission & Vision
      </div>

      {/* Text Content */}
      <div
        style={{
          maxWidth: "900px",
          lineHeight: "1.8",
          fontSize: "1rem",
          marginLeft: "20rem",
          marginTop: "7rem",
          textAlign: "left",
          color: "white",
        }}
      >
        <h2
          style={{ fontWeight: "lighter", fontSize: "2rem", color: "#12FFC6" }}
        >
          Mission Statement
        </h2>
        <p>
          At Media.cnr, our mission is to bridge the gap between creativity and
          business by delivering comprehensive, high-quality services that
          empower brands to thrive in a competitive marketplace. Guided by
          integrity, transparency, and a client-first approach, we build lasting
          relationships through exceptional service, tailored strategies, and
          continuous support. Innovation and creativity are the driving forces
          behind everything we do, as we strive to deliver impactful, original
          solutions with precision and craftsmanship. As a black women-owned
          business, we are committed to fostering diversity and inclusion,
          ensuring fair opportunities, and creating an environment where all
          voices are valued and respected.
        </p>

        <h2
          style={{
            fontWeight: "100",
            fontSize: "2rem",
            color: "#12FFC6",
            marginTop: "3rem",
          }}
        >
          Vision Statement
        </h2>
        <p>
          Our vision is to be a leading force in the marketing and creative
          industry, known for empowering brands with innovative strategies that
          not only drive growth but also set new standards of excellence. We aim
          to continuously evolve with industry trends, leveraging new
          technologies and creative ideas to stay at the forefront of the
          market. As champions of diversity and inclusion, we envision a future
          where Media.cnr stands as a beacon for underrepresented voices in
          business, inspiring creativity, innovation, and fairness in every
          project we undertake.
        </p>
      </div>
    </section>
  );
};

export default MissionVision;
