import {
  SET_CLOTHES_PENDING,
  SET_CLOTHES_SUCCESS,
  SET_CLOTHES_ERROR
} from '../actions/dbClothes'

const initialState = {
  clothes: {},
  loading: true,
  error: null
}

const reducer = (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case SET_CLOTHES_PENDING:
      return { ...state, loading: true, error: null }

    case SET_CLOTHES_SUCCESS:
      return {
        ...state,
        clothes: payload.clothes,
        loading: false,
        error: null
      }

    case SET_CLOTHES_ERROR:
      return { ...state, loading: false, error: payload.error }

    default:
      return state
  }
}

export default reducer
