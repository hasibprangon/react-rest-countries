import React from 'react';
import './Country.css'
const Country = (props) => {
    return (
        <div className='country'>
            <h2>Country name: {props.name}</h2>
            <h4>Population: {props.population}</h4>
            <p><small>Area: {props.area}</small></p>
        </div>
    );
};

export default Country;