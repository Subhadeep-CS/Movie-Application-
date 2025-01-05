/**
 * @PARAM => NONE
 * @returns => NONE
 */

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../config/api";
import { addTopRatedMovies } from "../redux/slice/moviesSlice";

const useTopratedMovies = () => {
  const dispatch = useDispatch();

  // fetch data from TMDB api AND update the store
  const getNowTopRatedMovies = async () => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_BASE_URL}/top_rated?page=1`,
        API_OPTIONS
      );
      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }
      const data = await response.json();
      dispatch(addTopRatedMovies(data.results));
    } catch (error) {
      console.error(`Failed to fetch ${error}`);
    }
  };

  //API calling
  useEffect(() => {
    getNowTopRatedMovies();
  }, []);
};

export default useTopratedMovies;
