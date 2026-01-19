import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const m = useSelector((store) => store.movies);

  return (
    <div className="relative z-30 -mt-24 sm:-mt-20 bg-black pb-10">
      <MovieList title="Now Playing" movies={m.nowPlayingMovies} />
      <MovieList title="Trending" movies={m.trendingMovies} />
      <MovieList title="Top Rated" movies={m.topRated} />
      <MovieList title="Action" movies={m.actionMovies} />
      <MovieList title="Comedy" movies={m.comedyMovies} />
      <MovieList title="Horror" movies={m.horrorMovies} />
      <MovieList title="Romance" movies={m.romanceMovies} />
      <MovieList title="Documentaries" movies={m.documentaries} />
    </div>
  );
};

export default SecondaryContainer;
