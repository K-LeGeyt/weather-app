export const SET_ERROR = 'SET_ERROR'

export function setError (errMessage) {
  return {
    type: SET_ERROR,
    errMessage
  }
}
