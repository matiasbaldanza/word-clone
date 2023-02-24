import React from "react";

const GuessInput = React.forwardRef(({ handleInput, disabled=false }, inputRef) => {
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
        ref={inputRef}
        id="guess-input" 
        type="text" 
        value={guess}
        maxLength={5}
        pattern="[a-zA-Z]{5}"
        title="Only 5 letters"
        disabled={disabled}
        autoComplete="off"
        autoFocus
        onChange={(event) => {
          const nextGuess = event.target.value.toUpperCase()
          setGuess(nextGuess)
        }
      }
      />
    </form>
  );
})

export default GuessInput;
