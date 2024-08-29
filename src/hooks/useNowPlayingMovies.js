/**
 * @PARAM => NONE
 * @returns => NONE
 */

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../config/api";
import { addNowPlayingMovies } from "../redux/slice/moviesSlice";
const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  // fetch data from TMDB api AND update the store
  const getNowPlayingMovies = async () => {
    try {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/now_playing?page=1",
        API_OPTIONS
      );
      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }
      const data = await response.json();
      console.log(data.results);
      dispatch(addNowPlayingMovies(data.results));
    } catch (error) {
      console.error(`Failed to fetch ${error}`);
    }
  };

  //API calling
  useEffect(() => {
    getNowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;
