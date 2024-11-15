import React from "react";
import { FaWallet } from "react-icons/fa";
import FIRST from "../../../Images/chart.webp";
import "./FirstSection.css";
import OpenWhatShapp from "../../../components/Button/OpenWhatShapp";

export default function FirstSection() {
  return (
    <section className="first-section">
      <div className="content-container">
        <div className="left-content">
          {/* <span className="highlight-text">Help The Poor Children</span> */}
          <h1>Your Mercy Can Change Someone's Life</h1>
          <p>
            We help local nonprofits access the funding, tools, training, and
            support they need to become more.
          </p>
          <br />
          {/* <button className="get-started-btn">Donate Now</button> */}
          {/* <a
            href="https://wa.me/+8615072486774?text=Hello,%20I'm%20interested%20in%20getting%20started!"
            target="_blank"
            rel="noopener noreferrer"
            className="navbar__get-started"
          >
            Donate now
          </a> */}
          <OpenWhatShapp
            href="https://wa.me/1234567890?text=Hello,%20I'm%20interested%20in%20getting%20started!"
            text="Donate Now"
          />
        </div>

        <div className="right-content">
          <div className="main-image-container">
            <img
              src={FIRST}
              alt="Child with backpack smiling"
              className="main-image"
            />
          </div>

          <div className="stats-card">
            <div className="stats-icon">
              <FaWallet />
            </div>
            <div className="stats-text">
              <span className="stats-number">252+</span>
              <span className="stats-label">Total Projects</span>
            </div>
          </div>

          {/* <div className="avatar-group">
            {[1, 2, 3, 4, 5].map((index) => (
              <div key={index} className="avatar">
                <img
                  src={`/placeholder.svg?height=40&width=40`}
                  alt={`Supporter ${index}`}
                />
              </div>
            ))}
          </div> */}
        </div>
      </div>
    </section>
  );
}
