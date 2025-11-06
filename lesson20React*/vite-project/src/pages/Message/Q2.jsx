import React from "react";
import { useState } from "react";

const Message = () => {
  const [message, setMessage] = useState("Hello");
  function change() {
    if (message == "Hello") {
      setMessage("Goodbye");
    } else {
      setMessage("Hello");
    }
  }
  return (
    <>
      <h1 onClick={change}>{message}</h1>
    </>
  );
};

export default Message;
