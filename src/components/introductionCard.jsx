import React from "react";
import "./css/componentsCSS.css";

const IntroductionCard = ({ icon, title, content }) => {
  return (
    <div className="card">
      <div className="card-icon">{icon}</div>
      <div className="card-content">
        <h1 className="card-title">{title}</h1>
        <p className="card-text">{content}</p>
      </div>
    </div>
  );
};

export default IntroductionCard;
