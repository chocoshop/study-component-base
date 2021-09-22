import React from 'react';

import './Author.css';

export const Author = ({ name, tmb }) => {
    return (
        <div className="author-info">
            <img src={tmb} className="author-img" />
            <p className="author-name" >{name}</p>
        </div>
    ) 
}