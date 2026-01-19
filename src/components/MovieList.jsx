import { useState } from "react";
import MovieCard from "./MovieCard";
import MovieDetailsModal from "./MovieDetailsModal";

const MovieList = ({ title, movies }) => {
  const [selectedMovie, setSelectedMovie] = useState(null);

  if (!movies?.length) return null;

  return (
    <div className="pl-4 sm:pl-8 md:pl-12 mt-6">
      <h1 className="text-white text-lg sm:text-xl mb-3">{title}</h1>

      <div className="flex overflow-x-scroll space-x-4 scrollbar-hide">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            onClick={() => setSelectedMovie(movie)}
          />
        ))}
      </div>

      {selectedMovie && (
        <MovieDetailsModal
          movie={selectedMovie}
          onClose={() => setSelectedMovie(null)}
        />
      )}
    </div>
  );
};

export default MovieList;
