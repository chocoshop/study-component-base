import React from 'react';

export const Text = ({ text, size, color }) => {
    return(
        <p className={`text-${color} text-${size}`}>{text}</p>
    )
}