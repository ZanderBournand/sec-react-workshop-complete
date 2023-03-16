import React, { createContext, useReducer, useEffect } from "react";
import AppReducer from "./AppReducer";

// Part 6 - Step 5
const initialState = {
  watchlist: [],
  watched: [],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Part 6 - Step 4

  const addMovieToWatchlist = (movie) => {
    dispatch({ type: "ADD_MOVIE_TO_WATCHLIST", payload: movie });
  };

  // Part 2 - Step 1

  // Part 6 - Step 1

  return (
    <GlobalContext.Provider
      value={{
        watchlist: state.watchlist,
        watched: state.watched,
        addMovieToWatchlist,
        // Part 2 - Step 3

        // Part 6 - Step 2
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};