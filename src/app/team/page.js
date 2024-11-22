"use client";

import React from "react";
import Image from "next/image";
import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";

const Team = () => {
  return (
    <section
      style={{
        display: "flex",
        height: "100vh",
        backgroundColor: "black",
        color: "white",
        padding: "2rem",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* Team Heading (Similar to About Us and Mission & Vision) */}
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
          marginTop: "15%",
        }}
      >
        Team
      </div>

      {/* Team Cards */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          width: "100%",
          maxWidth: "1200px",
          marginTop: "1rem",
          marginLeft: "10rem",
        }}
      >
        {/* Card 1 */}
        <div
          style={{
            backgroundColor: "black",
            width: "250px",
            padding: "1.5rem",
            borderRadius: "10px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)",
            textAlign: "center",
            position: "relative",
          }}
        >
          <div
            style={{
              width: "250px",
              height: "250px",
              borderRadius: "50%",
              margin: "0 auto",
              overflow: "hidden",
              boxShadow: "0 4px 20px rgba(18, 255, 198, 0.6)",
            }}
          >
            <Image
              src="/team-member1.jpg"
              alt="Team Member 1"
              width={250}
              height={250}
              style={{ objectFit: "cover" }}
            />
          </div>
          <h3
            style={{
              color: "white",
              // marginTop: "1.5rem",
              fontSize: "1.2rem",
              marginTop: "3rem",
              marginLeft: "3rem",
            }}
          >
            Reneilwe "Reyn" Mgida{" "}
          </h3>
          <p
            style={{
              color: "#12FFC6",
              fontSize: "1rem",
              marginTop: "1.5rem",
              marginLeft: "3rem",
            }}
          >
            CEO & Founder
          </p>

          {/* Social Links (Using React Icons) */}
          <div
            style={{
              marginTop: "1.5rem",
              display: "flex",
              justifyContent: "center",
              gap: "1.5rem",
              marginLeft: "3rem",
            }}
          >
            <a
              href="#"
              style={{ color: "#12FFC6" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="#"
              style={{ color: "#12FFC6" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook size={24} />
            </a>
            <a
              href="#"
              style={{ color: "#12FFC6" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>

        {/* Card 2 */}
        <div
          style={{
            backgroundColor: "black",
            width: "250px",
            padding: "1.5rem",
            borderRadius: "10px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            textAlign: "center",
            position: "relative",
            marginRight: "5rem",
          }}
        >
          <div
            style={{
              width: "250px",
              height: "250px",
              borderRadius: "50%",
              margin: "0 auto",
              overflow: "hidden",
              boxShadow: "0 4px 20px rgba(18, 255, 198, 0.6)",
            }}
          >
            <Image
              src="/team-member2.jpg"
              alt="Team Member 2"
              width={250}
              height={250}
              style={{ objectFit: "cover" }}
            />
          </div>
          <h3
            style={{
              color: "white",
              fontSize: "1.2rem",
              marginTop: "3rem",
              marginLeft: "3rem",
            }}
          >
            Zoleka "Zowie" Kubheka
          </h3>
          <p
            style={{
              color: "#12FFC6",
              fontSize: "1rem",
              marginTop: "1.5rem",
              marginLeft: "3rem",
            }}
          >
            CTO
          </p>

          {/* Social Links (Using React Icons) */}
          <div
            style={{
              marginTop: "1.5rem",
              display: "flex",
              justifyContent: "center",
              gap: "1.5rem",
              marginLeft: "3rem",
            }}
          >
            <a
              href="#"
              style={{ color: "#12FFC6" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="#"
              style={{ color: "#12FFC6" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook size={24} />
            </a>
            <a
              href="#"
              style={{ color: "#12FFC6" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
