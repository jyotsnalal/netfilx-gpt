import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies.nowPlayingMovies);

  if (!movies || movies.length === 0) return null;

  const movie = movies[0];

  return (
    <div className="relative w-screen h-[100vh] overflow-hidden">

      <VideoBackground movieId={movie.id} />

      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>

      <div className="absolute left-12 top-[34%] max-w-xl z-20">
        <VideoTitle title={movie.original_title} overview={movie.overview} />
      </div>

    </div>
  );
};

export default MainContainer;
