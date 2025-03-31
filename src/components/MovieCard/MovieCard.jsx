import React from "react";

function MovieCard({ movie, height, width, cardStyle, radius, imgSrc, id }) {
  const movieCardStyle = {
    backgroundImage: `url(${import.meta.env.VITE_API_BASE_IMAGE_URL}${imgSrc})`,
    backgroundReapeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    height,
    width,
    borderRadius: radius,
    boxShadow:
      cardStyle === "popular_card"
        ? "0px 0px 10px 0px rgba(118, 118, 118, 0.75)"
        : null,
  };

  const hyperRef = `/movieDetails/${id}`;
  return (
    <Link className={cardStyle} to={hyperRef}>
      <div style={movieCardStyle}></div>
    </Link>
  );
}

export default MovieCard;
