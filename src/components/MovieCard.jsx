import React from "react";
import { IMG_CDN_URL } from "../utils/constant";

const MovieCard = ({ posterPath }) => {
  if (!posterPath) return null;

  return (
    <div className="w-52 h-28 flex-shrink-0 rounded-md overflow-hidden hover:scale-105 transition-transform duration-200">
      <img
        src={IMG_CDN_URL + posterPath}
        className="w-full h-full object-cover"
        alt="Movie"
      />
    </div>
  );
};



export default MovieCard;
