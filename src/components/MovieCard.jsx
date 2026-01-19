import { IMG_CDN_URL } from "../utils/constant";

const MovieCard = ({ movie, onClick }) => {
  if (!movie?.poster_path) return null;

  return (
    <div
      onClick={onClick}
      className="
        w-36 sm:w-52 
        aspect-[2/3]
        flex-shrink-0 
        rounded-lg 
        overflow-hidden 
        cursor-pointer 
        hover:scale-105 
        transition-transform
      "
    >
      <img
        src={IMG_CDN_URL + movie.poster_path}
        alt={movie.title}
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default MovieCard;
