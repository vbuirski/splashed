import React from 'react';

import './Image.css';

const Image = (props) => (
    <div className="imagebox">
        <h2>{props.name}</h2>
        <a href={props.link}>
            <img src={props.url} alt={props.description} />
        </a>
    </div>
)

export default Image;