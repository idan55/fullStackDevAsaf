import React, { useEffect } from "react";

const Rest = () => {
  useEffect(() => {
    const timer = setInterval(() => {
      alert("REST");
    }, 5000);
    return () => clearInterval(timer);
  });
  return <div>Rest</div>;
};

export default Rest;
