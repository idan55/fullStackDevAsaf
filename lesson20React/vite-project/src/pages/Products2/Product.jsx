import React from "react";

const Product = ({ name, product, price }) => {
  return (
    <li
      style={{
        border: "5px black solid",
        margin: "20px",
        padding: "10px",
        background: "whitesmoke",
        color: price > 100 ? "red" : "blue",
      }}
    >
      Name: {name} - Product: {product} - Price: {price}
    </li>
  );
};

export default Product;
