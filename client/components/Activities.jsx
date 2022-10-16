import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { fetchActivities } from '../actions/dbActions'
import Loading from './Loading'

export default function Activities(props) {
  const dispatch = useDispatch()
  const { activities, loading, error } = useSelector(
    (state) => state.activities
  )

  useEffect(() => {
    dispatch(fetchActivities(props.code))
  }, [props.code])

  return (
    <div className="activities">
      <h3>Suggested Activities</h3>
      {loading ? (
        <Loading />
      ) : error ? (
        <>
          <p>Oops, couldn&apos;t find any suggested activities for today.</p>
          <p className="error">{error}</p>
        </>
      ) : (
        <ul>
          {activities.map((activity) => (
            <li key={activity.id}>{activity.activity}</li>
          ))}
        </ul>
      )}
    </div>
  )
}
