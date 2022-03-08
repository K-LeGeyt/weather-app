import { getClothes } from '../apis/clothesClient'

export const SET_CLOTHES_PENDING = 'SET_CLOTHES_PENDING'
export const SET_CLOTHES_SUCCESS = 'SET_CLOTHES_SUCCESS'
export const SET_ERROR = 'SET_ERROR'

export function setClothes (clothes) {
  return {
    type: SET_CLOTHES_SUCCESS,
    clothes
  }
}

export function setClothesPending () {
  return {
    type: SET_CLOTHES_PENDING
  }
}

export function setError (errMessage) {
  return {
    type: SET_ERROR,
    errMessage
  }
}

export function fetchClothes (temp) {
  return (dispatch, getState) => {
    dispatch(setClothesPending())
    const condition = getCondition(temp)
    return getClothes(condition)
      .then(clothes => {
        dispatch(setClothes(clothes))
        return null
      })
      .catch(err => {
        dispatch(setError(err.message))
      })
  }
}

function getCondition (temp) {
  if (temp < 0) { return 'below freezing' }
  if (temp >= 0 && temp <= 9) { return 'freezing' }
  if (temp >= 10 && temp <= 14) { return 'chilly' }
  if (temp >= 15 && temp <= 18) { return 'moderate' }
  if (temp >= 19 && temp <= 25) { return 'pleasant' }
  if (temp >= 25 && temp <= 40) { return 'hot' }
  return null
}
