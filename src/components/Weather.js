import React from 'react';

const Weather = props => {
    const { city, country, temp, humid, desc, err} = props;
    return(
      <div className = 'weather-component'>
        {
          city && country && <p className='weather-keys'>Location :
               <span className='weather-values'> {city}, {country} </span>
             </p>}
        {
          temp && humid && <p className='weather-keys'>Weather :
               <span className='weather-values'> {Math.round(temp)}° with {humid}% of humidity </span>
             </p>}
        {
          desc && <p className='weather-keys'>Description:
               <span className='weather-values'> {desc.charAt(0).toUpperCase()+ desc.slice(1)}. </span>
             </p>}
        {
          err && <p>{err}</p>}
      </div>
    )
  }
export default Weather;
