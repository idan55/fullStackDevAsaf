import React, { useEffect, useState } from "react";

const Captions = () => {
  const quotes = [
    "מי שיש לו למה לחיות, יכול לשאת כמעט כל איך. – פרידריך ניטשה",
    "הדרך היחידה לעשות עבודה מעולה היא לאהוב את מה שאתה עושה. – סטיב ג'ובס",
    "האדם החזק ביותר הוא זה שמסוגל להיות עדין.",
    "גם הלילה האפל ביותר יסתיים, והשמש תזרח שוב. – ויקטור הוגו",
    "אל תמתין לרגע המושלם — קח את הרגע והפוך אותו למושלם.",
  ];
  const colorArr = ["blue", "red", "green", "cyan"];
  const rnd = Math.floor(Math.random() * quotes.length);
  const rndColor = Math.floor(Math.random() * colorArr.length);
  const [quote, setQuot] = useState(quotes[rnd]);
  const [color, setColor] = useState(colorArr[rndColor]);

  useEffect(() => {
    const interval = setInterval(() => {
      const rnd = Math.floor(Math.random() * quotes.length);
      const rndColor = Math.floor(Math.random() * colorArr.length);
      setQuot(quotes[rnd]);
      setColor(colorArr[rndColor]);
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div>
      <h1 style={{ background: color }}>{quote}</h1>
    </div>
  );
};

export default Captions;
