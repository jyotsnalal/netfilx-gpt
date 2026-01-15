import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUpcomingMovies } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constant";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();

  const fetchUpcoming = async () => {
    const res = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
      API_OPTIONS
    );
    const json = await res.json();
    dispatch(addUpcomingMovies(json.results));
  };

  useEffect(() => {
    fetchUpcoming();
  }, []);
};

export default useUpcomingMovies;
