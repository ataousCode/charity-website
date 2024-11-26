import React from "react";
import FIRST from "../../../Images/t3.jpg";
import Education from "../../../Images/t2.jpg";
import MED1 from "../../../Images/t4.jpg";
import FEE from "../../../Images/fee1.jpg";
import auth from "../../../Images/img1.jpg";
import OpenWhatShapp from "../../../components/Button/OpenWhatShapp";

import "./CampaignsPage.css";

export default function CampaignsPage() {
  const campaigns = [
    {
      category: "Education",
      image: Education,
      title:
        "To equip women and girls with the education and skills they need to lead independent and fulfilled lives, including training on safe and effective use of transportation tools.",
      progress: 65,
      goal: 3000.0,
      raised: 2000.0,
      author: {
        name: "Michael G. Siaway",
        image: auth,
      },
    },
    {
      category: "Agriculture",
      image: FIRST,
      title:
        "To empower women and young girls by providing access to agricultural education, resources and opportunities. Foster resilience, promote gender equality",
      progress: 75,
      goal: 3000.0,
      raised: 2000.0,
      author: {
        name: "Michael G. Siaway",
        image: auth,
      },
    },
    {
      category: "Transportation",
      image: MED1,
      title:
        "To empower women and girls by providing access to affordable and sustainable transportation options, such as bikes, auto rickshaws and scooters",
      progress: 85,
      goal: 3000.0,
      raised: 2000.0,
      author: {
        name: "Michael G. Siaway",
        image: auth,
      },
    },
    {
      category: "FEEDING",
      image: FEE,
      title:
        "Mission statement: Empowering communities by providing nutritious meals to combat hunger, nurture health, and inspire hope for a brighter future.",
      progress: 85,
      goal: 3000.0,
      raised: 2000.0,
      author: {
        name: "Michael G. Siaway",
        image: auth,
      },
    },
  ];

  return (
    <div className="campaigns">
      <div className="campaigns-header">
        <span className="subtitle">We Love To Help Poor Children</span>
        <h2>Our Featured Campaigns</h2>
        <p>
          Organize a formal event, such as a gala dinner, where attendees enjoy
          an elegant meal, entertainment, and a program that highlights the
          charity’s impact. Benefit concerts are another engaging option,
          featuring local musicians or speakers. These events can include silent
          auctions, raffles, or a donation appeal to increase contributions
          throughout the night.
        </p>
      </div>

      <div className="campaigns-grid">
        {campaigns.map((campaign, index) => (
          <div key={index} className="campaign-card">
            <div className="campaign-image">
              <img src={campaign.image} alt={campaign.title} />
              <span className="category-tag">{campaign.category}</span>
            </div>

            <div className="campaign-content">
              <h3>{campaign.title}</h3>

              <div className="progress-container">
                <div
                  className="progress-bar"
                  style={{ width: `${campaign.progress}%` }}
                >
                  <span className="progress-text">{campaign.progress}%</span>
                </div>
              </div>

              <div className="campaign-stats">
                <div className="stat">
                  <span className="label">Goal:</span>
                  <span className="value">${campaign.goal.toFixed(2)}</span>
                </div>
                <div className="stat">
                  <span className="label">Raised:</span>
                  <span className="value">${campaign.raised.toFixed(2)}</span>
                </div>
              </div>

              <div className="campaign-footer">
                <div className="author">
                  <img src={campaign.author.image} alt={campaign.author.name} />
                  <span>{campaign.author.name}</span>
                </div>
                {/* <button className="donate-btn">Donate Now</button> */}
                <OpenWhatShapp
                  href="https://wa.me/1234567890?text=Hello,%20I'm%20interested%20in%20getting%20started!"
                  text="Donate"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
