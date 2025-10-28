import React, { useState } from "react";

const Q10 = ({ buttonText, minorMessage, adultMessage }) => {
  const [age, setAge] = useState(0);
  const [result, setResult] = useState("");
  return (
    <div>
      <input
        onChange={(e) => setAge(Number(e.target.value))}
        type="number"
        placeholder="Enter age"
      />
      <button
        onClick={() => {
          setResult(age < 18 ? minorMessage : adultMessage);
        }}
      >
        {buttonText}
      </button>
      <h3>{result}</h3>
    </div>
  );
};

export default Q10;
