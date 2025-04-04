import React, { useState } from "react";
import "./App.css";
import MovieList from "./components/MovieList";
import MovieDetails from "./components/MovieDetails";
import Filter from "./components/Filter";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: "Inception",
      description:
        "A thief who steals corporate secrets through dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
      posterURL:
        "https://m.media-amazon.com/images/M/MV5BMTM0MjUzNjkwMl5BMl5BanBnXkFtZTcwNjY0OTk1Mw@@._V1_.jpg",
      rating: 8.8,
      trailerLink: "https://www.youtube.com/watch?v=YoHD9XEInc0",
    },
    {
      id: 2,
      title: "The Dark Knight",
      description:
        "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
      posterURL:
        "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_FMjpg_UX1000_.jpg",
      rating: 9.0,
      trailerLink: "https://www.youtube.com/watch?v=EXeTwQWrcwY",
    },
  ]);

  const [titleFilter, setTitleFilter] = useState("");
  const [rateFilter, setRateFilter] = useState(0);

  // State for adding new movie
  const [newMovie, setNewMovie] = useState({
    title: "",
    description: "",
    posterURL: "",
    rating: 0,
  });

  const handleAddMovie = (e) => {
    e.preventDefault();
    setMovies([...movies, newMovie]);
    setNewMovie({ title: "", description: "", posterURL: "", rating: 0 });
  };

  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(titleFilter.toLowerCase()) &&
      movie.rating >= rateFilter
  );

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <div className="w-full bg-gray-800 text-white">
                <h1 className="w-full mx-auto text-3xl py-4 bg-gray-900 text-center font-bold">
                  Movie Collection
                </h1>

                <Filter
                  titleFilter={titleFilter}
                  rateFilter={rateFilter}
                  setTitleFilter={setTitleFilter}
                  setRateFilter={setRateFilter}
                />

                <MovieList movies={filteredMovies} />

                <div className="my-4 py-4 px-5">
                  <h2 className="font-bold text-2xl text-center">
                    Add New Movie
                  </h2>
                  <form
                    onSubmit={handleAddMovie}
                    className="flex flex-col gap-2 p-4"
                  >
                    <input
                      type="text"
                      placeholder="Title"
                      value={newMovie.title}
                      onChange={(e) =>
                        setNewMovie({ ...newMovie, title: e.target.value })
                      }
                      required
                      className="w-full p-4 outline rounded-md"
                    />
                    <textarea
                      placeholder="Description"
                      value={newMovie.description}
                      onChange={(e) =>
                        setNewMovie({
                          ...newMovie,
                          description: e.target.value,
                        })
                      }
                      required
                      className="w-full p-4 outline rounded-md"
                    />
                    <input
                      type="url"
                      placeholder="Poster URL"
                      value={newMovie.posterURL}
                      onChange={(e) =>
                        setNewMovie({ ...newMovie, posterURL: e.target.value })
                      }
                      required
                      className="w-full p-4 outline rounded-md"
                    />
                    <input
                      type="number"
                      min="0"
                      max="10"
                      step="0.1"
                      placeholder="Rating"
                      value={newMovie.rating}
                      onChange={(e) =>
                        setNewMovie({
                          ...newMovie,
                          rating: parseFloat(e.target.value),
                        })
                      }
                      required
                      className="w-full p-4 outline rounded-md"
                    />
                    <button
                      type="submit"
                      className="bg-gray-100 p-4 text-gray-900 font-bold rounded-md"
                    >
                      Add Movie
                    </button>
                  </form>
                </div>
              </div>
            </>
          }
        />
        <Route path="/movie/:id" element={<MovieDetails movies={movies} />} />
      </Routes>
    </Router>
  );
}

export default App;
