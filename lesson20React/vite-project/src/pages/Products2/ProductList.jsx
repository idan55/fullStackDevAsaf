import React from "react";
import Product from "./Product";

const ProductList = () => {
  const products = [
    { name: "Laptop", price: 450 },
    { name: "Smartphone", price: 120 },
    { name: "Headphones", price: 80 },
    { name: "Smartwatch", price: 200 },
    { name: "Tablet", price: 300 },
    { name: "Camera", price: 600 },
    { name: "Keyboard", price: 40 },
    { name: "Mouse", price: 25 },
    { name: "Monitor", price: 350 },
    { name: "Speaker", price: 150 },
  ];

  return (
    <ol>
      {products.map((item, index) => {
        return (
          <Product name={item.name} product={item.product} price={item.price} />
        );
      })}
    </ol>
  );
};

export default ProductList;
