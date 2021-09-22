import React from 'react';
import './Text.css';

export const Text = ({ text = '', size = 'normal', color = 'black', weight = 'normal' }) => {
    return(
        <p className={`text-${color} text-${size} text-weight-${weight}`}>{text}</p>
    )
}