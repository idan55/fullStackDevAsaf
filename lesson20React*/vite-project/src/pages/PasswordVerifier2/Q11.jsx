import React, { useState } from "react";

const Q11 = ({ buttonText, matchChecker, noMatchChecker }) => {
  const [password, setPassword] = useState("");
  const [cPassword, cSetPassword] = useState("");
  const [result, setResult] = useState("");
  return (
    <div>
      <input
        onChange={(e) => setPassword((e.target.value).trim())}
        type="password"
        placeholder="password"
      />
      <input
        onChange={(e) => cSetPassword((e.target.value).trim())}
        type="password"
        placeholder="confirm password"
      />
      <button
        onClick={() => {
          setResult(password == cPassword ? matchChecker : noMatchChecker);
        }}
      >
        {buttonText}
      </button>
      <h3>{result}</h3>
    </div>
  );
};

export default Q11;
