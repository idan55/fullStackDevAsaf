import React from "react";
import { useState } from "react";

const Q4 = () => {
  const [text, setText] = useState("");
  return (
    <div>
      <input
        onChange={(e) => {
          setText(e.target.value);
        }}
        type="text"
        placeholder="enter text"
      />
      <h2>{text}</h2>
    </div>
  );
};

export default Q4;
