import React from "react";
import { useState } from "react";

const Q5 = () => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [sum, setSum] = useState(0);
  return (
    <div>
      <input
        onChange={(e) => setNum1(Number(e.target.value))}
        type="number"
        placeholder="enter num"
      />
      <input
        onChange={(e) => setNum2(Number(e.target.value))}
        type="number"
        placeholder="enter num"
      />
      <button onClick={() => setSum(num1 + num2)}>Check sum</button>
      <h3>{sum}</h3>
    </div>
  );
};

export default Q5;
