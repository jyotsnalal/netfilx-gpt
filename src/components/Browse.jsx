import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import useTrendingMovies from "../hooks/useTrendingMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useActionMovies from "../hooks/useActionMovies";
import useComedyMovies from "../hooks/useComedyMovies";
import useHorrorMovies from "../hooks/useHorrorMovies";
import useRomanceMovies from "../hooks/useRomanceMovies";
import useDocumentaries from "../hooks/useDocumentaries";

import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
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
    <div className="w-screen bg-black">
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
