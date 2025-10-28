import React from "react";

const Book = ({ name, author, delFunction }) => {
  return (
    <>
      <li style={{ fontSize: "30px", padding: "20px" }}>
        Name: {name} - author: {author}{" "}
        <button onClick={() => delFunction(name)}>Delete</button>
      </li>
    </>
  );
};

export default Book;
