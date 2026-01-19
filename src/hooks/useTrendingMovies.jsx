import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTrendingMovies } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constant";

const useTrendingMovies = () => {
  const dispatch = useDispatch();
  const trending = useSelector((s) => s.movies.trendingMovies);

  useEffect(() => {
    if (!trending) {
      fetchTrending();
    }
  }, [trending]);

  const fetchTrending = async () => {
    const res = await fetch(
      "https://api.themoviedb.org/3/trending/movie/week?language=en-US",
      API_OPTIONS
    );
    const json = await res.json();
    dispatch(addTrendingMovies(json.results));
  };
};

export default useTrendingMovies;
