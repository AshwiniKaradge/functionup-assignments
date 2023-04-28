import React, { useState } from 'react';

function GuessLuckyNum() {
  const [luckyNumber] = useState(Math.floor(Math.random() * 10) + 1);
  const [guess, setGuess] = useState('');
  const [attempts, setAttempts] = useState(0);
  const [message, setMessage] = useState('');

  const handleGuessChange = (event) => {
    setGuess(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const numGuess = parseInt(guess);
    if (isNaN(numGuess)) {
      setMessage('Please enter a valid number.');
    } else {
      setAttempts(attempts + 1);
      if (numGuess < luckyNumber) {
        setMessage(`You guessed smaller number.`);
      } else if (numGuess > luckyNumber) {
        setMessage(`You guessed bigger number.`);
      } else {
        setMessage(`Congratulations! You guessed the right number in ${attempts + 1} attempts.`);
      }
      setGuess('');
    }
  };

  return (
    <div>
      <h2>Guess the Lucky Number Game</h2>
      <p>Guess a number between 1 and 10.</p>
      <form onSubmit={handleSubmit}>
        <input type="text" value={guess} onChange={handleGuessChange} />
        <button type="submit">Match Number</button>
      </form>
      <p>{message}</p>
    </div>
  );
}

export default GuessLuckyNum;