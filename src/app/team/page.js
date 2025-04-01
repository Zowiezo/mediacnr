"use client";

import React from "react";
import Image from "next/image";
import { FaLinkedin } from "react-icons/fa";
import "../styles/Team.css";

const Team = () => {
  return (
    <section className="team-section">
      {/* Team Heading */}
      <div className="team-heading">The Team</div>

      {/* Team Cards */}
      <div className="team-cards">
        {/* Card 1 */}
        <div className="team-card">
          <div className="team-image">
            <Image src="/zuki.svg" alt="Reyn CEO" width={250} height={250} />
          </div>
          <h3 className="team-name">Reneilwe "Reyn" Mgida</h3>
          <p className="team-role">CEO & Founder</p>
          <div className="team-socials">
            <a
              href="https://www.linkedin.com/in/reneilwe-mgida"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>

        {/* Card 2 */}
        <div className="team-card">
          <div className="team-image">
            <Image src="/zowie.svg" alt="Zowie CTO" width={250} height={250} />
          </div>
          <h3 className="team-name">Zoleka "Zowie" Kubheka</h3>
          <p className="team-role">CTO</p>
          <div className="team-socials">
            <a
              href="https://www.linkedin.com/in/zolekakubheka/"
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
