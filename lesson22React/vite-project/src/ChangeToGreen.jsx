import React, { useContext } from "react";
import ColorContext from "./contexts/ColorContext";

const ChangeToGreen = () => {
  const { setBgColor } = useContext(ColorContext);
  return (
    <div>
      <button onClick={() => setBgColor("green")}>Green</button>
    </div>
  );
};

export default ChangeToGreen;
