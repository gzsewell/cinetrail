import React from "react";
import Slider from "../components/Slider/Slider";
import PopularMovies from "../components/Popular Movies/PopularMovies";

export default function Homepage() {
  return (
    <div id="hompage Div">
      <Slider />
      <PopularMovies />
    </div>
  );
}
