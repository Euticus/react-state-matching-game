import React from 'react';
import './Button.css';

const Button = ({playing}) => {
    return (
        <button onClick={startGame}>{playing ? 'reset' : 'start'} </button>
    )
}  

export default Button
