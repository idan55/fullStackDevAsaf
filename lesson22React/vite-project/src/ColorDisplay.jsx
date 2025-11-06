import React, { useContext } from "react";
import ColorContext from "./contexts/ColorContext";

const ColorDisplay = () => {
  const { bgColor } = useContext(ColorContext);
  return (
    <div style={{ width: "100px", height: "150px", background: bgColor }}>{bgColor}</div>
  );
};

export default ColorDisplay;
