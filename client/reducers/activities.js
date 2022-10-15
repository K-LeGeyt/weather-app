import {
  SET_ACT_PENDING,
  SET_ACT_SUCCESS,
  SET_ACT_ERROR
} from '../actions/dbActions'

const initialState = {
  activities: [],
  loading: true,
  error: null
}

const reducer = (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case SET_ACT_PENDING:
      return { ...state, loading: true, error: null }

    case SET_ACT_SUCCESS:
      return {
        ...state,
        activities: payload.activities,
        loading: false,
        error: null
      }

    case SET_ACT_ERROR:
      return { ...state, loading: false, error: payload.error }

    default:
      return state
  }
}

export default reducer
