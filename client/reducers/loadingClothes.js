import {
  SET_CLOTHES_PENDING,
  SET_CLOTHES_SUCCESS
} from '../actions/dbClothes'
import { SET_ERROR } from '../actions/errMessage'

const initialState = false

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CLOTHES_PENDING:
      return true

    case SET_CLOTHES_SUCCESS:
    case SET_ERROR:
      return false

    default:
      return state
  }
}

export default reducer
