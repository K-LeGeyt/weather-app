import reducer from '../loading'

describe('loading reducer', () => {
  it('sets the initial state as false', () => {
    const state = reducer(undefined, { type: 'INIT' })
    expect(state).toEqual(false)
  })

  it('sets loading state with SET_LOADING', () => {
    const newState = reducer({ loading: false }, { type: 'SET_LOADING' })
    expect(newState).toEqual(true)
  })

  it('sets loading to false with SET_WEATHER', () => {
    const newState = reducer({ loading: true }, { type: 'SET_WEATHER' })
    expect(newState).toEqual(false)
  })

  it('sets loading to false with SET_ERROR', () => {
    const newState = reducer({ loading: true }, { type: 'SET_ERROR' })
    expect(newState).toEqual(false)
  })
})
