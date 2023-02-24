import React from "react";
import "./keyboard.css"
import { checkGuess } from "../../game-helpers"

function Keyboard({handleInput, lettersGuessed, guesses}) {
  const keys = [
    ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
    ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'Enter'],
    ['z', 'x', 'c', 'v', 'b', 'n', 'm', 'Backspace'],
  ]

  const specialKeys = {
    'Enter': '\u23CE',
    'Backspace': '\u232B',
  }

  function validateKey(key) {
    return lettersGuessed.get(key.toUpperCase()) ?? ''
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
