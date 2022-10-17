export function addMovieFavorite(payload) {
  return { type: "ADD_MOVIE_FAVORITE", payload };
}
export function getMovies(title) {
  return function (dispatch) {
    fetch(`http://www.omdbapi.com/?apikey=e07efc15&s=${title}`)
      .then((response) => response.json())
      .then((movies) => {
        dispatch({ type: "GET_MOVIES", payload: movies });
      });
  };
}
export function removeMovieFavorite(idMovie) {
  return { type: "REMOVE_MOVIE_FAVORITE", payload: idMovie };
}
export function getMovieDetail(idMovie) {
  return function (dispatch) {
    fetch(`http://www.omdbapi.com/?apikey=e07efc15&i=${idMovie}`)
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: "GET_MOVIE_DETAILS", payload: data });
      });
  };
}
