import React from "react";
import Guess from "../Guess/Guess";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants"

function GuessResults({ list, answer }) {
  const rows = range(0, NUM_OF_GUESSES_ALLOWED)
                .map( (row, index) => list[index] ? list[index] : '')

  return (
    <div className="guess-results">
        {
          rows.map((row, index) => <Guess 
                            guessText={row} 
                            answer={answer}
                            key={index}
                          />)
        }
    </div>
    );
}

export default GuessResults;
