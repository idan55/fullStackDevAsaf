import React from "react";

const Q13 = () => {
  const products = [
    { name: "Laptop", price: 4500 },
    { name: "Smartphone", price: 3200 },
    { name: "Headphones", price: 650 },
    { name: "Smartwatch", price: 1200 },
    { name: "Tablet", price: 1800 },
    { name: "Camera", price: 2700 },
    { name: "Keyboard", price: 300 },
    { name: "Mouse", price: 200 },
    { name: "Monitor", price: 1100 },
    { name: "Speaker", price: 850 },
  ];

  return (
    <div>
      <ul>
        {products.map((item, index) => (
          <li key={index}>
            {item.name} - {item.price}  :
            {item.price < 2000 ? "cheap" : "expensive"}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Q13;
