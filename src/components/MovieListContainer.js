import { useSelector } from "react-redux";
import MovieList from "./MovieList";
const MovieListContainer = () => {
  const movieList = useSelector((state) => state.movies);
  return (
    <div className="pl-12  bg-black">
      <div className="-mt-80 relative z-20">
        <MovieList title={"Now Playing"} movies={movieList.nowPlayingMovies} />
      </div>
      <MovieList title={"Top Rated"} movies={movieList.topratedMovies} />
      <MovieList title={"Popular"} movies={movieList.popularMovies} />
      <MovieList title={"Upcoming Movies"} movies={movieList.upcomingMovies} />
    </div>
  );
};

export default MovieListContainer;
