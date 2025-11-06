import "./App.css";
import A from "./A";
import B from "./B";
import C from "./C";
import DetailsContext from "./contexts/DetailsContext";
import CounterContext from "./contexts/CounterContext";
import ColorContext from "./contexts/ColorContext";
import { useState } from "react";
import TextContext from "./contexts/TextContext";
import ColorDisplay from "./ColorDisplay";
import ChangeToRed from "./ChangeToRed";
import ChangeToGreen from "./ChangeToGreen";

function App() {
  const [counter, setCounter] = useState(0);
  const [text, setText] = useState("Hello Context");
  const [bgColor, setBgColor] = useState("lightblue");
  return (
    <>
      <h1>Hello WOrld</h1>
      <ColorContext.Provider value={{ bgColor, setBgColor }}>
        <TextContext.Provider value={{ text, setText }}>
          <CounterContext.Provider value={{ counter, setCounter }}>
            <DetailsContext.Provider
              value={{
                firstname: "dov",
                lastname: "Elkaim",
                email: "dovi@gmail.com",
                phoneNumber: "0521234567",
              }}
            >
              <A />
              <B />
              <C />
              <ColorDisplay />
              <ChangeToRed />
              <ChangeToGreen/>
            </DetailsContext.Provider>
          </CounterContext.Provider>
        </TextContext.Provider>
      </ColorContext.Provider>
    </>
  );
}

export default App;
