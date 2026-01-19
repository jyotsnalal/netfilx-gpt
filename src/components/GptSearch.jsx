import GPTSearchBar from "./GPTSearchBar";
import GPTMovieSuggestion from "./GPTMovieSuggestion";

const GPTSearch = () => {
  return (
    <div className="relative bg-black">
      <GPTSearchBar />

      {/* Pull suggestions upward */}
      <div className="-mt-40 sm:-mt-52 relative z-20">
        <GPTMovieSuggestion />
      </div>
    </div>
  );
};

export default GPTSearch;
