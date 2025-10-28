import React from "react";

const Student2 = ({ name, fName, grade }) => {
  return (
    <div>
      <li
        style={{
          font: "15px",
          color: grade < 50 ? "red" : "green",
          background: "khaki",
          padding: "10px",
        }}
      >
        Name: {name} - Family Name: {fName} <br /> Grade: {grade}
      </li>
    </div>
  );
};

export default Student2;
