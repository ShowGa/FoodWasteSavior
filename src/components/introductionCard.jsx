import React from "react";
import "./css/componentsCSS.css";

const IntroductionCard = ({ icon, title, content }) => {
  return (
    <div className="c-introduction-card">
      <div className="c-introduction-card-icon">{icon}</div>
      <div className="c-introduction-card-content">
        <h1 className="c-introduction-card-title">{title}</h1>
        <p className="c-introduction-card-text">{content}</p>
      </div>
    </div>
  );
};

export default IntroductionCard;
