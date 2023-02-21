import React from "react";
import { checkGuess } from "../../game-helpers"

function Guess({guessText, answer}) {
/*   const characters = guessText !== ''
                      ? guessText.split('')
                      : Array(5).fill('') */

  const characters = guessText !== ''
                      ? checkGuess(guessText, answer)
                      : Array(5).fill({ letter: '', status: ''})

  return (
    <p className="guess">
      {characters.map( (char, index) => 
        <span className={`cell ${char.status}`} key={index}>{char.letter}</span>
      )}
    </p>
  );}

export default Guess;
