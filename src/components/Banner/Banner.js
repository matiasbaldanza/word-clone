import React from "react";

function Banner({ gameOutcome, numGuesses, answer }) {
  if (gameOutcome === "win") {
    return (
      <div className="happy banner">
        <p>
          <strong>Congratulations!</strong> got it in <strong>{numGuesses}</strong> guesses!
        </p>
      </div>
    )
  } 
  
  if (gameOutcome === "lose") {
    return (
      <div className="sad banner">
        <p>Sorry, the correct answer is <strong>{answer}</strong></p>
      </div>
    )
  }

  return ''
}

export default Banner;
