import reducer from '../forecast'

import { setForecast } from '../../actions'

describe('forecast reducer', () => {
  it('sets an object as initial state', () => {
    const state = reducer(undefined, { type: 'INIT' })
    expect(state).toEqual({
      location: { name: '' },
      current: { condition: { text: '' } },
      forecast: {
        forecastday: [
          { date: '', day: { avgtemp_c: 0, condition: { text: '' } } },
          { date: '', day: { avgtemp_c: 0, condition: { text: '' } } },
          { date: '', day: { avgtemp_c: 0, condition: { text: '' } } }
        ]
      }
    })
  })

  it('replaces state with SET_FORECAST', () => {
    const oldState = { forecast: '' }
    const forecast = { forecast: 'always sunny' }

    const newState = reducer(oldState, setForecast(forecast))
    expect(newState).toEqual(forecast)
  })
})
