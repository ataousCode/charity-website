import React from "react";
import FIRST from "../../../Images/med4.jpg";
import Education from "../../../Images/med2.jpg";
import MED1 from "../../../Images/med1.jpg";
import auth from "../../../Images/img1.jpg";

import "./CampaignsPage.css";
import OpenWhatShapp from "../../../components/Button/OpenWhatShapp";

export default function CampaignsPage() {
  const campaigns = [
    {
      category: "Education",
      image: Education,
      title: "Help To Build a Secure Life Of a Poor Children.",
      progress: 65,
      goal: 3000.0,
      raised: 2000.0,
      author: {
        name: "Micheal G. Siaway",
        image: auth,
      },
    },
    {
      category: "Food",
      image: FIRST,
      title: "Ensure Clean Water To The Kids.",
      progress: 75,
      goal: 3000.0,
      raised: 2000.0,
      author: {
        name: "Micheal G. Siaway",
        image: auth,
      },
    },
    {
      category: "Medicine",
      image: MED1,
      title: "Your Help Can Save A Human Life From Death.",
      progress: 85,
      goal: 3000.0,
      raised: 2000.0,
      author: {
        name: "Micheal G. Siaway",
        image: auth,
      },
    },
  ];

  return (
    <div className="campaigns">
      <div className="campaigns-header">
        <span className="subtitle">We Love To Help Poor</span>
        <h2>Our Featured Campaigns</h2>
        <p>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form,
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
                  text="Donate Now"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
