import React from 'react'

function ScoreBoard({ score, gameStatus }) {
  return (
    <div className='text-center'>
        <p className='text-lg' data-testid='gameStatus'>
            {gameStatus}
        </p>
        <p className='text-lg font-bold' data-testid='score'>
            Score: {score}
        </p>
      
    </div>
  )
}

export default ScoreBoard;
