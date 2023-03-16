import React, { useContext } from "react";
import Moment from "react-moment";
import { GlobalContext } from "../context/GlobalState";

export const ResultCard = ({ movie }) => {
  // Part 3 - Step 1
  const {
    addMovieToWatchlist,
    addMovieToWatched,
    watchlist,
    watched,
  } = useContext(GlobalContext);

  // Part 3 - Step 2
  let storedMovie = watchlist.find((o) => o.id === movie.id);
  let storedMovieWatched = watched.find((o) => o.id === movie.id);

  const watchlistDisabled = storedMovie
    ? true
    : storedMovieWatched
    ? true
    : false;

  const watchedDisabled = storedMovieWatched ? true : false;

  return (
    <div className="result-card">
      <div className="poster-wrapper">
        {movie.poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
            alt={`${movie.title} Poster`}
          />
        ) : (
          <div className="filler-poster" />
        )}
      </div>

      <div className="info">
        <div className="header">
          <h3 className="title">{movie.title}</h3>
          <h4 className="release-date">
            <Moment format="YYYY">{movie.release_date}</Moment>
          </h4>
          <h4 className="score">
            TMDB Score: {Math.round(movie.vote_average * 10) / 10} / 10
          </h4>
        </div>

        <div className="controls">
          <button
            className="btn"
            // Part 3 - Step 3
            disabled={watchlistDisabled}
            onClick={() => addMovieToWatchlist(movie)}
          >
            + Watchlist
          </button>

          <button
            className="btn"
            // Part 3 - Step 3
            disabled={watchedDisabled}
            onClick={() => addMovieToWatched(movie)}
          >
            + Watched
          </button>
        </div>
      </div>
    </div>
  );
};
