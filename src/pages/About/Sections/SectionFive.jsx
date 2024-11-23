import React from "react";
import {
  FaArrowRight,
  FaGraduationCap,
  FaRegSquare,
  FaCube,
} from "react-icons/fa";
import "./SectionFive.css";

export default function SectionFive() {
  return (
    <div className="atalib">
      <div className="atalib-header">
        <h1>RAISING LAZARUS</h1>
        <p>
          A world where every woman and girl lives with dignity, safety, and the
          freedom to realize her fullest potential, lead in agriculture
          transforming communities through innovative farming practices, with
          access to resources and opportunities that enable mobility and
          independence.
        </p>
      </div>
      <div className="atalib-grid">
        <div className="atalib-card bootcamp">
          <div className="card-content">
            <div className="card-header">
              <span>Education & Skill Development</span>
              <FaArrowRight className="arrow-icon" />
            </div>
            <span>
              To equip women and girls with the education and skills they need
              to lead independent and fulfilled lives, including training on
              safe and effective use of transportation tools.
            </span>
          </div>
          <FaGraduationCap className="card-icon" />
        </div>
        <div className="atalib-card portfolly">
          <div className="card-content">
            <div className="card-header">
              <span>Agriculture</span>
              <FaArrowRight className="arrow-icon" />
            </div>
            <span>
              To empower women and young girls by providing access to
              agricultural education, resources and opportunities. Foster
              resilience, promote gender equality, and support the development
              of sustainable agricultural practices that uplift entire
              communities.
            </span>
          </div>
          <div className="portfolly-icon">p</div>
        </div>
        <div className="atalib-card builds">
          <div className="card-content">
            <div className="card-header">
              <span>Transportation</span>
              <FaArrowRight className="arrow-icon" />
            </div>
            <span>
              To empower women and girls by providing access to affordable and
              sustainable transportation options, such as bikes, auto rickshaws
              and scooters, enabling them to move freely, pursue education, and
              participate fully in economic and social life.
            </span>
          </div>
          <FaRegSquare className="card-icon" />
        </div>
        {/* <div className="atalib-card tracks">
          <div className="card-content">
            <div className="card-header">
              <span>Tracks</span>
              <FaArrowRight className="arrow-icon" />
            </div>
            <h3>Personalized Learning Tracks</h3>
          </div>
          <FaCube className="card-icon" />
        </div>
        <div className="atalib-card tracks">
          <div className="card-content">
            <div className="card-header">
              <span>Tracks</span>
              <FaArrowRight className="arrow-icon" />
            </div>
            <h3>Personalized Learning Tracks</h3>
          </div>
          <FaCube className="card-icon" />
        </div> */}
      </div>
    </div>
  );
}
