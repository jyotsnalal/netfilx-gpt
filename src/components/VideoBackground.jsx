import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store.movies.trailerVideo);
  useMovieTrailer(movieId);

  return (
   <div className="absolute inset-0 w-[120vw] h-[vh] overflow-hidden z-0">
 <iframe
  className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none scale-[1.6]"
  src={`https://www.youtube.com/embed/${trailerVideo?.key}?modestbranding=1&autoplay=1&mute=1&controls=0&fs=0&disablekb=1&rel=0&showinfo=0&iv_load_policy=3&loop=1&playlist=${trailerVideo?.key}&playsinline=1`}
  allow="autoplay; encrypted-media"
></iframe>

</div>
  );
};

export default VideoBackground;
