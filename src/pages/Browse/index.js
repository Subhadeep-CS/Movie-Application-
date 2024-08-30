import BannerContainer from "../../components/BannerContainer";
import MovieListContainer from "../../components/MovieListContainer";
import useNowPlayingMovies from "../../hooks/useNowPlayingMovies";
const Browse = () => {
  // this one line take care of everything now
  useNowPlayingMovies();
  return (
    <div>
      {/* 
        I divide my application into two section

        1. MainVideoSection or the MainContainer or BannerSection
          -Video Background
          -Video Title
          -
        2. SceondaryContainer or MovieListContainer
          -MovieList * n
            - Cards * n
            
      */}
      <BannerContainer />
      <MovieListContainer />
    </div>
  );
};

export default Browse;
