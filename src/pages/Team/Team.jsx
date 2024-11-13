import React from "react";
import TeamMember from "../../components/TeamMember";
import FIRST from "../../Images/first.jpg";
import "./Team.css";

function Team() {
  return (
    <>
      <div className="testimonials-header">
        <h2>
          Customer <span>Testimonials</span>
        </h2>
        <h2>
          <span>Real Stories from Those Who Found Home with Us</span>
        </h2>
      </div>
      <div className="team-container">
        <TeamMember
          name="John Doe"
          role="Frontend Developer"
          bio="John is a passionate frontend developer with 5 years of experience in building user-friendly applications."
          imageUrl={FIRST}
        />
        <TeamMember
          name="Jane Smith"
          role="Backend Developer"
          bio="Jane specializes in backend development, focusing on scalable and efficient systems."
          imageUrl={FIRST}
        />
        <TeamMember
          name="John Doe"
          role="Frontend Developer"
          bio="John is a passionate frontend developer with 5 years of experience in building user-friendly applications."
          imageUrl={FIRST}
        />
        <TeamMember
          name="Jane Smith"
          role="Backend Developer"
          bio="Jane specializes in backend development, focusing on scalable and efficient systems."
          imageUrl={FIRST}
        />
      </div>
    </>
  );
}

export default Team;
