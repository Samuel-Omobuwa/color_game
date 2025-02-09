import React, { useState, useEffect } from 'react';
import './App.css';
import ColorBox from './components/ColorBox';
import ColorOptions from './components/ColorOptions';
import ScoreBoard from './components/ScoreBoard';
import NewGameButton from './components/NewGameButton';
import { getRandomColor } from './utility/randomColor';


const colors = ['red', 'blue', 'yellow', 'green', 'purple'];

const ColorGame = () => {

const [targetColor, setTargetColor] = useState('');
const [ score, setScore] = useState(0);
const [gameStatus, setGameStatus] = useState('');

useEffect(() => {

  startNewGame();

}, []);

const startNewGame = () => {
  setTargetColor(getRandomColor(colors));
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
  <div className='flex flex-col items-center p-5 space-y-4 bg-gray-100 min-h-screen'>
    <h1 className='text-xl font-bold text-grey-800' data-testid='gameInstructions'> 
      Guess the correct color!
    </h1>
    <ColorBox targetColor={targetColor}/>
    <ColorOptions colors={colors} handleColorGuess={handleColorGuess}/>
    <ScoreBoard score={score} gameStatus={gameStatus}/>
    <NewGameButton startNewGame={startNewGame}/>
  </div>
)
}

export default ColorGame;




 