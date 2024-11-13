import React from "react";
import volunteerPicture from "../../../Images/volunteer.png";
import "./Volunter.css";

function Volunter() {
  return (
    <div className="home-seventh-section">
      <div className="seventh-container">
        <div className="tablet-sevent-item">
          <div className="seventh-first-item">
            <h1>Lets Chenge The World With Humanity</h1>
          </div>
          <div className="seventh-second-item">
            {/* <button>Become A Volunteer</button> */}
            <a
              href="https://wa.me/+8615072486774?text=Hello,%20I'm%20interested%20in%20getting%20started!"
              target="_blank"
              rel="noopener noreferrer"
              className="navbar__get-started"
            >
              Become A Volunteer
            </a>
          </div>
        </div>
        <div className="seventh-third-item">
          <img
            src={volunteerPicture}
            alt="volunteer picture"
            id="volunteer-pic"
          />
        </div>
      </div>
    </div>
  );
}

export default Volunter;
