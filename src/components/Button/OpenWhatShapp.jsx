import React from "react";
import "./OpenWhatShapp.css";

function OpenWhatShapp({ text, href, onClick }) {
  return (
    <a
      href={href}
      rel="noopener noreferrer"
      target="_blank"
      className="custom-button"
      onClick={onClick}
    >
      {text}
    </a>
  );
}

export default OpenWhatShapp;
