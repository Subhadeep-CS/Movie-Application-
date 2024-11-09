import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const BannerContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  if (movies === null) return;
  const { id, original_title, overview } = movies[1];
  return (
    <div className="absolute">
      <VideoBackground movieId={id} />
    </div>
  );
};

export default BannerContainer;
