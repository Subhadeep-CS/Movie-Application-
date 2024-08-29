import useNowPlayingMovies from "../../hooks/useNowPlayingMovies";
const Browse = () => {
  // this one line take care of everything now
  useNowPlayingMovies();
  return <>It's a browse page</>;
};

export default Browse;
