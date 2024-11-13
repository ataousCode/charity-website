import React from "react";

import "./About.css";
import ThirdSection from "./Sections/ThirdSection";
import CharityPage from "../Home/Sections/CharityPage";
import FourthSection from "./Sections/FourthSection";
import TestimonialPage from "../Home/Sections/TestimonialPage";
import Event from "../Home/Sections/Event";
import TeamMember from "../../components/Team/TeamMember";
import FirstSection from "./Sections/FirstSection";

function About() {
  return (
    <div className="about-container">
      <FirstSection />
      <ThirdSection />
      <TeamMember />
      <CharityPage />
      <Event />
      <FourthSection />
    </div>
  );
}

export default About;
