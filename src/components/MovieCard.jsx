import React from "react";

const MovieCard = ({ movie }) => {
  return (
    <div className="">
      <img src={movie.posterUrl} alt={movie.title} />
      <div className="">
        <h3>{movie.title}</h3>
        <p>{movie.description}</p>
        <div className="">
          <span>★</span> <span>{movie.rating}/10</span>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
