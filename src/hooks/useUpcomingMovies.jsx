import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUpcomingMovies } from "../utils/movieSlice"
import { API_OPTIONS } from "../utils/constant";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();
  const data = useSelector(s => s.movies.upcomingMovies);

  useEffect(() => {
    if (data) return;

    const fetchData = async () => {
      const res = await fetch(
        "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
        API_OPTIONS
      );
      const json = await res.json();
      dispatch(addUpcomingMovies(json.results));
    };

    fetchData();
  }, [data, dispatch]);
};

export default useUpcomingMovies;
