import React from 'react'
import { useSelector } from 'react-redux'

import Activities from './Activities'
import Clothes from './Clothes'
import Forecast from './Forecast'

export default function Weather() {
  const weather = useSelector((state) => state.weather)

  const date = new Date(weather?.location.localtime).toDateString()
  const time = new Date(weather?.location.localtime).toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit'
  })

  if (!weather) {
    return <p>Please enter a city name and country in the search box</p>
  }
  return (
    <>
      <div className="weather">
        <h1>{weather.location.name}</h1>
        <h4>{weather.location.country}</h4>
        <h2>
          {date}, {time}
        </h2>
        <h2>{weather.current.temp_c} °C</h2>
        <img src={weather.current.condition.icon} />
        <h4>{weather.current.condition.text}</h4>
        <p>
          <em>
            Wind {weather.current.wind_kph}kph {weather.current.wind_dir}
          </em>
        </p>
        <p>Humidity {weather.current.humidity}%</p>
      </div>
      <div className="suggestions">
        <Activities code={weather.current.condition.code} />
        <Clothes temp={weather.current.temp_c} />
      </div>
      <Forecast />
    </>
  )
}
