import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addHorrorMovies } from "../utils/movieSlice"
import { API_OPTIONS } from "../utils/constant";

const useHorrorMovies = () => {
  const dispatch = useDispatch();
  const horrorMovies = useSelector((store) => store.movies.horrorMovies);

  useEffect(() => {
    if (horrorMovies) return;

    const fetchHorror = async () => {
      const res = await fetch(
        "https://api.themoviedb.org/3/discover/movie?with_genres=27",
        API_OPTIONS
      );
      const json = await res.json();
      dispatch(addHorrorMovies(json.results));
    };

    fetchHorror();
  }, [horrorMovies, dispatch]);
};

export default useHorrorMovies;
