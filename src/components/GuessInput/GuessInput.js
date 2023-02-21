import React from "react";

function GuessInput({ handleInput, disabled=false }) {
  const [guess, setGuess] = React.useState('');

    return (
    <form 
      className="guess-input-wrapper"
      onSubmit={(event) => {
          event.preventDefault()
          handleInput(guess)
          setGuess('')
        }
      }
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input 
        id="guess-input" 
        type="text" 
        value={guess}
        maxLength={5}
        pattern="[a-zA-Z]{5}"
        title="Only 5 letters"
        disabled={disabled}
        autoComplete="off"
        onChange={(event) => {
          const nextGuess = event.target.value.toUpperCase()
          setGuess(nextGuess)
        }
      }
      />
    </form>
  );
}

export default GuessInput;
