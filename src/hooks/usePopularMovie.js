/**
 * @PARAM => NONE
 * @returns => NONE
 */

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../config/api";
import { addPopularMovies } from "../redux/slice/moviesSlice";

const usePopularMovies = () => {
  const dispatch = useDispatch();

  // fetch data from TMDB api AND update the store
  const getNowPopularMovies = async () => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_BASE_URL}/popular?page=1`,
        API_OPTIONS
      );
      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }
      const data = await response.json();
      console.log(data.results);
      dispatch(addPopularMovies(data.results));
    } catch (error) {
      console.error(`Failed to fetch ${error}`);
    }
  };

  //API calling
  useEffect(() => {
    getNowPopularMovies();
  }, []);
};

export default usePopularMovies;
