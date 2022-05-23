import React from 'react';
import './Country.css'
const Country = (props) => {
    const{name,area,population,flags}=props.country
    return (
        <div className='alldata'>
            <h1>Name:{name.common}</h1>
            <p>Area:{area}</p>
            <p>Population:{population}</p>
            <img src={flags.png} alt=''/>
        </div>
    );
};

export default Country;