import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addRomanceMovies } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constant";

const useRomanceMovies = () => {
  const dispatch = useDispatch();

  const getRomanceMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/discover/movie?with_genres=10749",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addRomanceMovies(json.results));
  };

  useEffect(() => {
    getRomanceMovies();
  }, []);
};

export default useRomanceMovies;
