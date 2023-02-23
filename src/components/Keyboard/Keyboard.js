import React from "react";
import "./keyboard.css"
import { checkGuess } from "../../game-helpers"

function Keyboard({handleInput, answer, guesses}) {
  const keys = [
    ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
    ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'Enter'],
    ['z', 'x', 'c', 'v', 'b', 'n', 'm', 'Backspace'],
  ]

  function validateLetter() {
    return 'correct'
  }

  const specialKeys = {
    'Enter': '\u23CE',
    'Backspace': '\u232B',
  }
  /* const letters = keys.flat()
                      .filter(key => !specialKeys[key]) */
  const lettersValidated = guesses.reduce((accum, guess) => {
                              accum = [...accum, ...checkGuess(guess, answer)]
                              return accum
                            }, [])

  function validateKey(key) {
    return lettersValidated.find(letter => letter.letter === key.toUpperCase() )?.status ?? ''
  }
  
  return (
    <div className="keyboard"> 
      {
        keys.map((row, index) => 
          <div 
            key={`kbd-row-${index}`}
            className="kbd-row"
          >
            {
              row.map((key, index) => 
                <button 
                  key={`key-${index}`}
                  className={`kbd-key ${validateKey(key)}`}
                >{specialKeys[key] ?? key}
                </button>
              )
            }
          </div>
        )
      }
    </div> 
  )
  ;
}

export default Keyboard;
