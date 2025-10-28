import React, { useState } from "react";

const Q7 = () => {
  const [password, setPassword] = useState("");
  const [cPassword, cSetPassword] = useState("");
  const [result, setResult] = useState("");
  return (
    <div>
      <input
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        placeholder="password"
      />
      <input
        onChange={(e) => cSetPassword(e.target.value)}
        type="password"
        placeholder="confirm password"
      />
      <button
        onClick={() => {
          setResult(password == cPassword ? "Match" : "No match");
        }}
      >
        Check password
      </button>
      <h3>{result}</h3>
    </div>
  );
};

export default Q7;
