import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTopRated } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constant";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();

  const fetchTopRated = async () => {
    const res = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      API_OPTIONS
    );
    const json = await res.json();
    dispatch(addTopRated(json.results));
  };

  useEffect(() => {
    fetchTopRated();
  }, []);
};

export default useTopRatedMovies;
