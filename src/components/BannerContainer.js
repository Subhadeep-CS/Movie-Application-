import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";

const BannerContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  if (movies === null) return;
  const { id } = movies[1];
  return (
    <>
      <div>
        <VideoBackground movieId={id} />
      </div>
    </>
  );
};

export default BannerContainer;
