import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Quick Links Section */}
        {/* <div className="quick-links">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <a href="/privacy-policy">Privacy Policy</a>
            </li>
            <li>
              <a href="/terms-of-service">Terms of Service</a>
            </li>
            <li>
              <a href="/about-us">About Us</a>
            </li>
            <li>
              <a href="/contact-us">Contact Us</a>
            </li>
          </ul>
        </div> */}

        {/* Contact Info Section */}
        {/* <div className="contact-info">
          <h4>Contact Info</h4>
          <ul>
            <li>Email: contact@mediacnr.com</li>
            <li>Phone: +1 800-123-4567</li>
            <li>Address: 123 Media Blvd, City, Country</li>
          </ul>
        </div> */}

        {/* Social Media Section */}
        {/* <div className="social-icons">
          <h4>Follow Us</h4>
          <div className="icons">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div> */}
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Media.CNR. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
