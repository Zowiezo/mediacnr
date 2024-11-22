// src/app/components/Navbar.js
"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        backgroundColor: "black",
        zIndex: 1000,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0.5rem 1rem",
      }}
    >
      {/* Logo */}
      <div style={{ display: "flex", alignItems: "center" }}>
        <Link href="/">
          <Image
            src="/logo.svg"
            alt="Logo"
            width={170}
            height={70}
            priority
            style={{ cursor: "pointer" }}
            backgroundColor="black"
          />
        </Link>
      </div>

      {/* Hamburger Menu */}
      <button
        style={{
          backgroundColor: "transparent",
          border: "none",
          cursor: "pointer",
          color: "#12FFC6",
          fontSize: "2.5rem",
          marginRight: "60px",
        }}
        aria-label="Menu"
      >
        ☰
      </button>
    </header>
  );
};

export default Navbar;
