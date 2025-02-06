import React, { useState, useEffect } from 'react';
import './App.css';

const colors = ['red', 'blue', 'yellow', 'green', 'purple'];

const ColorGame = () => {

const [targetColor, setTargetColor] = useState('');
const [ score, setScore] = useState(0);
const [gameStatus, setGameStatus] = useState('');

useEffect(() => {

  startNewGame();

}, []);

const startNewGame = () => {
  // setTargetColor(getRandomColor(colors));
  setGameStatus('');
}

const handleColorGuess = (color)=> {
  if (color === targetColor){
    setScore(score + 1);
    setGameStatus('Congratulations! 🎉')
  } else {
    setGameStatus('Oops! please try again!')
  }
};

return (
  <div>

  </div>
)
}

export default ColorGame;




