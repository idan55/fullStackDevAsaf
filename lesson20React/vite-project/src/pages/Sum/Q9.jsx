import React, { useState } from "react";

const Q9 = ({ buttonText }) => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [result, setResult] = useState(0);
  return (
    <div>
      <input
        onChange={(e) => setNum1(Number(e.target.value))}
        type="number"
        placeholder="enter number"
      />
      +
      <input
        onChange={(e) => setNum2(Number(e.target.value))}
        type="number"
        placeholder="enter number"
      />
      <button
        onClick={() => {
          setResult(num1 + num2);
        }}
      >{buttonText}</button>
      <p>{result}</p>
    </div>
  );
};

export default Q9;
