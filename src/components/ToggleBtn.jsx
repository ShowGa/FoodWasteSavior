import React, { useState } from "react";

const ToggleBtn = ({ review }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };

  return (
    <button
      className={`mt-3 px-4 py-2 rounded-full font-bold text-primary transition-all duration-300 border-2 border-primary ${
        isChecked ? "bg-primary text-white" : ""
      }`}
      onClick={handleToggle}
    >
      {review}
    </button>
  );
};

export default ToggleBtn;
