"use client";

import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { FaFacebook, FaInstagram } from "react-icons/fa";
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

  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const emailParams = {
      name: formData.name,
      surname: formData.surname,
      email: formData.email,
      number: formData.number,
      requestedServices: formData.requestedServices,
      message: formData.message,
    };

    try {
      const response = await emailjs.send(
        "service_4h9c1ji", // Replace with your EmailJS service ID
        "template_xjawtoa", // Replace with your EmailJS template ID
        emailParams,
        "roYbhd90GtWcwChYM" // Replace with your EmailJS public key
      );

      if (response.status === 200) {
        setShowModal(true);
        setFormData({
          name: "",
          surname: "",
          email: "",
          number: "",
          requestedServices: "",
          message: "",
        });

        setTimeout(() => {
          setShowModal(false);
        }, 10000);
      }
    } catch (err) {
      console.error("EmailJS error:", err);
      setError("Failed to send the message. Please try again later.");
    }
  };

  return (
    <section className="contact-section">
      <h1 className="heading">Contact Us</h1>

      <div className="intro-section">
        <h2>We’re Here to Help!</h2>
        <p style={{ marginBottom: "0.1rem" }}>
          Have questions or need assistance?
        </p>
        <p style={{ marginBottom: "1rem" }}>We’d love to hear from you.</p>
      </div>

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
              placeholder="info@mediacnr.co.za"
            />
          </label>
          <label>
            Number:
            <input
              type="tel"
              name="number"
              value={formData.number}
              onChange={handleChange}
              placeholder="071 234 5678"
            />
          </label>
          <label>
            Requested Service:
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
              placeholder="How may we help you?"
            />
          </label>
          <button type="submit" className="submit-btn">
            Submit
          </button>
        </form>
        {error && <p className="error-message">{error}</p>}
      </div>

      <div className="other-ways">
        <div className="ways">
          <div className="way">
            <h4
              style={{
                color: "#12ffc6",
                fontWeight: "200",
                fontSize: "1rem",
                marginBottom: "0.5rem",
              }}
            >
              📧 Email Us
            </h4>
            <p>
              <a href="mailto:info@mediacnr.co.za" className="contact-link">
                info@mediacnr.co.za
              </a>
            </p>
            <p>We typically respond within one to two business days.</p>
          </div>
          <div className="way">
            <h4
              style={{
                color: "#12ffc6",
                fontWeight: "200",
                fontSize: "1rem",
                marginBottom: "0.5rem",
              }}
            >
              📞 Call Us
            </h4>
            <p>
              <a href="tel:+27712345678" className="contact-link">
                +27 71 234 5678
              </a>
            </p>
            <p> Monday - Friday</p>
            <p> 9 AM - 6 PM</p>
          </div>
        </div>

        <div className="social-icons">
          <a
            href="https://facebook.com/profile.php?id=100069440251881"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook />
          </a>
          <a
            href="https://www.instagram.com/media.cnr/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
        </div>
      </div>

      <div className="privacy-assurance">
        <h4>Privacy Assurance</h4>
        <p>Your privacy is important to us.</p>
        <p>We never share your personal information with third parties.</p>
      </div>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2
              style={{
                marginBottom: "0.7rem",
                fontWeight: "200",
                color: "#12ffc6",
              }}
            >
              Thank you for contacting us!
            </h2>
            <p>We’ll respond to your inquiry within 24-48 hours.</p>
            <button
              className="close-modal-btn"
              onClick={() => setShowModal(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default ContactUs;
