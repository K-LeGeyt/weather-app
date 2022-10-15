import { combineReducers } from 'redux'

import weather from './weather'
import forecast from './forecast'
import loading from './loading'
import errMessage from './errMessage'
import activities from './activities'
import clothes from './clothes'

export default combineReducers({
  weather,
  forecast,
  loading,
  errMessage,
  activities,
  clothes
})
