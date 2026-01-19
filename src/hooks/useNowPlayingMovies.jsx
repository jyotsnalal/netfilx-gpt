import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constant";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const movies = useSelector(
    (store) => store.movies.nowPlayingMovies
  );

  useEffect(() => {
    if (movies) return;

    const fetchMovies = async () => {
      const res = await fetch(
        "https://api.themoviedb.org/3/movie/now_playing",
        API_OPTIONS
      );
      const json = await res.json();
      dispatch(addNowPlayingMovies(json.results));
    };

    fetchMovies();
  }, [movies, dispatch]);
};

export default useNowPlayingMovies;
