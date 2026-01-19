import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addComedyMovies } from "../utils/movieSlice"
import { API_OPTIONS } from "../utils/constant";

const useComedyMovies = () => {
  const dispatch = useDispatch();
  const comedyMovies = useSelector((store) => store.movies.comedyMovies);

  useEffect(() => {
    if (comedyMovies) return;

    const fetchComedy = async () => {
      const res = await fetch(
        "https://api.themoviedb.org/3/discover/movie?with_genres=35",
        API_OPTIONS
      );
      const json = await res.json();
      dispatch(addComedyMovies(json.results));
    };

    fetchComedy();
  }, [comedyMovies, dispatch]);
};

export default useComedyMovies;
