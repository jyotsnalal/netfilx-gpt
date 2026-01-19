import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GPTMovieSuggestion = () => {
  const { movieResults, movieNames } = useSelector((store) => store.gpt);

  if (!movieNames) return null;

  return (
    <div className="bg-black/90 backdrop-blur-md px-4 sm:px-8 py-6 rounded-t-xl">
      <h2 className="text-white text-xl font-semibold mb-4">
        Recommendations
      </h2>

      {movieNames.map((name, index) => (
        <MovieList
          key={name}
          title={name}
          movies={movieResults[index]}
        />
      ))}
    </div>
  );
};

export default GPTMovieSuggestion;
