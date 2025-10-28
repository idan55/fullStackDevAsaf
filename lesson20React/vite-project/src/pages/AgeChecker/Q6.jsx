import React, { useState } from "react";

const Q6 = () => {
  const [age, setAge] = useState(0);
  const [result, setResult] = useState("");
  return (
    <div>
      <input
        onChange={(e) => setAge(parseFloat(e.target.value))}
        type="number"
        placeholder="enter your age"
      />
      <button
        onClick={() =>setResult(age < 18 ? ("Minor") : ("Adult"))}
      >
        Check
      </button>
      <h3>{result}</h3>
    </div>
  );
};

export default Q6;
