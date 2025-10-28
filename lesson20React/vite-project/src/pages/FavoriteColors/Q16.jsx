import React from "react";

const Q16 = () => {
  const colors = [
    "Red",
    "Green",
    "Blue",
    "Yellow",
    "Purple",
    "Orange",
    "Pink",
    "Brown",
    "Black",
    "White",
  ];

  return (
    <div>
      {colors.map((item) => (
        <li>
          <button>{item == "Blue" ? item + " Cool color" : item}</button>
        </li>
      ))}
    </div>
  );
};

export default Q16;
