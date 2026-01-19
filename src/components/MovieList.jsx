import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  if (!movies?.length) return null;

  return (
    <div className="pl-4 sm:pl-8 md:pl-12 mt-6">
      <h1 className="text-white text-lg sm:text-xl mb-2">{title}</h1>
      <div className="flex overflow-x-scroll space-x-4 scrollbar-hide">
        {movies.map((m) => (
          <MovieCard key={m.id} posterPath={m.poster_path} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
