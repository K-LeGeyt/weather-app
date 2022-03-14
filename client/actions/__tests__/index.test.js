import { fetchCityWeather, fetchCityForecast } from '../index'
import { getWeather, getForecast } from '../../apis/weatherClient'

jest.mock('../../apis/weatherClient')
const fakeDispatch = jest.fn()

beforeEach(() => jest.clearAllMocks())

describe('fetchCityWeather', () => {
  it('dispatches weather action', () => {
    getWeather.mockReturnValue(Promise.resolve('It is always sunny'))

    expect.assertions(2)
    return fetchCityWeather('philly')(fakeDispatch)
      .then(() => {
        expect(fakeDispatch).toHaveBeenCalledTimes(1)
        expect(fakeDispatch.mock.calls[0][0].weather).toEqual('It is always sunny')
        return null
      })
  })
})

describe('fetchCityForecast', () => {
  it('dispatches forecast action', () => {
    getForecast.mockReturnValue(Promise.resolve('It will be sunny tomorrow'))

    expect.assertions(2)
    return fetchCityForecast('philly')(fakeDispatch)
      .then(() => {
        expect(fakeDispatch.mock.calls[0][0].type).toEqual('SET_FORECAST')
        expect(fakeDispatch.mock.calls[0][0].forecast).toEqual('It will be sunny tomorrow')
        return null
      })
  })
})
