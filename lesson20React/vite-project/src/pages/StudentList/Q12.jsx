import React from "react";

const Q12 = () => {
  const names = [
    "Idan Hadad",
    "Noa Cohen",
    "Daniel Levi",
    "Maya Regev",
    "Lior Shachar",
    "Eden Ben-David",
    "Omer Azulay",
    "Yael Moyal",
    "Amit Peretz",
    "Nadav Barak",
  ];

  return (
    <div>
      <ul>
        {names.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
    </div>
  );
};

export default Q12;
