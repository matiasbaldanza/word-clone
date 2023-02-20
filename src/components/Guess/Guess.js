import React from "react";

function Guess({guessText}) {
  const characters = guessText !== ''
                      ? guessText.split('')
                      : Array(5).fill('')
  
  return (
    <p className="guess">
      {characters.map( (char, index) => 
        <span className="cell" key={index}>{char}</span>
      )}
    </p>
  );
}

export default Guess;
