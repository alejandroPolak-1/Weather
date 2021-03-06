import React from 'react'
import PropTypes from 'prop-types'

const Weather = ({ result }) => {
  //Extraer resultados
  const { name, main } = result

  //for prevent error
if(!name) return null

//grade Kelvin
const kelvin= 273.15;

  return (
    <div className="card-panel white col s12">
      <div className="black-text">
        <h2>The Weather of {name} is: </h2>
        <p className="temperatura">
          { parseFloat(main.temp - kelvin,10).toFixed(2)} <span> &#x2103; </span></p>
        <p> Maximum temperature: 
        { parseFloat(main.temp_max - kelvin,10).toFixed(2)} <span> &#x2103; </span></p>
        <p> Minimum temperature: 
        { parseFloat(main.temp_min - kelvin,10).toFixed(2)} <span> &#x2103; </span></p>
        <p> Pressure:  
        { parseFloat(main.pressure).toFixed(0)} <span> hpa </span></p>
        <p> Humidity:  
        { parseFloat(main.humidity).toFixed(2)} <span> % </span></p>
      </div>
    </div>
  )
}

Weather.propType = {
  result: PropTypes.object.isRequired
}

export default Weather
