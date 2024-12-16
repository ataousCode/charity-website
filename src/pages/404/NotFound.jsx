import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css"; // Import your CSS for styling

const NotFound = () => {
  return (
    <div className="not-found-container">
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for doesn't exist.</p>
      <Link to="/" className="back-button">
        Go Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
