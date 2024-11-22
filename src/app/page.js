//src/app/page.js

"use client";

import Image from "next/image";
import styles from "./page.module.css";
import AboutUs from "./about/page";
import MissionVision from "./mission/page";
import Team from "./team/page";
import Services from "./services/page";
import ContactUs from "./contact/page";

export default function Home() {
  return (
    <div className="black text-foreground bg-background">
      {/* Landing Section */}
      <section className={styles.landingSection}>
        {/* Logo */}
        <div className={styles.logoWrapper}>
          <Image
            src="/media.png"
            alt="Logo"
            width={1500}
            height={1500}
            className={styles.logo}
          />
        </div>
      </section>

      <section id="about" className={styles.aboutSection}>
        <AboutUs />
      </section>

      <section id="mission-vision" className={styles.missionSection}>
        <MissionVision />
      </section>

      <section id="team" className={styles.teamSection}>
        <Team />
      </section>

      <section id="services" className={styles.servicesSection}>
        <Services />
      </section>

      <section id="contact-us" className={styles.contactSection}>
        <ContactUs />
      </section>
    </div>
  );
}
