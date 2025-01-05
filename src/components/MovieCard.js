const MovieCard = ({ posterPath }) => {
  return (
    <div className="w-48 pr-4">
      <img
        src={process.env.REACT_APP_IMAGE_URL + posterPath}
        alt="movie-name"
      />
    </div>
  );
};

export default MovieCard;
