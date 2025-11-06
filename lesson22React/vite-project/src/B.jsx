import React from "react";
import { useContext } from "react";
import DetailsContext from "./contexts/DetailsContext";
import CounterContext from "./contexts/CounterContext";
import TextContext from "./contexts/TextContext";

const B = () => {
  let { firstname, lastname, email, phoneNumber } = useContext(DetailsContext);
  let { counter, setCounter } = useContext(CounterContext);
  const { text, setText } = useContext(TextContext);
  return (
    <div>
      <button onClick={() => setCounter(counter - 1)}>Minus</button>
      <h2>{counter}</h2>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && setText("")}
        type="text"
      />
      <h3>{text}</h3>
      <br />
      <button onClick={() => setText("")}>Reset</button>
      <h1>B</h1>
      <p>{firstname}</p>
      <p>{lastname}</p>
      <p>{email}</p>
      <p>{phoneNumber}</p>
    </div>
  );
};

export default B;
