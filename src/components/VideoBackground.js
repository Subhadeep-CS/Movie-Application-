import { useSelector } from "react-redux";
import useMovieTrailerVideo from "../hooks/useMovieTrailerVideo";
import VideoTitle from "./VideoTitle";
const VideoBackground = ({ movieId }) => {
  const movieTrailer = useSelector((store) => store.movies?.movieTrailer);
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  useMovieTrailerVideo(movieId);
  if (movies === null) return;
  const { original_title, overview } = movies[1];
  return (
    <div className="relative bottom-28">
      <iframe
        className="w-screen aspect-video "
        src={`https://www.youtube.com/embed/${movieTrailer?.key}?autoplay=1&mute=1&rel=0&controls=0&loop=1&modestbranding=1&iv_load_policy=3&&cc_load_policy=0`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded YouTube Video"
      ></iframe>
      <VideoTitle title={original_title} description={overview} />
    </div>
  );
};

export default VideoBackground;
