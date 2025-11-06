import React from "react";

const Q17 = () => {
  const movies = [
    { title: "Inception", rating: 9.0 },
    { title: "The Dark Knight", rating: 9.1 },
    { title: "Interstellar", rating: 8.6 },
    { title: "Titanic", rating: 7.8 },
    { title: "Avatar", rating: 7.9 },
    { title: "Gladiator", rating: 8.5 },
    { title: "The Matrix", rating: 8.7 },
    { title: "Forrest Gump", rating: 8.8 },
    { title: "Joker", rating: 8.4 },
    { title: "Top Gun: Maverick", rating: 8.3 },
  ];

  return (
    <div>
      <ol>
        {movies.map((item) => (
          <li>
            {item.title}
            {item.rating > 8 ? " => Very recommended" : " => Normal"}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Q17;
