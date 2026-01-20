import {
  collection,
  query,
  where,
  onSnapshot,
  doc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "../utils/firebase";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";

const Watchlist = () => {
  const user = useSelector((store) => store.user);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (!user) return;

    const q = query(
      collection(db, "watchlists"),
      where("uid", "==", user.uid)
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const list = snapshot.docs.map((docSnap) => ({
        docId: docSnap.id,
        ...docSnap.data(),
      }));
      setMovies(list);
    });

    return () => unsubscribe();
  }, [user]);

  const removeMovie = async (docId) => {
    try {
      await deleteDoc(doc(db, "watchlists", docId));
    } catch (err) {
      console.error("Failed to remove from watchlist", err);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white pt-24 sm:pt-28 px-6">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6">
        My Watchlist
      </h1>

      {movies.length === 0 && (
        <p className="text-gray-400">
          No movies in your watchlist.
        </p>
      )}

      <div className="flex flex-wrap gap-6">
        {movies.map((item) => (
          <div key={item.docId} className="relative">
            <MovieCard movie={item.movie} />

            <button
              onClick={() => removeMovie(item.docId)}
              className="
                absolute top-2 right-2 
                bg-black/70 hover:bg-red-600 
                text-white text-xs px-2 py-1 rounded
              "
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Watchlist;
