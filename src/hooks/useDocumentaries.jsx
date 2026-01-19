import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addDocumentaries } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constant";

const useDocumentaries = () => {
  const dispatch = useDispatch();
  const documentaries = useSelector((store) => store.movies.documentaries);

  useEffect(() => {
    if (documentaries) return;

    const fetchDocumentaries = async () => {
      const res = await fetch(
        "https://api.themoviedb.org/3/discover/movie?with_genres=99",
        API_OPTIONS
      );
      const json = await res.json();
      dispatch(addDocumentaries(json.results));
    };

    fetchDocumentaries();
  }, [documentaries, dispatch]);
};

export default useDocumentaries;
