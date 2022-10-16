import reducer from '../clothes'
import { setClothes } from '../../actions/dbClothes'

describe('clothes reducer', () => {
  const fakeState = {
    clothes: {},
    loading: '',
    error: ''
  }

  it('sets an initial state with clothes as an empty object', () => {
    const initialState = reducer(undefined, { type: 'INIT' })
    expect(initialState.clothes).toEqual({})
  })

  it('sets pending state with SET_CLOTHES_PENDING', () => {
    const newState = reducer(fakeState, { type: 'SET_CLOTHES_PENDING' })

    expect(newState.loading).toEqual(true)
  })

  it('replaces state with SET_CLOTHES_SUCCESS', () => {
    const clothes = {
      id: 4,
      layers: '2-3 layers',
      condition: 'chilly'
    }

    const newState = reducer(fakeState, setClothes(clothes))
    expect(newState.clothes).toEqual(clothes)
  })

  it('sets error state with SET_CLOTHES_ERROR', () => {
    const errMessage = { error: 'error message' }
    const errorState = reducer(fakeState, {
      type: 'SET_CLOTHES_ERROR',
      payload: errMessage
    })

    expect(errorState.error).toEqual(errMessage.error)
  })
})
