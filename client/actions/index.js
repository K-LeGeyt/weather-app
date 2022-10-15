import { getWeather, getForecast } from '../apis/weatherClient'
import { setError } from './errMessage'

export const SET_LOADING = 'SET_LOADING'
export const SET_WEATHER = 'SET_WEATHER'

export const SET_LOADING_FORECAST = 'SET_LOADING_FORECAST'
export const SET_FORECAST_SUCCESS = 'SET_FORECAST_SUCCESS'
export const SET_ERROR_FORECAST = 'SET_ERROR_FORECAST'

export function setLoading() {
  return {
    type: SET_LOADING
  }
}

export function setWeather(weather) {
  return {
    type: SET_WEATHER,
    weather
  }
}

export function loadingForecast() {
  return {
    type: SET_LOADING_FORECAST
  }
}

export function setForecast(forecast) {
  return {
    type: SET_FORECAST_SUCCESS,
    payload: {
      forecast
    }
  }
}

export function forecastError(error) {
  return {
    type: SET_ERROR_FORECAST,
    payload: {
      error
    }
  }
}

// fetch weather per City Name
export function fetchCityWeather(city) {
  return (dispatch) => {
    dispatch(setLoading())
    return getWeather(city)
      .then((weather) => {
        dispatch(setWeather(weather))
        return null
      })
      .catch((err) => {
        dispatch(setError(err.message))
      })
  }
}

export function fetchCityForecast(city) {
  return (dispatch) => {
    dispatch(loadingForecast())
    return getForecast(city)
      .then((forecast) => {
        dispatch(setForecast(forecast))
        return null
      })
      .catch((err) => {
        dispatch(forecastError(err.message))
      })
  }
}
