import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addRomanceMovies } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constant";

const useRomanceMovies = () => {
  const dispatch = useDispatch();
  const romanceMovies = useSelector((store) => store.movies.romanceMovies);

  useEffect(() => {
    if (romanceMovies) return;

    const fetchRomance = async () => {
      const res = await fetch(
        "https://api.themoviedb.org/3/discover/movie?with_genres=10749",
        API_OPTIONS
      );
      const json = await res.json();
      dispatch(addRomanceMovies(json.results));
    };

    fetchRomance();
  }, [romanceMovies, dispatch]);
};

export default useRomanceMovies;
