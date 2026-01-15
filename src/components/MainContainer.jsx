import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies.nowPlayingMovies);

  if (!movies || movies.length === 0) return null;

  const movie = movies[0];
  const { original_title, overview, id } = movie;

  return (
    <div className="relative w-[100vw] h-[100vh] overflow-hidden">
      <VideoBackground movieId={id} />

      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/30 to-transparent z-10"></div>

      <div className="absolute bottom-40 left-12 z-20 w-[550px]">
        <VideoTitle title={original_title} overview={overview} />
      </div>

      <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-black z-20"></div>
    </div>
  );
};
export default MainContainer;
