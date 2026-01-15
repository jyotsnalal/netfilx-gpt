import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addHorrorMovies } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constant";

const useHorrorMovies = () => {
  const dispatch = useDispatch();

  const getHorrorMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/discover/movie?with_genres=27",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addHorrorMovies(json.results));
  };

  useEffect(() => {
    getHorrorMovies();
  }, []);
};

export default useHorrorMovies;
