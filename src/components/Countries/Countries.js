
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'
const Countries = () => {
    const[countries,setCountries]=useState([])
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res=>res.json())
        .then(data=>setCountries(data))
    },[])
    return (
        <div>
            <div className='country'>
            {
                countries.map(country=><Country country={country} key={country.acc3}></Country>)
            }
            </div>
            
        </div>
    );
};

export default Countries;