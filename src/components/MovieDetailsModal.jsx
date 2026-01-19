import { useEffect } from "react";
import { IMG_CDN_URL } from "../utils/constant";

const MovieDetailsModal = ({ movie, onClose }) => {
  if (!movie) return null;

  // ESC key close
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center px-4"
      onClick={onClose}
    >
      <div
        className="bg-zinc-900 text-white rounded-xl max-w-lg w-full p-6 relative animate-fadeIn"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-xl font-bold hover:text-red-500"
        >
          ✕
        </button>

        {/* Backdrop Image */}
        {movie.backdrop_path && (
          <img
            src={IMG_CDN_URL + movie.backdrop_path}
            alt={movie.title}
            className="w-full h-44 object-cover rounded-md mb-4"
          />
        )}

        <h2 className="text-2xl font-bold mb-3">{movie.title}</h2>

        <p className="text-sm text-gray-300 mb-4">
          {movie.overview || "No description available."}
        </p>

        <div className="text-sm text-gray-400">
          ⭐ Rating: {movie.vote_average}
        </div>
      </div>
    </div>
  );
};

export default MovieDetailsModal;
