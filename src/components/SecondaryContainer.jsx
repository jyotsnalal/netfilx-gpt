import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
 <div className="relative z-30 -mt-20 pt-10 bg-gradient-to-b from-transparent via-[#020202] to-black pb-10">

      <MovieList title="Now Playing" movies={movies.nowPlayingMovies} />
      <MovieList title="Upcoming" movies={movies.upcomingMovies} />
      <MovieList title="Trending" movies={movies.trendingMovies} />
      <MovieList title="Top Rated" movies={movies.topRated} />
      <MovieList title="Action" movies={movies.actionMovies} />
      <MovieList title="Comedy" movies={movies.comedyMovies} />
      <MovieList title="Horror" movies={movies.horrorMovies} />
      <MovieList title="Romance" movies={movies.romanceMovies} />
      <MovieList title="Documentaries" movies={movies.documentaries} />
    </div>
  );
};

export default SecondaryContainer;
