export default (state, action) => {
  switch (action.type) {
    case "ADD_MOVIE_TO_WATCHLIST":
      return {
        ...state,
        watchlist: [action.payload, ...state.watchlist],
      };  
    // Part 2 - Step 2

    // Part 6 - Step 3
    default:
      return state;
  }
};
