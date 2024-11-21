import React, { useState } from "react";
import { FaEnvelope, FaWhatsapp, FaFacebookSquare } from "react-icons/fa";
import "./ContactUs.css";

export default function ContactUs() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    await new Promise((resolve) => setTimeout(resolve, 3000));
    const success = Math.random() > 0.5;
    setStatus(success ? "success" : "error");

    if (success) {
      setFormState({
        name: "",
        email: "",
        message: "",
      });
    }

    setTimeout(() => setStatus(null), 3000);
  };

  return (
    <div className="contact-us">
      <div className="contact-header">
        <h1>Have Any Questions?</h1>
        <p>
          We're here to help make a difference together! Whether you have
          questions about our projects, get in touch with us.
        </p>
      </div>
      <div className="contact-content">
        <div className="contact-options">
          <div className="contact-card">
            <FaEnvelope className="icon" />
            <h3>Email</h3>
            <p>almouslecka@gmail.com</p>
            <a href="mailto:almouslecka@gmail.com">Send a message</a>
          </div>
          <div className="contact-card">
            <FaWhatsapp className="icon" />
            <h3>WhatsApp</h3>
            <a href="#">Send a message</a>
          </div>
          <div className="contact-card">
            <FaFacebookSquare className="icon" />
            <h3>FaceBook</h3>
            <a href="#">Send a message</a>
          </div>
        </div>
        <div className="contact-form">
          <h2>Get In Touch</h2>
         
          <br />
          <br />
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              value={formState.name}
              onChange={handleInputChange}
              placeholder="Enter your full name"
              required
            />
            <input
              type="email"
              name="email"
              value={formState.email}
              onChange={handleInputChange}
              placeholder="Enter your email"
              required
            />
            <textarea
              name="message"
              value={formState.message}
              onChange={handleInputChange}
              placeholder="Your message"
              required
            ></textarea>
            <button type="submit" disabled={status === "loading"}>
              {status === "loading" ? "Sending..." : "Send"}
            </button>
            {status === "success" && (
              <p className="success-message">Thank you, your me message has been sent successfully! we'll get back to you in 24 hours</p>
            )}
            {status === "error" && (
              <p className="error-message">
                Failed to send message. Please try again.
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
