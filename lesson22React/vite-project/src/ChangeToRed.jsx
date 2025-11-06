import React, { useContext } from "react";
import ColorDisplay from "./ColorDisplay";
import ColorContext from "./contexts/ColorContext";

const ChangeToRed = () => {
  const { setBgColor } = useContext(ColorContext);
  return (
    <div>
      <button onClick={() => setBgColor("red")}>Red</button>
    </div>
  );
};

export default ChangeToRed;
