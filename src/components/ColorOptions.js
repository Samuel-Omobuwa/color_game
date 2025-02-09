import React from 'react'

const ColorOptions = ({colors, handleColorGuess}) => {
  return (
    <div className='grid grid-cols-3 gap-4'>
        {colors.map((color) => (
            <button
            key={color}
            className='w-20 h-10 text-white font-bold rounded'
            style={{backgroundColor: color}}
            onClick={()=> handleColorGuess(color)}
            data-testid='colorOption'
            >
                {color}
            </button>
        ))}
      
    </div>
  )
}

export default ColorOptions;
