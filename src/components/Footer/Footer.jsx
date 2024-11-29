import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import FIRST from "../../Images/med1.jpg";
import EVENT1 from "../../Images/med2.jpg";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <div className="footer-logo">
            <span className="logo-icon">⬡</span>
            <span className="logo-text">Raising Lazarus</span>
          </div>
          <p className="footer-description">
            We Chenge The World With Humanity
          </p>
          <div className="social-links">
            <a
              href="https://www.facebook.com/share/1DTyfFnWHT/?mibextid=LQQJ4d"
              target="_blank"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.instagram.com/raisinglazarusnonprofit/profilecard/?igsh=MTJlaTd0N202ajFs"
              target="_blank"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
          </div>
        </div>

        <div className="footer-section">
          <h3>Contact Us</h3>
          <div className="contact-info">
            <div className="contact-item">
              <FaPhone />
              <span>07727584237 / 0886399378</span>
            </div>
            <div className="contact-item">
              <FaEnvelope />
              <span>raisinglazarusnonprofits@gmail.com</span>
            </div>
            <div className="contact-item">
              <FaMapMarkerAlt />
              <span>Cook-Spoon Hill Community, Monrovia-Liberia</span>
            </div>
          </div>
        </div>

        <div className="footer-section">
          <h3>Pages</h3>
          <ul className="footer-links">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/services">Vision</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
            <li>
              <a href="/">Donation</a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Popular Posts</h3>
          <div className="popular-posts">
            <div className="post">
              <img src={EVENT1} alt="Blog post" />
              <div className="post-info">
                <h4>
                  Empower women and young girls by providing access to
                  agricultural education.
                </h4>
                <span className="post-date">October 27, 2024</span>
              </div>
            </div>
            <div className="post">
              <img src={FIRST} alt="Blog post" />
              <div className="post-info">
                <h4>
                  Promote gender equality, and support the development of
                  sustainable agricultural practices that uplift entire
                  communities
                </h4>
                <span className="post-date">October 19, 2024</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© Raising Lazarus All Rights Reserved</p>
        <div className="footer-bottom-links">
          <a href="#">Trams & Condition</a>
          <a href="#">Privacy Policy</a>
          <a href="/">Contact Us</a>
        </div>
      </div>
    </footer>
  );
}
