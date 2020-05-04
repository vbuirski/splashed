import React from 'react';

import './Error.css';

const Error = (props) => (
    <div className="error">
        <h5>Oops, this happened: 
        <br />
        <br />
        {props.errorMessage}</h5>
    </div>
)

export default Error;
