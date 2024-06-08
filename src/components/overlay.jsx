import React from "react";
import '../assets/css/recipepagestyling.css';

const Overlay = ({ onClick, isVisible }) => {
  return (
    <div
      className="overlay visible"
      onClick={onClick}
    ></div>
  );
};

export default Overlay;
