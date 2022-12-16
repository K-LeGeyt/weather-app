import { fetchCityWeather, fetchCityForecast } from '../index'
import { getWeather, getForecast } from '../../apis/weatherClient'

jest.mock('../../apis/weatherClient')
const fakeDispatch = jest.fn()

beforeEach(() => jest.clearAllMocks())

describe('fetchCityWeather', () => {
  it('dispatches weather action', () => {
    getWeather.mockReturnValue(Promise.resolve('It is always sunny'))

    expect.assertions(5)
    return fetchCityWeather('philly')(fakeDispatch).then(() => {
      expect(fakeDispatch).toHaveBeenCalledTimes(3)
      expect(fakeDispatch.mock.calls[0][0].type).toEqual('SET_LOADING')
      expect(fakeDispatch.mock.calls[1][0].type).toEqual('SET_ERROR')
      expect(fakeDispatch.mock.calls[2][0].type).toEqual('SET_WEATHER')
      expect(fakeDispatch.mock.calls[2][0].payload.weather).toEqual(
        'It is always sunny'
      )
      return null
    })
  })
  it('sets error on failure', () => {
    getWeather.mockImplementation(() => Promise.reject(new Error('Error')))

    expect.assertions(2)
    return fetchCityWeather()(fakeDispatch).then(() => {
      expect(fakeDispatch.mock.calls[2][0].type).toEqual('SET_ERROR')
      expect(fakeDispatch.mock.calls[2][0].errMessage).toEqual('Error')
      return null
    })
  })
})

describe('fetchCityForecast', () => {
  it('dispatches forecast action', () => {
    getForecast.mockReturnValue(Promise.resolve('It will be sunny tomorrow'))

    expect.assertions(4)
    return fetchCityForecast('philly')(fakeDispatch).then(() => {
      expect(fakeDispatch).toHaveBeenCalledTimes(2)
      expect(fakeDispatch.mock.calls[0][0].type).toEqual('SET_LOADING_FORECAST')
      expect(fakeDispatch.mock.calls[1][0].type).toEqual('SET_FORECAST_SUCCESS')
      expect(fakeDispatch.mock.calls[1][0].payload.forecast).toEqual(
        'It will be sunny tomorrow'
      )
      return null
    })
  })
  it('sets error on failure', () => {
    getForecast.mockImplementation(() => Promise.reject(new Error('Error')))

    expect.assertions(2)
    return fetchCityForecast()(fakeDispatch).then(() => {
      expect(fakeDispatch.mock.calls[1][0].type).toEqual('SET_ERROR_FORECAST')
      expect(fakeDispatch.mock.calls[1][0].payload.error).toEqual('Error')
      return null
    })
  })
})
