import React from "react";
import "./TeamMember.css";

function TeamMember({ name, role, bio, imageUrl }) {
  return (
    <div className="team-member">
      <div className="team-member-card">
        <img src={imageUrl} alt={name} className="team-member-img" />
        <h3 className="team-member-name">{name}</h3>
        <p className="team-member-role">{role}</p>
        <p className="team-member-bio">{bio}</p>
      </div>
    </div>
  );
}

export default TeamMember;
