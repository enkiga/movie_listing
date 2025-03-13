import React from "react";

const MovieCard = ({ movie }) => {
  return (
    <div className="w-[400px] bg-gray-800 text-white">
      <img
        src={movie.posterURL}
        alt={movie.title}
        className=" object-cover object-center w-full h-[700px]"
      />
      <div className="flex flex-col gap-2 py-4">
        <h3 className="font-bold text-2xl">{movie.title}</h3>
        <p className="font-normal text-base text-gray-200">
          {movie.description}
        </p>
        <div className="font-bold text-lg flex items-center gap-2">
          <span className="text-yellow-300">★</span>{" "}
          <span>{movie.rating} /10</span>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
