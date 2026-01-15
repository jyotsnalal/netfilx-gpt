import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTrendingMovies } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constant";

const useTrendingMovies = () => {
  const dispatch = useDispatch();

  const fetchTrending = async () => {
    const res = await fetch(
      "https://api.themoviedb.org/3/trending/movie/week?language=en-US",
      API_OPTIONS
    );
    const json = await res.json();
    dispatch(addTrendingMovies(json.results));
  };

  useEffect(() => {
    fetchTrending();
  }, []);
};

export default useTrendingMovies;
