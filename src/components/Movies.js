import react from "react";
import { movies } from "../data";


function Movies() {
  const displayMovies= movies.map((movie, index)=>{ 
    const genres = movie.genres.map((genre, index) => <li key={index}>{genre}</li>)
    return(
      <div key={index}>
        <h2>
          Name: {movie.title}
        </h2>
        <div>
          Time: {movie.time}
        </div>
        <div>
          <p>Genres:</p>
          <ul>
            <div>{genres}</div>
          </ul>
        </div>
      </div>
    )
  })
  return (
  <div>
    <h1>Movies Page</h1>
    <div>{displayMovies}</div>
  </div>
  );
}

export default Movies;
