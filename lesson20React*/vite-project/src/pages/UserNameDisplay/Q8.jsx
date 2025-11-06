import React, { useState } from "react";

const Q8 = ({ msg }) => {
  const [name, setName] = useState("");
  const [result, setResult] = useState("");
  return (
    <div>
      <input onChange={(e) => setName(e.target.value)} type="text" />
      <button onClick={() => setResult(name ? name : msg)}>Show name</button>
      <h3>{result}</h3>
    </div>
  );
};

export default Q8;
