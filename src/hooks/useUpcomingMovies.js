/**
 * @PARAM => NONE
 * @returns => NONE
 */

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../config/api";
import { addUpcomingMovies } from "../redux/slice/moviesSlice";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();

  // fetch data from TMDB api AND update the store
  const getNowUpcomingMovies = async () => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_BASE_URL}/upcoming?page=1`,
        API_OPTIONS
      );
      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }
      const data = await response.json();
      dispatch(addUpcomingMovies(data.results));
    } catch (error) {
      console.error(`Failed to fetch ${error}`);
    }
  };

  //API calling
  useEffect(() => {
    getNowUpcomingMovies();
  }, []);
};

export default useUpcomingMovies;
