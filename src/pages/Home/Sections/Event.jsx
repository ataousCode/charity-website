import React from "react";
import FIRST from "../../../Images/med.jpg";
import EVENT1 from "../../../Images/med1.jpg";
import EVENT2 from "../../../Images/women.jpg";
import "./Event.css";

export default function Event() {
  const events = [
    {
      date: "25 Nov, 2023",
      image: FIRST,
      title: "Awareness & Community Engagement",
      description:
        "To raise awareness about the challenges women and girls face in accessing safe transportation, fostering community engagement, and promoting societal change towards a more equitable and mobile world.",
    },
    {
      date: "24 Jan, 2024",
      image: EVENT1,
      title: "Support Services",
      description:
        "To provide holistic support, including health care, counseling, shelter, and transportation solutions, ensuring that women and girls in crisis receive the care and mobility they need",
    },
    {
      date: "27 Oct, 2024",
      image: EVENT2,
      title: "Advocacy",
      description:
        "To advocate for the rights of women and girls, challenging systemic inequalities and promoting gender equality, with a focus on improving transportation access and safety",
    },
  ];

  return (
    <section className="events-section">
      <div className="events-container">
        <div className="events-header">
          <span className="subtitle">Events</span>
          <h2>Fundraising Events</h2>
          <p>
            It’s an excellent way to bring in funds while connecting with the
            local community.
          </p>
        </div>

        <div className="events-grid">
          {events.map((event, index) => (
            <div key={index} className="event-card">
              <div className="event-image">
                <img src={event.image} alt={event.title} />
              </div>
              <div className="event-content">
                <span className="event-date">{event.date}</span>
                <h3>{event.title}</h3>
                <p>{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
