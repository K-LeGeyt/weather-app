import { SET_ERROR } from '../actions/errMessage'

const initialState = null

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ERROR:
      return action.errMessage
    default:
      return state
  }
}

export default reducer
