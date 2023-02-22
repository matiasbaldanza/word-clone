import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput/GuessInput';
import GuessResults from '../GuessResults/GuessResults';
import Banner from '../Banner/Banner'
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

function Game() {
  const [guesses, setGuesses] = React.useState([])
  const [gameState, setGameState] = React.useState('')
  const [answer, setAnswer] = React.useState(() => sample(WORDS))

  // To make debugging easier, we'll log the solution in the console
  console.info({ answer });
  
  function handleInput(input) {
    const newGuess = input
    const numOfGuesses = guesses.length + 1
    setGuesses([...guesses, newGuess])
    checkGameEndCondition(newGuess, numOfGuesses)
  }

  function checkGameEndCondition( guess, numOfGuesses ) {
    if ( guess === answer ) {
      setGameState('win') 
    } else if ( numOfGuesses === NUM_OF_GUESSES_ALLOWED ) {
      setGameState('lose')
    }
  }

  function resetGame() {
    setGuesses([])
    setGameState('')
    setAnswer(sample(WORDS))
  }
  

  return (
    <>
      <Banner 
              gameOutcome={gameState}
              numGuesses={guesses.length}
              answer={answer}
              action={resetGame}
            /> 
      <GuessResults list={guesses} answer={answer}/>
      <GuessInput handleInput={handleInput} disabled={Boolean(gameState)}/>
    </>
  )
}

export default Game;
