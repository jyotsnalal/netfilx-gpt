import { IMG_CDN_URL } from "../utils/constant";

const MovieCard = ({ posterPath }) => {
  if (!posterPath) return null;

  return (
    <div className="w-36 sm:w-52 h-24 sm:h-28 flex-shrink-0 rounded-md overflow-hidden
                    opacity-0 animate-fadeIn hover:scale-105 transition-transform duration-300">
      <img
        src={IMG_CDN_URL + posterPath}
        className="w-full h-full object-cover"
        alt="Movie"
      />
    </div>
  );
};

export default MovieCard;
