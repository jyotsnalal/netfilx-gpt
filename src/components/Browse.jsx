import { useSelector } from "react-redux";

import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import GptSearch from "./GptSearch";

import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import useTrendingMovies from "../hooks/useTrendingMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useActionMovies from "../hooks/useActionMovies";
import useComedyMovies from "../hooks/useComedyMovies";
import useHorrorMovies from "../hooks/useHorrorMovies";
import useRomanceMovies from "../hooks/useRomanceMovies";
import useDocumentaries from "../hooks/useDocumentaries";

const Browse = () => {
  const showGptSearch = useSelector(
    (store) => store.gpt.showGptSearch
  );

  useNowPlayingMovies();
  useUpcomingMovies();
  useTrendingMovies();
  useTopRatedMovies();
  useActionMovies();
  useComedyMovies();
  useHorrorMovies();
  useRomanceMovies();
  useDocumentaries();

  return (
    <div className="w-full bg-black min-h-screen">
      <Header />

      {showGptSearch ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
