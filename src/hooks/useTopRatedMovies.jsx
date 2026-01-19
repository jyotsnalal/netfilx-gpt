import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTopRated } from "../utils/movieSlice"
import { API_OPTIONS } from "../utils/constant";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  const topRated = useSelector((store) => store.movies.topRated);

  useEffect(() => {
    if (topRated) return;

    const fetchTopRated = async () => {
      const res = await fetch(
        "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
        API_OPTIONS
      );
      const json = await res.json();
      dispatch(addTopRated(json.results));
    };

    fetchTopRated();
  }, [topRated, dispatch]);
};

export default useTopRatedMovies;
