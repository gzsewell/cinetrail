import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import MovieCard from "../MovieCard/MovieCard";

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
        <MovieCard
          key={movie?.id}
          movie={movie}
          height={"300px"}
          width={"200px"}
          cardStyle="popular-card"
          radius={"16px"}
          imgSrc={movie?.poster_path}
        />
      ))}
    </div>
  );
}

export default PopularMovies;
