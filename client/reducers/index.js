import { combineReducers } from 'redux'

import weather from './weather'
import forecast from './forecast'
import activities from './activities'
import loading from './loading'
import errMessage from './errMessage'
import clothes from './clothes'
import loadingClothes from './loadingClothes'

export default combineReducers({
  weather,
  forecast,
  activities,
  loading,
  errMessage,
  clothes,
  loadingClothes
})
