import React from "react";
import ButtonReset from "../ButtonReset/ButtonReset";

function Banner({ gameOutcome, numGuesses, answer, action }) {
  if (gameOutcome === "win") {
    return (
      <div className="happy banner">
        <p>
          <strong>Congratulations!</strong> got it in <strong>{numGuesses}</strong> guesses!
        </p>
        <ButtonReset action={action}/>
      </div>
    )
  } 
  
  if (gameOutcome === "lose") {
    return (
      <div className="sad banner">
        <p>Sorry, the correct answer is <strong>{answer}</strong></p>
        <ButtonReset action={action}/>
      </div>
    )
  }

  return ''
}

export default Banner;
