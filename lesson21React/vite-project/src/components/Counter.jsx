import React, { useEffect, useState } from "react";

const Counter = () => {
  const [timer, setTimer] = useState(10);
  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return()=> clearInterval(interval);
  }, []);
  return (
    <div>
      <h1>{timer}</h1>
    </div>
  );
};

export default Counter;