import { SET_LOADING, SET_WEATHER } from '../actions'
import { SET_ERROR } from '../actions/errMessage'

const initialState = false

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return true

    case SET_WEATHER:
      return false

    case SET_ERROR:
      return false

    default:
      return state
  }
}

export default reducer
