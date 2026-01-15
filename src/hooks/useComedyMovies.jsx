import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addComedyMovies } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constant";

const useComedyMovies = () => {
  const dispatch = useDispatch();

  const fetchComedyMovies = async () => {
    const res = await fetch(
      "https://api.themoviedb.org/3/discover/movie?with_genres=35",
      API_OPTIONS
    );
    const json = await res.json();
    dispatch(addComedyMovies(json.results));
  };

  useEffect(() => {
    fetchComedyMovies();
  }, []);
};

export default useComedyMovies;
