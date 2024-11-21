import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPaperPlane,
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
            Lorem ipsum dolor sit amet consectetur Augue id fermentum
          </p>
          <div className="social-links">
            <a href="#" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="#" aria-label="Twitter">
              <FaTwitter />
            </a>
            <a href="#" aria-label="Instagram">
              <FaInstagram />
            </a>
          </div>
        </div>

        <div className="footer-section">
          <h3>Contact Us</h3>
          <div className="contact-info">
            <div className="contact-item">
              <FaPhone />
              <span>0772758423</span>
            </div>
            <div className="contact-item">
              <FaEnvelope />
              <span>raisinglazarusnonprofit@gmail.com</span>
            </div>
            <div className="contact-item">
              <FaMapMarkerAlt />
              <span>Cook-Spoon Hill Community, Monrovia-Liberia</span>
            </div>
          </div>
        </div>

        <div className="footer-section">
          <h3>Free Links</h3>
          <ul className="footer-links">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Donation</a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Popular Posts</h3>
          <div className="popular-posts">
            <div className="post">
              <img src={EVENT1} alt="Blog post" />
              <div className="post-info">
                <h4>Lorem ipsum dolor sit amet consectetur.</h4>
                <span className="post-date">October 27, 2024</span>
              </div>
            </div>
            <div className="post">
              <img src={FIRST} alt="Blog post" />
              <div className="post-info">
                <h4>Lorem ipsum dolor sit amet consectetur.</h4>
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
          <a href="#">Contact Us</a>
        </div>
      </div>
    </footer>
  );
}
