import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constant";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  const fetchNowPlaying = async () => {
    const res = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      API_OPTIONS
    );
    const json = await res.json();
    dispatch(addNowPlayingMovies(json.results));
  };

  useEffect(() => {
    fetchNowPlaying();
  }, []);
};

export default useNowPlayingMovies;
