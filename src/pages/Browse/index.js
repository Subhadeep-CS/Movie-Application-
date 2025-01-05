import { useSelector } from "react-redux";
import BannerContainer from "../../components/BannerContainer";
import GPTSearchComponent from "../../components/GPTSearchComponent";
import MovieListContainer from "../../components/MovieListContainer";
import useNowPlayingMovies from "../../hooks/useNowPlayingMovies";
import usePopularMovies from "../../hooks/usePopularMovie";
import useTopratedMovies from "../../hooks/useTopRatedMovies";
import useUpcomingMovies from "../../hooks/useUpcomingMovies";
const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt.toggleGpt);

  useNowPlayingMovies();
  usePopularMovies();
  useUpcomingMovies();
  useTopratedMovies();

  return (
    <>
      {showGptSearch ? (
        <GPTSearchComponent />
      ) : (
        <>
          <BannerContainer />
          <MovieListContainer />
        </>
      )}
    </>
  );
};

export default Browse;
