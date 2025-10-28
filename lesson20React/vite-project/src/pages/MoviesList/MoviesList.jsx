import React, { useState } from "react";
import Movie from "../Movie/Movie";
import "./Movies.css";

const MoviesList = () => {
  const movies = [
    {
      title: "The Shawshank Redemption",
      genre: "Drama",
      year: 1994,
      rating: 93,
    },
    { title: "The Godfather", genre: "Crime", year: 1972, rating: 72 },
    { title: "The Dark Knight", genre: "Action", year: 2008, rating: 90 },
    { title: "Pulp Fiction", genre: "Crime", year: 1994, rating: 89 },
    { title: "Forrest Gump", genre: "Drama", year: 1994, rating: 78 },
    { title: "The Matrix", genre: "Sci-Fi", year: 1999, rating: 87 },
    { title: "Saving Private Ryan", genre: "War", year: 1998, rating: 86 },
    { title: "Gladiator", genre: "Action", year: 2000, rating: 85 },
    { title: "The Lion King", genre: "Animation", year: 1994, rating: 85 },
    { title: "The Departed", genre: "Thriller", year: 2006, rating: 84 },
    { title: "Whiplash", genre: "Drama", year: 2014, rating: 85 },
    { title: "The Green Mile", genre: "Fantasy", year: 1999, rating: 86 },
  ];
  const [str, setStr] = useState("");
  const [arr, setArr] = useState(movies);
  const [option, setOption] = useState("");
  const [check, setCheck] = useState(false);

  const getFilterArray = () => {
    if (check == true) {
      if (!option || str.trim() === "") {
        return movies.filter((item) => item.rating > 80);
      }
      return movies.filter((item) => {
        if (option === "year") {
          return item.year.toString().includes(str.trim()) && item.rating > 80;
        } else if (option === "rating") {
          return (
            item.rating.toString().includes(str.trim()) && item.rating > 80
          );
        } else {
          return (
            item[option].toLowerCase().includes(str.toLowerCase().trim()) &&
            item.rating > 80
          );
        }
      });
    } else {
      if (!option || str.trim() === "") return movies;
      return movies.filter((item) => {
        if (option === "year") {
          return item.year.toString().includes(str.trim());
        } else if (option === "rating") {
          return item.rating.toString().includes(str.trim());
        } else {
          return item[option].toLowerCase().includes(str.toLowerCase().trim());
        }
      });
    }
  };

  return (
    <div className="movies-app">
      <div className="controls">
        <input
          className="input"
          onChange={(e) => setStr(e.target.value)}
          type="text"
          placeholder="Search..."
        />
        <select className="select" onChange={(e) => setOption(e.target.value)}>
          <option value="">---Select---</option>
          <option value="title">Title</option>
          <option value="genre">Genre</option>
          <option value="year">Year</option>
          <option value="rating">Rating</option>
        </select>
        <button className="btn" onClick={() => setArr(getFilterArray())}>
          Search
        </button>
        <label style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <input
            className="checkbox"
            type="checkbox"
            onChange={(e) => setCheck(e.target.checked)}
          />
          rating 80+
        </label>
      </div>

      <div className="count">{arr.length} movies found</div>

      {arr.map((item, index) => (
        <Movie
          key={index}
          title={item.title}
          genre={item.genre}
          year={item.year}
          rating={item.rating}
        />
      ))}
    </div>
  );
};

export default MoviesList;
