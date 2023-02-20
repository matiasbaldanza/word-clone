import React from "react";
import Guess from "../Guess/Guess";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants"

function GuessResults({ list }) {
  const rows = range(0, NUM_OF_GUESSES_ALLOWED)
                .map( (row, index) => list[index] ? list[index] : '')

  return (
    <div className="guess-results">
        {
          rows.map(row => <Guess guessText={row}/>)
        }
    </div>
    );
}

export default GuessResults;
