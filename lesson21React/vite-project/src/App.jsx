import { useEffect, useState } from "react";
import "./App.css";
import Clock from "./components/Clock";
import Counter from "./components/Counter";
import Rest from "./components/Rest";
import Captions from "./components/Captions";
import Posts from "./components/Posts";
import Login from "./components/Login";
import UsernameContext from "./contexts/UsernameContext";
import Header from "./components/Header";
import Userlist from "./components/Userlist";

function App() {
  const [count, setCount] = useState(0);
  const [username, setUsername] = useState("");
  console.log("shalom");

  useEffect(() => {
    console.log("useEffect");
  }, []);
  return (
    <>
      <h1>Hello world</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click me
      </button>
      <p>Count: {count} </p>
      <Clock />
      <Counter />
      <Captions />
      <Posts />
      <UsernameContext.Provider value={{ username, setUsername }}>
        <Login />
        <Header />
      </UsernameContext.Provider>
      <Userlist />
    </>
  );
}

export default App;
