import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addDocumentaries } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constant";

const useDocumentaries = () => {
  const dispatch = useDispatch();

  const getDocumentaries = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/discover/movie?with_genres=99",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addDocumentaries(json.results));
  };

  useEffect(() => {
    getDocumentaries();
  }, []);
};

export default useDocumentaries;
