import { useSelector, useDispatch } from "react-redux";
import { useRef, useState } from "react";
import { BG_URL, API_OPTIONS } from "../utils/constant";
import lang from "../utils/languageConstants";
import { addGptMovieResult } from "../utils/gptSlice";

const GPTSearchBar = () => {
  const langKey = useSelector((store) => store.config.language);
  const text = lang[langKey] || lang.en;
  const dispatch = useDispatch();

  const searchText = useRef(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const searchMovieTMDB = async (movie) => {
    const res = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await res.json();
    return json.results;
  };

  const handleGptSearchClick = async () => {
    const query = searchText.current.value.trim();
    if (!query) {
      setError("Please enter a movie preference");
      return;
    }

    try {
      setLoading(true);
      setError("");

      const gptMovies = ["Inception", "Interstellar", "The Dark Knight"];

      const tmdbResults = await Promise.all(
        gptMovies.map((movie) => searchMovieTMDB(movie))
      );

      dispatch(
        addGptMovieResult({
          movieNames: gptMovies,
          movieResults: tmdbResults,
        })
      );
    } catch {
      setError("Failed to load recommendations");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-[103vh] w-full overflow-hidden">
      {/* ✅ Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${BG_URL})` }}
      />

      {/* ✅ Dark Overlay */}
      <div className="absolute inset-0 bg-black/60 z-10" />

      {/* ✅ Content */}
      <div className="relative z-20 flex justify-center pt-[18vh] px-4">
        <div className="w-full max-w-3xl text-center bg-black/70 backdrop-blur-xl p-6 rounded-xl shadow-2xl">
          <h1 className="text-white text-3xl sm:text-4xl font-bold mb-6">
            {text.title}
          </h1>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex bg-black/80 rounded-full p-2"
          >
            <input
              ref={searchText}
              className="flex-grow bg-transparent text-white px-6 py-4 outline-none"
              placeholder={text.gptSearchPlaceholder}
            />

            <button
              onClick={handleGptSearchClick}
              className="bg-red-600 hover:bg-red-700 transition px-6 sm:px-8 py-3 sm:py-4 rounded-full text-white font-semibold"
            >
              {loading ? "Searching..." : text.search}
            </button>
          </form>

          {error && <p className="text-red-400 mt-4">{error}</p>}
        </div>
      </div>
    </div>
  );
};

export default GPTSearchBar;
