import { SET_CLOTHES_SUCCESS } from '../actions/dbClothes'

const initialState = [{ id: 0, layers: '', condition: '' }]

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CLOTHES_SUCCESS:
      return action.clothes
    default:
      return state
  }
}

export default reducer
