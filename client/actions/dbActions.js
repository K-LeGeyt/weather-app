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
  if (code <= 1030) {
    return 'outdoor'
  }
  if (rainCode(code)) {
    return 'indoor'
  }
  return 'shelter'
}

function rainCode(code) {
  const rainCodes = [
    1063, 1069, 1087, 1150, 1153, 1168, 1180, 1183, 1186, 1189, 1192, 1195,
    1198, 1240, 1243, 1246, 1273, 1276
  ]
  return rainCodes.includes(code)
}
