import { getClothes } from '../apis/clothesClient'

export const SET_CLOTHES_PENDING = 'SET_CLOTHES_PENDING'
export const SET_CLOTHES_SUCCESS = 'SET_CLOTHES_SUCCESS'
export const SET_CLOTHES_ERROR = 'SET_CLOTHES_ERROR'

export function setClothesPending() {
  return {
    type: SET_CLOTHES_PENDING
  }
}

export function setClothes(clothes) {
  return {
    type: SET_CLOTHES_SUCCESS,
    payload: {
      clothes
    }
  }
}

export function clothesError(error) {
  return {
    type: SET_CLOTHES_ERROR,
    payload: {
      error
    }
  }
}

export function fetchClothes(temp) {
  return (dispatch, getState) => {
    dispatch(setClothesPending())
    const condition = getCondition(temp)
    return getClothes(condition)
      .then((clothes) => {
        dispatch(setClothes(clothes))
        return null
      })
      .catch((err) => {
        dispatch(clothesError(err.message))
      })
  }
}

export function getCondition(temp) {
  if (temp < 0) {
    return 'below freezing'
  }
  if (temp >= 0 && temp < 10) {
    return 'freezing'
  }
  if (temp >= 10 && temp < 15) {
    return 'chilly'
  }
  if (temp >= 15 && temp < 19) {
    return 'moderate'
  }
  if (temp >= 19 && temp < 25) {
    return 'pleasant'
  }
  if (temp >= 25 && temp < 40) {
    return 'hot'
  }
  if (temp >= 40) {
    return 'too hot'
  }
  return null
}
