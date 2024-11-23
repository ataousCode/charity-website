import React from "react";
import { Apple, Droplets, GraduationCap } from "lucide-react";
import FIRST from "../../../Images/medchar.webp";

import "./CharityPage.css";

export default function CharityPage() {
  return (
    <main className="container">
      {/* Services Section
      <section className="services-grid">
        <div className="service-card bg-mint">
          <div className="icon-wrapper">
            <Apple className="icon" />
          </div>
          <h3>Transportation</h3>
        </div>

        <div className="service-card bg-peach">
          <div className="icon-wrapper">
            <Droplets className="icon" />
          </div>
          <h3>Agriculture</h3>
        </div>

        <div className="service-card bg-lemon">
          <div className="icon-wrapper">
            <GraduationCap className="icon" />
          </div>
          <h3>Education</h3>
        </div>
      </section> */}

      {/* About Section */}
      <section className="about-section">
        <div className="image-container">
          <img
            src={FIRST}
            alt="Happy child playing with autumn leaves"
            className="about-image"
          />
          <div className="total-raised">
            <div className="raised-icon">$</div>
            <div>
              <p>Total Raised</p>
              <p className="raised-amount">$25000</p>
            </div>
          </div>
        </div>

        <div className="about-content">
          <span className="about-label">About Us</span>
          <h2>We Can Save More Lives With Your Helping Hand.</h2>
          <p>
            A classic bake sale or themed food festival is a family-friendly
            event that brings people together over delicious treats. Encourage
            community members to donate baked goods or dishes, and set up stalls
            for attendees to purchase them. For a food festival, offer a variety
            of cuisines or food trucks, with proceeds going toward the charity.
            It’s an excellent way to bring in funds while connecting with the
            local community.
          </p>
          <ul className="feature-list">
            {[
              "The standard chunk of Lorem Ipsum used since.",
              "Randomised words which don't look even slightly believable.",
              "Making this the first true generator on the Internet.",
            ].map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <button className="more-about-btn">
            <a href="/about">About us</a>
          </button>
        </div>
      </section>
    </main>
  );
}
