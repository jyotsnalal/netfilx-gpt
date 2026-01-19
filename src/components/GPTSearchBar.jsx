import { useSelector } from "react-redux";
import { BG_URL } from "../utils/constant";
import lang from "../utils/languageConstants";

const GPTSearchBar = () => {

  const langKey = useSelector((store) => store.config.language);
  const text = lang[langKey] || lang.en;
  return (
    <div
      className="min-h-screen w-full bg-cover bg-center flex justify-center pt-[18%] px-4"
      style={{
        backgroundImage: `url(${BG_URL})`,
      }}
    >
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 w-full max-w-3xl text-center">
        <h1 className="text-white text-4xl font-bold mb-6">
        {text.title}
        </h1>

        <form className="flex items-center bg-black/80 backdrop-blur-xl rounded-full shadow-2xl border border-white/10 px-2 py-2">
          <input
            type="text"
            className="flex-grow bg-transparent text-white placeholder-gray-400 px-6 py-4 text-lg focus:outline-none"
            placeholder={lang[langKey].gptSearchPlaceholder}
          />

          <button
            type="submit"
            className="bg-red-600 hover:bg-red-700 transition-all duration-300 text-white px-8 py-4 rounded-full font-semibold shadow-lg"
          >
            {lang[langKey].search}
          </button>
        </form>
      </div>
    </div>
  );
};

export default GPTSearchBar;
