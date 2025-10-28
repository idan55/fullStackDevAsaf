import React from "react";

const Movie = ({ title, year, genre, rating }) => {
  return (
    <div>
      <h2
        style={{ font: "30px", background: "gold", border: "3px, solid, grey", borderRadius:"50px" }}
      >
        {title} - {year} - {genre} - {rating}{" "}
      </h2>
    </div>
  );
};

export default Movie;
