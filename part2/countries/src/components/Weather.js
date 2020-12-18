import axios from 'axios'
import React, { useState, useEffect } from 'react'


const Weather = ( {capital} ) => {

const [ weather, setWeather ] = useState('')

useEffect(() => {
    axios
      .get(`http://api.openweathermap.org/data/2.5/weather?q=${capital}&APPID=${WEATHER_API_KEY}`)
      .then(response => {
        setWeather(response.data)
      })
  }, [])

  if (weather === '') {
      return (
          <div>
              'weather not loaded yet'
          </div>
      )
  } else {
    return (
        <div>
            <p>temperature: {weather.main.temp} K</p>
            <p>wind {weather.wind.speed} in some unit i have no idea about..</p> 
        </div>
      )
  }




}

export default Weather