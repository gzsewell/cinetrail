import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

function PopularMovies() {
  const [popularMovies, setPopularMovies] = useState([]);
  useEffect(() => {
    axios
      .get(
        `${import.meta.env.VITE_API_BASE_URL}popular?api_key=${
          import.meta.env.VITE_APP_API_KEY
        }`
      )
      .then((res) => {
        console.log(res.data.results);
        setPopularMovies(res.data.results);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <h3 className="popular-title">Popular Movies</h3>
      {popularMovies.map((movie) => (
        <p>{movie.title}</p>
      ))}
    </div>
  );
}

export default PopularMovies;
