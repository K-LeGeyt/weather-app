import nock from 'nock'

import { getWeather, getForecast } from '../weatherClient'

describe('getWeather', () => {
  it('returns the current weather for a city from api', () => {
    nock('http://localhost')
      .get('/api/v1/weather/philly')
      .reply(200, { weather: 'It is always sunny' })

    expect.assertions(2)
    return getWeather('philly')
      .then(weatherObj => {
        expect(weatherObj.weather).toContain('sunny')
        expect(nock.isDone()).toEqual(true)
        return null
      })
  })
})

describe('getForecast', () => {
  it('returns the forecast for a city from weather api', () => {
    nock('http://localhost')
      .get('/api/v1/weather/philly/forecast')
      .reply(200, { forecast: 'Always sunny' })

    expect.assertions(1)
    return getForecast('philly')
      .then(forecastObj => {
        expect(forecastObj.forecast).toEqual('Always sunny')
        return null
      })
  })
})
