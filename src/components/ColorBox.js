import React from 'react'

const ColorBox = ({targetColor}) => {
    return (
        <div
        className='w-32 h-32 border-2 border-black'
        style={{backgoundColor: targetColor}}
        data-testid='colorBox'>
            
        </div>
    )
}

export default ColorBox
