const initialState = {
  moviesLoaded: [],
  moviesFavorites: [],
  movieDetail: {},
};

function rootReducer(state = initialState, action) {
  if (action.type === "ADD_MOVIE_FAVORITE") {
    return {
      ...state,
      moviesFavorites: state.moviesFavorites.concat(action.payload), // se concatena porque agrega a la lista de favoritos
    };
  }
  if (action.type === "GET_MOVIES") {
    return {
      ...state,
      moviesLoaded: action.payload.Search, // search sale porque así está creada la api
    };
  }
  if (action.type === "GET_MOVIE_DETAILS") {
    return {
      ...state,
      movieDetail: action.payload,
    };
  }
  if (action.type === "REMOVE_MOVIE_FAVORITE") {
    return {
      ...state,
      moviesFavorites: state.moviesFavorites.filter(
        (m) => m.imdbID !== action.payload
      ),
    };
  }
  return state;
}

export default rootReducer;
