import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { API_OPTIONS } from "../config/api";
import { addMovieTrailer } from "../redux/slice/moviesSlice";

const useMovieTrailerVideo = (movieId) => {
  const dispatch = useDispatch();
  //fetch the movie video
  const getMovieTrailer = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos`,
      API_OPTIONS
    );
    const movieVideoData = await response.json();
    const filterData = movieVideoData.results.filter((movieData, index) => {
      return movieData.type === "Trailer";
    });

    const movieTrailerData = filterData.length
      ? filterData[0]
      : movieVideoData.results[0];
    dispatch(addMovieTrailer(movieTrailerData));
  };

  useEffect(() => {
    getMovieTrailer();
  }, []);
};

export default useMovieTrailerVideo;
