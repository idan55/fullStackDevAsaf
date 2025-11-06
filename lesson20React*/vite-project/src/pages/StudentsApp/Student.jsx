import React from "react";

const Student = ({ name, fName, grade }) => {
  return (
    <li
      style={{
        border: "20px solid black",
        background: "black",
        margin: "4px",
        color: grade < 50 ? "red" : "green",
      }}
    >
      Name: {name} - Family name: {fName} <br /> Grade: {grade}
    </li>
  );
};

export default Student;
