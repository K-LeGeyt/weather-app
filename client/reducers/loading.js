import {
  SET_ACT_PENDING,
  SET_ACT_SUCCESS
} from '../actions/dbActions'
import { SET_ERROR } from '../actions/errMessage'

const initialState = false

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ACT_PENDING:
      return true

    case SET_ACT_SUCCESS:
    case SET_ERROR:
      return false

    default:
      return state
  }
}

export default reducer
