import {
  SET_LOADING_FORECAST,
  SET_FORECAST_SUCCESS,
  SET_ERROR_FORECAST
} from '../actions'

const initialState = {
  forecast: null,
  loading: true,
  error: null
}

const reducer = (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case SET_LOADING_FORECAST:
      return { ...state, loading: true, error: null }

    case SET_FORECAST_SUCCESS:
      return {
        ...state,
        forecast: payload.forecast,
        loading: false,
        error: null
      }

    case SET_ERROR_FORECAST:
      return { ...state, loading: false, error: payload.error }

    default:
      return state
  }
}

export default reducer
