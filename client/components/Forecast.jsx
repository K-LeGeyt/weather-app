import React from 'react'
import { useSelector } from 'react-redux'

export default function Forecast() {
  const { forecast, loading, error } = useSelector((state) => state.forecast)

  const day1 = forecast?.forecast.forecastday[1]
  const day2 = forecast?.forecast.forecastday[2]

  return (
    <>
      <div className="forecast">
        <h3>Forecast for the next 2 days</h3>
        {loading ? (
          <p>Fetching Forecast...</p>
        ) : error ? (
          <>
            <p>
              Uh oh, looks like we are unable to predict the future after all.
            </p>
            <p className="error">{error}</p>
          </>
        ) : (
          <>
            <div className="day1">
              <h4>{new Date(day1.date).toDateString()}</h4>
              <p>{day1.day.avgtemp_c} °C</p>
              <img src={day1.day.condition.icon} />
              <p data-testid="condition">{day1.day.condition.text}</p>
            </div>
            <div className="day2">
              <h4>{new Date(day2.date).toDateString()}</h4>
              <p>{day2.day.avgtemp_c} °C</p>
              <img src={day2.day.condition.icon} />
              <p>{day2.day.condition.text}</p>
            </div>
          </>
        )}
      </div>
    </>
  )
}
