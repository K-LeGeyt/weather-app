import { getActivities } from '../apis/actClient'

export const SET_ACT_PENDING = 'SET_ACT_PENDING'
export const SET_ACT_SUCCESS = 'SET_ACT_SUCCESS'
export const SET_ACT_ERROR = 'SET_ACT_ERROR'

export function setActsPending() {
  return {
    type: SET_ACT_PENDING
  }
}

export function setActivities(activities) {
  return {
    type: SET_ACT_SUCCESS,
    payload: {
      activities
    }
  }
}

export function activitiesError(error) {
  return {
    type: SET_ACT_ERROR,
    payload: {
      error
    }
  }
}

export function fetchActivities(code) {
  return (dispatch, getState) => {
    dispatch(setActsPending())
    const actType = getActivityType(code)
    return getActivities(actType)
      .then((activities) => {
        dispatch(setActivities(activities))
        return null
      })
      .catch((err) => {
        dispatch(activitiesError(err.message))
      })
  }
}

function getActivityType(code) {
  if (code < 1010) {
    return 'outdoor'
  }
  if (code > 1010 && code < 1192) {
    return 'indoor'
  }
  if (code > 1191 && code < 1283) {
    return 'shelter'
  }
  return null
}
