import React from 'react';
import './Country.css'
const Country = (props) => {
    // console.log(props);
    const {name, population, area, region, flags} = props.country
    return (
        <div className='country'>
            <h2>Country name: {name.official}</h2>
            <img src={flags.png} alt="" />
            <h4>Population: {population}</h4>
            <p><small>Area: {area}</small></p>
            <p><small>Region: {region}</small></p>
        </div>
    );
};

export default Country;
