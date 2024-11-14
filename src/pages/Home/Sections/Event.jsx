import React from "react";
import FIRST from "../../../Images/med.jpg";
import EVENT1 from "../../../Images/med1.jpg";
import EVENT2 from "../../../Images/med2.jpg";
import "./Event.css";

export default function Event() {
  const events = [
    {
      date: "25 Nov, 2023",
      image: FIRST,
      title: "Help The Poor From Your Soul",
      description:
        "A classic bake sale or themed food festival is a family-friendly event that brings people together over delicious treats.",
    },
    {
      date: "24 Jan, 2024",
      image: EVENT1,
      title: "Help Children Raise Out Of Proverty.",
      description:
        "Encourage community members to donate baked goods or dishes, and set up stalls for attendees to purchase them",
    },
    {
      date: "27 Oct, 2024",
      image: EVENT2,
      title: "Provideing Education Is The Valuable Gift",
      description:
        "For a food festival, offer a variety of cuisines or food trucks, with proceeds going toward the charity",
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
