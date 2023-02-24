import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { checkGuess } from '../../game-helpers';

import GuessInput from '../GuessInput/GuessInput';
import GuessResults from '../GuessResults/GuessResults';
import Banner from '../Banner/Banner'
import Keyboard from '../Keyboard/Keyboard'

function Game() {
  const [answer, setAnswer] = React.useState(() => sample(WORDS))
  const [gameState, setGameState] = React.useState('')
  const [guesses, setGuesses] = React.useState([])
  const [lettersGuessed, setLettersGuessed] = React.useState(new Map([]))

  const inputRef = React.useRef(null)

  // To make debugging easier, we'll log the solution in the console
  console.info({ answer });
  
  function handleInput(input) {
    const newGuess = input
    const numOfGuesses = guesses.length + 1

    setGuesses([...guesses, newGuess])
    
    setLettersGuessed(checkGuess(input, answer)
                        .reduce((accum, {letter, status}) => {
                            return accum.get(letter) === 'correct'
                                    ? accum
                                    : accum.set(letter, status) 
                            }, new Map([...lettersGuessed])))

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
    setLettersGuessed(new Map([]))
    setAnswer(sample(WORDS))
  }

  React.useEffect(() => {
    if (gameState === '') inputRef.current.focus()
  }, [gameState])

  return (
    <>
      <Banner 
        gameOutcome={gameState}
        numGuesses={guesses.length}
        answer={answer}
        action={resetGame}
      /> 
      <GuessResults 
        list={guesses} 
        answer={answer}
      />
      <GuessInput 
        handleInput={handleInput} 
        disabled={Boolean(gameState)}
        ref={inputRef}
      />
      <Keyboard 
        handleInput={handleInput} 
        lettersGuessed={lettersGuessed} 
        guesses={guesses}
      />
    </>
  )
}

export default Game;
