import React from "react";

const IntroductionCard = ({ icon, title, content }) => {
  return (
    <div className="c-introduction-card">
      <div className="text-2xl mb-2">{icon}</div>
      <div>
        <h1 className="text-lg my-2">{title}</h1>
        <p className="text-sm text-gray-600">{content}</p>
      </div>
    </div>
  );
};

export default IntroductionCard;
