//src/app/pages/services.js

"use client";

import React from "react";
import Link from "next/link";

const Services = () => {
  return (
    <section
      style={{
        position: "relative",
        height: "100vh",
        backgroundColor: "black",
        color: "white",
        padding: "2rem",
      }}
    >
      {/* Services Heading */}
      <div
        style={{
          transform: "rotate(-90deg)",
          transformOrigin: "left bottom",
          fontFamily: "Montserrat",
          fontSize: "10rem",
          fontWeight: 100,
          color: "#12FFC6",
          position: "absolute",
          left: "250px",
          marginTop: "35%",
        }}
      >
        Services
      </div>

      {/* Services List */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginTop: "5rem",
          gap: "1.5rem",
        }}
      >
        {/* Service 1: Administrative */}
        <Link href="/services/administrative" passHref>
          <div
            style={{
              position: "absolute",
              top: "140px",
              left: "400px",
              color: "white",
              fontSize: "3rem",
              fontWeight: 100,
              fontFamily: "Montserrat",
              display: "flex",
              alignItems: "center",
              cursor: "pointer",
            }}
          >
            Administrative
            <span
              style={{
                color: "#1263FF",
                fontSize: "5rem",
                marginTop: "6px",
              }}
            >
              •
            </span>
          </div>
        </Link>

        {/* Service 2: Strategy & Consulting */}
        <Link href="/services/strategy" passHref>
          <div
            style={{
              position: "absolute",
              top: "240px",
              left: "600px",
              color: "white",
              fontSize: "3rem",
              fontWeight: 100,
              fontFamily: "Montserrat",
              display: "flex",
              alignItems: "center",
              cursor: "pointer",
            }}
          >
            Strategy & Consulting
            <span
              style={{ color: "#2DAD00", fontSize: "5rem", marginTop: "6px" }}
            >
              •
            </span>
          </div>
        </Link>

        {/* Service 3: Design & Development */}
        <Link href="/services/design-development" passHref>
          <div
            style={{
              position: "absolute",
              top: "340px",
              left: "400px",
              color: "white",
              fontSize: "3rem",
              fontWeight: 100,
              fontFamily: "Montserrat",
              display: "flex",
              alignItems: "center",
              cursor: "pointer",
            }}
          >
            Design & Development
            <span
              style={{ color: "#DE12FF", fontSize: "5rem", marginTop: "6px" }}
            >
              •
            </span>
          </div>
        </Link>

        {/* Service 4: Specialized Services */}
        <Link href="/services/specialized-services" passHref>
          <div
            style={{
              position: "absolute",
              top: "440px",
              left: "600px",
              color: "white",
              fontSize: "3rem",
              fontWeight: 100,
              fontFamily: "Montserrat",
              display: "flex",
              alignItems: "center",
              cursor: "pointer",
            }}
          >
            Specialized Services
            <span
              style={{ color: "#ff0000", fontSize: "5rem", marginTop: "6px" }}
            >
              •
            </span>
          </div>
        </Link>

        {/* Service 5: Marketing & Digital Marketing */}
        <Link href="/services/marketing-digital-marketing" passHref>
          <div
            style={{
              position: "absolute",
              top: "540px",
              left: "400px",
              color: "white",
              fontSize: "3rem",
              fontWeight: 100,
              fontFamily: "Montserrat",
              display: "flex",
              alignItems: "center",
              cursor: "pointer",
            }}
          >
            Marketing & Digital Marketing
            <span
              style={{ color: "#FFA800", fontSize: "5rem", marginTop: "6px" }}
            >
              •
            </span>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Services;
