import reducer from '../weather'

import { setWeather } from '../../actions'

describe('weather reducer', () => {
  it('sets initial state as null', () => {
    const state = reducer(undefined, { type: 'INIT' })

    expect(state).toBeNull()
  })

  it('replaces state with SET_WEATHER', () => {
    const oldState = { weather: '' }
    const weather = { weather: 'always sunny' }

    const newState = reducer(oldState, setWeather(weather))
    expect(newState).toEqual(weather)
  })
})
