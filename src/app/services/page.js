"use client";

import React from "react";
import Link from "next/link";
import "../styles/Services.css";

const Services = () => {
  return (
    <section className="servicesSection">
      <div className="servicesHeading">Services</div>

      <div className="servicesList">
        <Link href="/services/administrative" passHref legacyBehavior>
          <a className="serviceItem">
            Administrative <span className="dot blue">•</span>
          </a>
        </Link>

        <Link href="/services/strategy" passHref legacyBehavior>
          <a className="serviceItemStrategy">
            Strategy & Consulting <span className="dot green">•</span>
          </a>
        </Link>

        <Link href="/services/design-development" passHref legacyBehavior>
          <a className="serviceItem">
            Design & Development <span className="dot purple">•</span>
          </a>
        </Link>

        <Link href="/services/specialized-services" passHref legacyBehavior>
          <a className="serviceItemSpecialized">
            Specialized Services <span className="dot red">•</span>
          </a>
        </Link>

        <Link
          href="/services/marketing-digital-marketing"
          passHref
          legacyBehavior
        >
          <a className="serviceItem">
            Marketing & Digital Marketing <span className="dot orange">•</span>
          </a>
        </Link>
      </div>
    </section>
  );
};

export default Services;
