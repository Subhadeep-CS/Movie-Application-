import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const BannerContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  if (movies === null) return;
  const { original_title, overview } = movies[0];

  return (
    <div>
      <VideoTitle title={original_title} description={overview} />
      <VideoBackground />
    </div>
  );
};

export default BannerContainer;
