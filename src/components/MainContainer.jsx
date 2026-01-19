import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies.nowPlayingMovies);

  if (!movies || movies.length === 0) return null;

  const movie = movies[0];

  return (
    <div className="relative h-[90vh] w-full overflow-hidden">
      <VideoBackground movieId={movie.id} />

      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent" />

      <div className="absolute left-6 sm:left-12 top-[35%] z-10 max-w-xl">
        <VideoTitle title={movie.title} overview={movie.overview} />
      </div>
    </div>
  );
};

export default MainContainer;
