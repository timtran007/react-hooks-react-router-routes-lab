import React from "react";
import { directors } from "../data";

function Directors() {
  const directorsToDisplay = directors.map((director) => {
    const directorMovies = director.movies.map((movie) => <li key={movie}>{movie}</li>)
    return(
      <div key={director.name}>
        <h3>Name: {director.name}</h3>
        <div>
          <p>Movies:</p>
          <ul>
            <div>{directorMovies}</div>
          </ul>
        </div>
      </div>
    )
  })
  return (
  <div>
    <h1>Directors Page</h1>
    <div>
      {directorsToDisplay}
    </div>
  </div>
  )
}

export default Directors;
