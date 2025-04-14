import React from "react";
import "./TestimonialPage.css";
import MED1 from "../../../Images/moussa.jpg";
import MED2 from "../../../Images/man.jpg";
import FIRST from "../../../Images/first.jpg";

export default function TestimonialPage() {
  const testimonials = [
    {
      name: "Korlu’s Story : Breaking the Chains",
      role: "",
      rating: 4,
      image: FIRST,
      text: "At 12 years old, I was told my education was over. My parents, struggling to afford school fees, decided that it was time for me to prepare for marriage instead. I felt my dreams slipping away. I wanted to be a teacher, to stand in front of a classroom and inspire other children. But in my community, girls like me rarely got that chance. Then, Raising Lazarus stepped in. They offered me a scholarship and convinced my parents that my education mattered. That moment changed my life forever. I returned to school with a new sense of purpose, determined to prove that a girl’s value is not just in marriage, but in her dreams and abilities. I graduated high school at the top of my class, and now, I am on my way to becoming a teacher. I want to go back to my village, to stand in front of a classroom and teach young girls that they, too, have the right to learn and succeed. Thanks to Raising Lazarus, I am no longer just a girl with dreams—I am a girl making them come true.",
    },
    {
      name: "Boleae’s Story : Fighting for My Future",
      role: "",
      rating: 5,
      image: MED2,
      text: "I grew up believing that education was not meant for girls like me. In my village, boys went to school while girls stayed home, cooking, cleaning, and preparing for marriage. I watched my brothers leave every morning with their books, wishing I could do the same. But my family couldn't afford to send me to school, and I felt trapped in a life I didn’t choose. Then, Raising Lazarus changed everything. They gave me a scholarship, school supplies, and most importantly, the chance to dream. Stepping into a classroom for the first time, I felt like I was finally seen, finally valued. I worked hard, knowing that this opportunity was my key to freedom. Today, I am not just a girl from the village—I am a high school graduate preparing for university. I want to become a doctor, to help other girls realize that their future is worth fighting for. Raising Lazarus didn’t just give me an education; they gave me my voice, my confidence, and my future.",
    },
  ];

  return (
    <div className="testimonials">
      <div className="testimonials-header">
        <h2>
          Contributors <span>Testimonials</span>
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
