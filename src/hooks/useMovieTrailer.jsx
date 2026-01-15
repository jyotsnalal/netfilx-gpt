import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant";
import { addTrailerVideo } from "../utils/movieSlice";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();

  const getMovieVideo = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
        API_OPTIONS
      );

      const json = await response.json();

      const trailers = json.results?.filter(
        (video) => video.type === "Trailer"
      );

      const trailer = trailers?.length
        ? trailers[0]
        : json.results?.[0];

      if (trailer) {
        dispatch(addTrailerVideo(trailer));
      }
    } catch (error) {
      console.error("Failed to fetch trailer", error);
    }
  };

  useEffect(() => {
    if (movieId) {
      getMovieVideo();
    }
  }, [movieId]);
};

export default useMovieTrailer;
