import React from "react";

const Q15 = () => {
  const products = [
    { name: "Laptop", price: 4500, inStock: true },
    { name: "Smartphone", price: 3200, inStock: false },
    { name: "Headphones", price: 650, inStock: true },
    { name: "Smartwatch", price: 1200, inStock: false },
    { name: "Tablet", price: 1800, inStock: true },
    { name: "Camera", price: 2700, inStock: false },
    { name: "Keyboard", price: 300, inStock: true },
    { name: "Mouse", price: 200, inStock: true },
    { name: "Monitor", price: 1100, inStock: true },
    { name: "Speaker", price: 850, inStock: true },
  ];

  return (
    <div>
      <ul>
        {products
          .filter((item) => item.inStock)
          .map((item, index) => (
            <li key={index}>{item.name}</li>
          ))}
      </ul>
    </div>
  );
};

export default Q15;
