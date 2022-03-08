import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { fetchActivities } from '../actions/dbActions'

export default function Activities (props) {
  const dispatch = useDispatch()
  const activities = useSelector(state => state.activities)

  useEffect(() => {
    dispatch(fetchActivities(props.code))
  }, [props.code])

  return (
    <div className='activities'>
      <h3>Suggested Activities</h3>
      <ul>
        {activities.map(activity => (
          <li key={activity.id}>{activity.activity}</li>
        ))}
      </ul>
    </div>
  )
}
