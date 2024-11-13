import React from "react";
import Volunter from "../Home/Sections/Volunter";
import { ArrowRight } from "lucide-react";
import FIRST from "../../Images/first.jpg";
import women from "../../Images/women.jpg";
import "./Services.css";
import FirstPage from "./FirstPage";

export default function Services() {
  const brandingServices = [
    "Poverty Reduction, through Agriculture",
    "Capacity Building through education",
    "Transportation",
    "Social and Physical Development",
  ];

  const uxServices = [
    "Inovation",
    "Commitment",
    "Respect",
    "Integrity",
    "Excellence",
    "Team work",
  ];

  return (
    <>
      <FirstPage />
      <div className="services">
        {/* Branding Section */}
        <section className="service-section">
          <h1 className="service-title">Vision</h1>
          <h2 className="service-subtitle">
            To create a holistic and inclusive environment and empower women and
            girls across diverse sectors, fostering economic independence, and
            contributing to overall community development. Envision a future
            where women and girld have equal opportunities and participation in
            agricultural practices, efficient and safe transportation systems,
            and the ability to harness the power of technology through computer
            literacy.
          </h2>

          <div className="service-content">
            <div className="service-image-container">
              <img src={women} alt="Moscone Center" className="service-image" />
              {/* <div className="image-caption">Moscone Center</div> */}
            </div>

            <div className="service-description">
              <p>
                Provide comprehensive computer literacy programs to brace women
                and girls with essential digital skills.
                {/* , fostering their
                participation in the technology landscape */}
              </p>
              <p>
                Facilitate trainig, resources, and support to enable women and
                girls to actively engage in and benefit from agricultural
                activities,
              </p>
              {/* <p>
                Promote and encourage safe and inclusive transportation system,
                addressing hurdles that hinder women and girls mobility and
                access to educational, economic and social opportunities.
              </p> */}
              <br />
              <ul className="service-list">
                {brandingServices.map((service, index) => (
                  <li key={index}>
                    <ArrowRight className="arrow-icon" />
                    {service}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* UX Section */}
        <section className="service-section">
          <h1 className="service-title">Progams</h1>
          <h2 className="service-subtitle"></h2>

          <div className="service-content reverse">
            <div className="service-description">
              <h3>Agriculture</h3>
              <p>
                To create sustainable and inclusive agricultural sector where
                women and girls play a central role, envision a future where
                women and girls have equal access to resources.
                {/* , knowledge and
                opportunities in agricultural leading improved livelihoods,
                increased food security and enhance economic independence for
                women and girls in rural comminuties. */}
              </p>
              <h3>Computer Literacy</h3>
              <p>
                To build a digital inclusive world or comminuties where women
                and girls are proficient in technology.
                {/* To bridge the gap in the
                tech sector by providing women and girls with skills and
                confidence needed to thrive in the digital era, unlocking
                opportunities for education, empowerment and entrepreneurship. */}
              </p>
              {/* <p>
                Who uses your site and what motivates them? How do you help them
                get what they want from your site while also achieving your
                goals?
              </p> */}
              <br />
              <ul className="service-list">
                {uxServices.map((service, index) => (
                  <li key={index}>
                    <ArrowRight className="arrow-icon" />
                    {service}
                  </li>
                ))}
              </ul>
            </div>

            <div className="service-image-container">
              <img
                src={FIRST}
                alt="Alameda County Community Food Bank"
                className="service-image"
              />
              {/* <div className="image-caption">
                Alameda County Community Food Bank (ACCFB)
              </div> */}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}