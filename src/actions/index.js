export function getMovies(title) {
  return function(dispatch) {
     fetch(`https://www.omdbapi.com/?apikey=d1dcdf9c&s=${title}`)
      .then(response => response.json())
      .then(movies => dispatch({type:'GET_MOVIES', payload:movies}))
  }
}

  export function getMovieDetail(idMovie){
    
    return function (dispatch) {
      fetch(`https://www.omdbapi.com/?apikey=d1dcdf9c&i=${idMovie}`)
      .then(response => response.json())
      .then(data => dispatch({type:'GET_MOVIES_DETAIL', payload:data}))
    }
  }



  export function removeMovieFavorite(id) {
    return { type: "REMOVE_MOVIE_FAVORITE", payload: id };
  }


  export function addMovieFavorite(id) {
    return { type: "ADD_MOVIE_FAVORITE", payload: id };
  }


  
 

  



  
