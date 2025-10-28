import React, { useState, useEffect } from "react";

const Counter = ({ name, age, school }) => {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    setCount((c) => c - 1);
  }

  function reset() {
    setCount(0);
  }

  useEffect(() => {
    console.log("Count changed:", count);
  }, [count]);

  return (
    <>
      <h1>
        Counter {name} {age} {school}
      </h1>
      <p>Count: {count}</p>
      <button
        style={{ width: "100px", height: "200px", borderRadius: "50%" }}
        onClick={increment}
      >
        Increment
      </button>
      <button
        style={{ width: "200px", height: "100px", borderRadius: "50%" }}
        onClick={decrement}
      >
        Decrement
      </button>
      <button style={{ backgroundColor: "blue" }} onClick={reset} Reset>
        Reset
      </button>
    </>
  );
};

export default Counter;
