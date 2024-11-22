"use client";

import React, { useState } from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import "../styles/ContactUs.css";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    number: "",
    requestedServices: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    alert("Form Submitted!");
  };

  return (
    <section className="contact-section">
      {/* Heading */}
      <h1 className="heading">Contact Us</h1>

      {/* Contact Info */}
      <div className="contact-info">
        <a href="mailto:info@mediacnr.org?subject=Inquiry&body=Hello%2C%20I%20have%20a%20question%20about%20your%20services">
          info@mediacnr.org
        </a>
        <p>
          Cell: <a href="tel:+27112345678">071 234 5678</a>
        </p>
        <div className="social-icons">
          <FaFacebook />
          <FaInstagram />
          <FaLinkedin />
        </div>
      </div>

      {/* Contact Form */}
      <div className="contact-form-card">
        <form onSubmit={handleSubmit} className="contact-form">
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="John"
            />
          </label>
          <label>
            Surname:
            <input
              type="text"
              name="surname"
              value={formData.surname}
              onChange={handleChange}
              required
              placeholder="Smith"
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="info@mediacnr.org"
            />
          </label>
          <label>
            Number:
            <input
              type="tel"
              name="cellphone number"
              value={formData.number}
              onChange={handleChange}
              // required
              placeholder="071 234 5678"
            />
          </label>
          <label>
            Requested a Services:
            <select
              name="requestedServices"
              value={formData.requestedServices}
              onChange={handleChange}
              required
            >
              <option value="">Select Service</option>
              <option value="Administrative">Administrative</option>
              <option value="Strategy & Consulting">
                Strategy & Consulting
              </option>
              <option value="Design & Development">Design & Development</option>
              <option value="Specialized Services">Specialized Services</option>
              <option value="Marketing & Digital Marketing">
                Marketing & Digital Marketing
              </option>
              <option value="Enquiry">Enquiry</option>
            </select>
          </label>
          <label>
            Message:
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="How may we help you?"
            />
          </label>
          <button type="submit" className="submit-btn">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
