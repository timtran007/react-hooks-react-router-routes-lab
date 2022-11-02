import React from "react";
import { actors } from "../data";

function Actors() {
  const actorsToDisplay = actors.map(actor =>{
    const actorMovies = actor.movies.map(movie =><li key={movie}>{movie}</li>)
    return(
      <div key={actor.name}>
        <h3>{actor.name}</h3>
        <div>
          <p>Movies:</p>
          <ul>
            <div>{actorMovies}</div>
          </ul>
        </div>
      </div>
    )
  })
  return (
    <div>
      <h1>Actors Page</h1>
      <div>
        {actorsToDisplay}
      </div>
    </div>
  )
}

export default Actors;
