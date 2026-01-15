import MovieCard from "./MovieCard" 

const MovieList = ({ title, movies }) => {
  if (!movies || movies.length === 0) return null;

  return (
   <div className="pl-12 mt-4">
  <h1 className="text-white text-xl font-semibold mb-2">{title}</h1>

  <div className="flex overflow-x-scroll space-x-4 scrollbar-hide">
    {movies.map(movie => (
      <MovieCard key={movie.id} posterPath={movie.poster_path} />
    ))}
  </div>
</div>
  );
};

export default MovieList;
