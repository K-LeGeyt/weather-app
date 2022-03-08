import React from 'react'
import { useSelector } from 'react-redux'

import Activities from './Activities'
import Clothes from './Clothes'
import ErrMessage from './ErrMessage'
import WaitIndicator from './WaitIndicator'

export default function Weather () {
  const weather = useSelector(state => state.weather)

  return (
    <>
      <div className='weather'>
        <h1>{weather.location.name}</h1>
        <h4>{weather.location.country}</h4>
        <p>{weather.location.localtime}</p>
        <h2>{weather.current.temp_c} °C</h2>
        <img src={weather.current.condition.icon} />
        <h4>{weather.current.condition.text}</h4>
        <p><em>Wind {weather.current.wind_kph}kph {weather.current.wind_dir}</em></p>
        <p>Humidity {weather.current.humidity}%</p>
      </div>
      <div className='suggestions'>
        <ErrMessage />
        <Activities code={weather.current.condition.code}>
          <WaitIndicator />
        </Activities>
        <Clothes temp={weather.current.temp_c}>
          <WaitIndicator />
        </Clothes>
      </div>
    </>
  )
}
