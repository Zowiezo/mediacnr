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

  const [showModal, setShowModal] = useState(false); // State to show the success modal

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowModal(true); // Show the success modal
    setFormData({
      name: "",
      surname: "",
      email: "",
      number: "",
      requestedServices: "",
      message: "",
    }); // Clear the form
    setTimeout(() => {
      setShowModal(false); // Auto-hide the modal after 10 seconds
    }, 10000);
    // Handle actual form submission logic here
  };

  return (
    <section className="contact-section">
      {/* Heading */}
      <h1 className="heading">Contact Us</h1>

      {/* Introduction Section */}
      <div className="intro-section">
        <h2>We’re Here to Help!</h2>
        <p style={{ marginBottom: "0.1rem" }}>
          Have questions or need assistance?
        </p>
        <p style={{ marginBottom: "1rem" }}>We’d love to hear from you.</p>
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
              name="number"
              value={formData.number}
              onChange={handleChange}
              placeholder="071 234 5678"
            />
          </label>
          <label>
            Requested a Service:
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
      </div>

      {/* Other Ways to Reach Us */}
      <div className="other-ways">
        <div className="ways">
          {/* Email Us */}
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
            <p
              style={{
                marginBottom: "0.5rem",
              }}
            >
              <a
                href="mailto:info@mediacnr.org?subject=Enquiry&body=Hi Team,%0D%0A%0D%0AI have a question about your services%0D%0A%0D%0A%0D%0AKind Regards,"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                info@mediacnr.org
              </a>
            </p>
            <p>We typically respond within one to two business days.</p>
          </div>
          {/* Call Us */}
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
            <p
              style={{
                marginBottom: "0.5rem",
              }}
            >
              <a href="tel:+27712345678" className="contact-link">
                +27 71 234 5678
              </a>
            </p>
            <p> Monday - Friday</p>
            <p> 9 AM - 6 PM</p>
          </div>
        </div>

        {/* Follow Us */}
        <div className="social-icons">
          <a
            href="facebook.com/profile.php?id=100069440251881"
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

          <a
            href="https://www.linkedin.com/in/yourprofile" // Replace with your actual LinkedIn link
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>

      {/* Privacy Assurance */}
      <div className="privacy-assurance">
        <h4>Privacy Assurance</h4>
        <p>Your privacy is important to us.</p>
        <p>We never share your personal information with third parties.</p>
      </div>

      {/* Success Modal */}
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
            <p>We’ll respond to your inquiry within 24-48 hours. Stay tuned!</p>
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
