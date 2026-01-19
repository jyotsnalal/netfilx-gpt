import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store.movies.trailerVideo);

  useMovieTrailer(movieId);

  if (!trailerVideo?.key) return null;

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      <iframe
        className="absolute top-0 left-0 w-full h-full scale-[1.4] pointer-events-none"
        src={`https://www.youtube.com/embed/${trailerVideo.key}?autoplay=1&mute=1&controls=0&loop=1&playlist=${trailerVideo.key}&playsinline=1&modestbranding=1&rel=0`}
        allow="autoplay; encrypted-media"
        title="Movie Trailer"
      />
    </div>
  );
};

export default VideoBackground;
