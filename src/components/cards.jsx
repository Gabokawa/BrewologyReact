import React, { useState } from "react";
import Overlay from "./overlay";

const Card = ({ header, content, id }) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleCardClick = () => {
    setIsFocused(!isFocused);
  };

  const handleOverlayClick = () => {
    setIsFocused(false);
  };
  return (
    <div>
      {isFocused && <Overlay onClick={handleOverlayClick}/>}
      <div
        className={`cards ${isFocused ? "focused" : ""}`}
        onClick={handleCardClick}
        id={id}
      >
        <h1>{header}</h1>

        <div dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </div>
  );
};

export default Card;
