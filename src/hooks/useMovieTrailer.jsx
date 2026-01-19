import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constant";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  const trailer = useSelector((store) => store.movies.trailerVideo);

  useEffect(() => {
    if (!movieId || trailer) return;

    const fetchTrailer = async () => {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
        API_OPTIONS
      );
      const json = await res.json();

      const trailers = json.results?.filter(
        (video) => video.type === "Trailer"
      );

      dispatch(addTrailerVideo(trailers?.[0]));
    };

    fetchTrailer();
  }, [movieId, trailer, dispatch]);
};

export default useMovieTrailer;
