import React from "react";
import { useState } from "react";

const HideText = () => {
  const [isVisible, setVisibility] = useState(true);
  return (
    <div>
      <h2>{isVisible && "Hi"}</h2>
      <button onClick={() => setVisibility(!isVisible)}>
        Show / hide text
      </button>
    </div>
  );
};

export default HideText;
