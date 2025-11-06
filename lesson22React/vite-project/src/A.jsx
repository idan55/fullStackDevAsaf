import React from "react";
import { useContext } from "react";
import DetailsContext from "./contexts/DetailsContext";
import CounterContext from "./contexts/CounterContext";
import TextContext from "./contexts/TextContext";

const A = () => {
  let { firstname, lastname, email, phoneNumber } = useContext(DetailsContext);
  const { counter, setCounter } = useContext(CounterContext);
  const { text, setText } = useContext(TextContext);
  return (
    <div>
      <h1>A</h1>
      <button onClick={() => setCounter(counter + 1)}>plus</button>
      <p>{counter}</p>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        type="text"
        onKeyDown={(e) => e.key === "Enter" && setText("")}
      />
      <br />
      <button onClick={() => setText("")}>Reset</button>
      <h3>{text}</h3>
      <p>{firstname}</p>
      <p>{lastname}</p>
      <p>{email}</p>
      <p>{phoneNumber}</p>
    </div>
  );
};

export default A;
