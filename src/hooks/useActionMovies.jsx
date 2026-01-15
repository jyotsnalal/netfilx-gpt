import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addActionMovies } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constant";

const useActionMovies = () => {
  const dispatch = useDispatch();

  const fetchAction = async () => {
    const res = await fetch(
      "https://api.themoviedb.org/3/discover/movie?with_genres=28",
      API_OPTIONS
    );
    const json = await res.json();
    dispatch(addActionMovies(json.results));
  };

  useEffect(() => {
    fetchAction();
  }, []);
};

export default useActionMovies;
