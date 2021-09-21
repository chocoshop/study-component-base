import React from 'react';
import './Label.css';

export const Label = ({ bg_color, text }) => {
    return (
        <div className={`label label-${bg_color}`}>{text}</div>
    )
}