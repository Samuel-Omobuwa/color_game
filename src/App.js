import React, { useState, useEffect } from 'react';
import './App.css';

const colors = ['red', 'blue', 'yellow', 'green', 'purple'];

const colorGame = () => {

const [targetColor, setTargetColor] = useState('');
const [ score, setScore] = useState(0)
const[gameStatus, setGameStatus] = useState('');

useEffect(()=>{

  startNewGame();
  
}, [])

const startNewGame = ()=> {
  setTargetColor(getRandomColor(colors))
}



}




