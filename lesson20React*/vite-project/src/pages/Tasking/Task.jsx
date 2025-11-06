import React from "react";

const Task = ({ title, done }) => {
  return (
    <p style={{ border: "2px solid black" }}>
      {title} - {done ? "True" : "False"}
    </p>
  );
};

export default Task;
