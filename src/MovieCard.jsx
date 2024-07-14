import "./App.css";

const MovieCard = ({ movie }) => {
  return (
    <div className="movie">
      <div className="movie-info-top">
        <p>{movie.Year}</p>
      </div>
      <div className="movie-image">
        <img
          src={
            movie.Poster !== "N/A"
              ? movie.Poster
              : "https://via.placeholder.com/400"
          }
          alt={movie.Title}
        />
      </div>
      <div className="movie-info-bottom">
        <span>{movie.Type}</span>
        <h3>{movie.Title}</h3>
      </div>
    </div>
  );
};

export default MovieCard;
