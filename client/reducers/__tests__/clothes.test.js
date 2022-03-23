import reducer from '../clothes'
import { setClothes } from '../../actions/dbClothes'

it('should return the initial state', () => {
  const state = reducer(undefined, { type: 'INIT' })
  expect(state).toEqual([{ id: 0, layers: '', condition: '' }])
})

it('should replace state with SET_CLOTHES_SUCCESS', () => {
  const oldState = [{ id: 0, layers: '', condition: '' }]
  const clothes = [{
    id: 4,
    layers: '2-3 layers',
    condition: 'chilly'
  }]

  const newState = reducer(oldState, setClothes(clothes))
  expect(newState).toEqual(clothes)
})
