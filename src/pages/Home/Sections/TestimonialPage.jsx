import React from "react";
import "./TestimonialPage.css";
import FIRST from "../../../Images/first.jpg";

export default function TestimonialPage() {
  const testimonials = [
    {
      name: "Donald Jackman",
      role: "",
      rating: 5,
      image: FIRST,
      text: "From the very first meeting, they understood my vision and helped me find the perfect property. Their attention to detail and commitment to client satisfaction is unmatched.",
    },
    {
      name: "Richard Nelson",
      role: "",
      rating: 4,
      image: FIRST,
      text: "From the very first meeting, they understood my vision and helped me find the perfect property. Their attention to detail and commitment to client satisfaction is unmatched.",
    },
    {
      name: "James Washington",
      role: "",
      rating: 5,
      image: FIRST,
      text: "From the very first meeting, they understood my vision and helped me find the perfect property. Their attention to detail and commitment to client satisfaction is unmatched.",
    },
  ];

  return (
    <div className="testimonials">
      <div className="testimonials-header">
        <h2>
          Customer <span>Testimonials</span>
        </h2>
        <h2>
          <span>Real Stories from Those Who Found Home with Us</span>
        </h2>
      </div>

      <div className="testimonials-grid">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="testimonial-image"
            />
            <h3>{testimonial.name}</h3>
            <p className="role">{testimonial.role}</p>
            <div className="rating">
              {[...Array(testimonial.rating)].map((_, i) => (
                <span key={i} className="star">
                  ★
                </span>
              ))}
            </div>
            <p className="testimonial-text">{testimonial.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
