import React from "react";

const Sefer = ({ name, author, delFunction }) => {
  return (
    <div>
      <li style={{ font: "15px", padding: "15px" }}>
        Name: {name} - Author = {author}{" "}
        <button onClick={() => delFunction(name)}>Delete</button>
      </li>
    </div>
  );
};

export default Sefer;
