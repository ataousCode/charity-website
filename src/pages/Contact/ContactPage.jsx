import React from "react";
import "./ContactPage.css";
import FirstSecontion from "./Sections/FirstSecontion";
import SecondSection from "./Sections/SecondSection";
import ThirdSection from "./Sections/ThirdSection";
import FourthSection from "./Sections/FourthSection";

function ContactPage() {
  return (
    <div className="contact-page-container">
      <FirstSecontion />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
    </div>
  );
}

export default ContactPage;
