import BannerContainer from "../../components/BannerContainer";
import MovieListContainer from "../../components/MovieListContainer";
import useNowPlayingMovies from "../../hooks/useNowPlayingMovies";
import usePopularMovies from "../../hooks/usePopularMovie";
import useTopratedMovies from "../../hooks/useTopRatedMovies";
import useUpcomingMovies from "../../hooks/useUpcomingMovies";
const Browse = () => {
  // this one line take care of everything now
  useNowPlayingMovies();
  usePopularMovies();
  useUpcomingMovies();
  useTopratedMovies();

  return (
    <>
      <BannerContainer />
      <MovieListContainer />
    </>
  );
};

export default Browse;
