import React from "react";
import { FaWallet } from "react-icons/fa";
import FIRST from "../../../Images/t1.jpg";
import "./FirstSection.css";
import OpenWhatShapp from "../../../components/Button/OpenWhatShapp";

export default function FirstSection() {
  return (
    <section className="first-section">
      <div className="content-container">
        <div className="left-content">
          <h1>Empowering Her Journey, Every Mile.</h1>
          <p>
            We help local nonprofits access the funding, tools, training, and
            support they need to become more.
          </p>
          <br />
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
        </div>
      </div>
    </section>
  );
}
