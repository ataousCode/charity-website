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
        "There are many variations of passages of Lorem Ipsum available.",
    },
    {
      date: "24 Jan, 2024",
      image: EVENT1,
      title: "Help Children Raise Out Of Proverty.",
      description:
        "There are many variations of passages of Lorem Ipsum available.",
    },
    {
      date: "27 Oct, 2024",
      image: EVENT2,
      title: "Provideing Education Is The Valuable Gift",
      description:
        "There are many variations of passages of Lorem Ipsum available.",
    },
  ];

  return (
    <section className="events-section">
      <div className="events-container">
        <div className="events-header">
          <span className="subtitle">Events</span>
          <h2>Fundraising Events</h2>
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form,
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
