import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../utils/firebase";
import { useSelector } from "react-redux";
import { IMG_CDN_URL } from "../utils/constant";

const MovieDetailsModal = ({ movie, onClose }) => {
  const user = useSelector((store) => store.user);

  if (!movie) return null;

  const handleRemoveFromWatchlist = async () => {
    if (!user) return;

    try {
      await deleteDoc(
        doc(db, "watchlists", `${user.uid}_${movie.id}`)
      );
      alert("Removed from Watchlist");
      onClose();
    } catch (err) {
      console.error("Remove failed", err);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center px-4"
      onClick={onClose}
    >
      <div
        className="bg-zinc-900 text-white rounded-xl max-w-lg w-full overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Backdrop Image */}
        {movie.backdrop_path && (
          <img
            src={IMG_CDN_URL + movie.backdrop_path}
            alt={movie.title}
            className="w-full h-56 object-cover"
          />
        )}

        <div className="p-5 relative">
          <button
            onClick={onClose}
            className="absolute top-3 right-4 text-xl font-bold"
          >
            ✕
          </button>

          <h2 className="text-2xl font-bold mb-3">{movie.title}</h2>

          <p className="text-sm text-gray-300 mb-4">
            {movie.overview || "No description available."}
          </p>

          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-400">
              ⭐ {movie.vote_average}
            </span>

            <button
              onClick={handleRemoveFromWatchlist}
              className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded text-sm font-semibold"
            >
              ❌ Remove from Watchlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailsModal;
