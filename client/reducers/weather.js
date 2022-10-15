import { SET_WEATHER } from '../actions'

const initialState = null

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_WEATHER:
      return action.weather
    default:
      return state
  }
}

export default reducer
