import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";
import CampaignsPage from "./Sections/CampaignsPage";
import TestimonialPage from "./Sections/TestimonialPage";
import CharityPage from "./Sections/CharityPage";
import FirstSection from "./Sections/FirstSection";
import Team from "../Team/Team";
import Volunter from "./Sections/Volunter";
import Event from "./Sections/Event";
import TeamMember from "../../components/Team/TeamMember";

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="home">
      <br />
      <FirstSection />
      <CharityPage />
      <CampaignsPage />
      <TestimonialPage />
      <TeamMember />
      <Volunter />
      <Event />
    </div>
  );
}