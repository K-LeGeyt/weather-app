import { SET_ACT_SUCCESS } from '../actions/dbActions'

const initialState = []

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ACT_SUCCESS:
      return action.activities
    default:
      return state
  }
}

export default reducer
