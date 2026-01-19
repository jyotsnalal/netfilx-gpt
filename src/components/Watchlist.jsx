import { collection, query, where, onSnapshot, doc, deleteDoc } from "firebase/firestore";
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

    const unsub = onSnapshot(q, (snapshot) => {
      setMovies(snapshot.docs.map((doc) => doc.data().movie));
    });

    return () => unsub();
  }, [user]);

  const removeMovie = async (movieId) => {
    await deleteDoc(doc(db, "watchlists", `${user.uid}_${movieId}`));
  };

  return (
    <div className="pt-24 px-6 text-white">
      <h1 className="text-2xl font-bold mb-6">My Watchlist</h1>

      {movies.length === 0 && (
        <p className="text-gray-400">No movies in watchlist.</p>
      )}

      <div className="flex flex-wrap gap-6">
        {movies.map((movie) => (
          <div key={movie.id} className="relative">
            <MovieCard movie={movie} />

            <button
              onClick={() => removeMovie(movie.id)}
              className="absolute top-2 right-2 bg-black/70 text-white px-2 py-1 text-xs rounded"
            >
              ❌
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Watchlist;
