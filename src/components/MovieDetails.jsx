// components/MovieDetails.js
import { useParams, Link } from "react-router-dom";

const MovieDetails = ({ movies }) => {
  const { id } = useParams();
  const movie = movies.find((m) => m.id === Number(id));

  return (
    <div className="w-full min-h-screen flex flex-col px-4 bg-gray-800 text-white">
      <Link to="/" className="text-gray-400 hover:text-gray-200">
        ← Back to Home
      </Link>
      <h1 className=" text-3xl my-4 font-mono font-semibold">{movie.title}</h1>
      <img
        src={movie.posterURL}
        alt={movie.title}
        className="object-cover object-center w-[300px] h-[300px]"
      />
      <p className=" font-medium text-base my-2">{movie.description}</p>
      <div className="text-yellow-300">Rating: {movie.rating}/10</div>
    </div>
  );
};

export default MovieDetails;
