import React, { useEffect, useState } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import StarRatings from "react-star-ratings";
import axios from "axios";
import "./Slider.css";
import Genres from "../Genres/Genres";

export default function Slider() {
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [movieIndex, setMovieIndex] = useState(0);
  useEffect(() => {
    axios
      .get(
        `${import.meta.env.VITE_API_BASE_URL}upcoming?api_key=${
          import.meta.env.VITE_APP_API_KEY
        }`
      )
      .then((res) => {
        console.log(res.data);
        setUpcomingMovies(res.data.results);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleRightClick = () => {
    if (movieIndex === upcomingMovies.length - 1) {
      setMovieIndex(0);
    } else {
      setMovieIndex((prevState) => prevState + 1);
    }
  };
  const handleLeftClick = () => {
    if (movieIndex === 0) {
      setMovieIndex(upcomingMovies.length - 1);
    } else {
      setMovieIndex((prevState) => prevState - 1);
    }
  };
  const sliderStyle = {
    backgroundImage: `url(${import.meta.env.VITE_API_BASE_IMAGE_URL}${
      upcomingMovies[movieIndex]?.backdrop_path
    })`,
    backgroundSize: "cover",
    backgroundPostition: "center",
    backgroundRepeat: "no-repeat",
    height: "60vh",
    width: "100%",
    position: "relative",
  };
  return (
    <>
      <div style={sliderStyle}>
        <div className="slider-overlay"></div>
        <MdKeyboardArrowLeft className="arrow-left" onClick={handleLeftClick} />
        <MdKeyboardArrowRight
          className="arrow-right"
          onClick={handleRightClick}
        />
        <div className="slider-info">
          <h1>{upcomingMovies[movieIndex]?.title}</h1>
          <p className="slider-description">
            {upcomingMovies[movieIndex]?.overview.slice(0, 130)}...
          </p>
          <Genres genreIds={upcomingMovies[movieIndex]?.genre_ids} />
          <p>Release Date: {upcomingMovies[movieIndex]?.release_date}</p>
          {upcomingMovies[movieIndex] && (
            <StarRatings
              rating={upcomingMovies[movieIndex]?.vote_average / 2}
              starRatedColor="red"
              starDimension="20px"
              starSpacing="1px"
              numberOfStars={5}
              name="rating"
            />
          )}
        </div>
      </div>
    </>
  );
}
