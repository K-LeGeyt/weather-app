import reducer from '../forecast'

import { setForecast } from '../../actions'

describe('forecast reducer', () => {
  const fakeState = {
    forecast: null,
    loading: '',
    error: ''
  }
  it('sets an initial state with forecast as null', () => {
    const state = reducer(undefined, { type: 'INIT' })
    expect(state.forecast).toBeNull()
  })

  it('sets loading state with SET_LOADING_FORECAST', () => {
    const newState = reducer(fakeState, { type: 'SET_LOADING_FORECAST' })

    expect(newState.loading).toEqual(true)
  })

  it('replaces state with SET_FORECAST', () => {
    const forecast = { forecast: 'always sunny' }

    const newState = reducer(fakeState, setForecast(forecast))
    expect(newState.forecast).toEqual(forecast)
  })

  it('sets error state with SET_ERROR_FORECAST', () => {
    const errMessage = { error: 'error message' }
    const errorState = reducer(fakeState, {
      type: 'SET_ERROR_FORECAST',
      payload: errMessage
    })

    expect(errorState.error).toEqual(errMessage.error)
  })
})
