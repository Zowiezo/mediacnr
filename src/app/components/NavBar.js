"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={styles.navbar}>
      {/* Logo */}
      <div className={styles.logoWrapper}>
        <Link href="/">
          <Image
            src="/logo.svg"
            alt="Logo"
            width={170}
            height={70}
            priority
            className={styles.logo}
          />
        </Link>
      </div>

      {/* Hamburger / Close Button */}
      <button
        className={`${styles.menuButton} ${isMenuOpen ? styles.close : ""}`}
        onClick={toggleMenu}
        aria-label="Toggle Menu"
      >
        {isMenuOpen ? <span className={styles.closeIcon}>✖</span> : "☰"}
      </button>

      {/* Full Page Menu */}
      <nav
        className={`${styles.fullPageMenu} ${
          isMenuOpen ? styles.openMenu : ""
        }`}
      >
        <Link href="/about" className={styles.navLink} onClick={closeMenu}>
          About Us
        </Link>

        {/* <Link href="/mission" className={styles.navLink} onClick={closeMenu}>
          Mission & Vision
        </Link> */}

        <Link href="/services" className={styles.navLink} onClick={closeMenu}>
          Services
        </Link>

        <Link href="/team" className={styles.navLink} onClick={closeMenu}>
          Team
        </Link>

        <Link href="/contact" className={styles.navLink} onClick={closeMenu}>
          Contact Us
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
