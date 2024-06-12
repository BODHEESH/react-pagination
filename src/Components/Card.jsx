// src/components/Card.js
import React from 'react';

const Card = ({ data }) => {
    return (
        <div className="card">
            <h2>{data.title}</h2>
            <p>{data.body}</p>
        </div>
    );
};

export default Card;
