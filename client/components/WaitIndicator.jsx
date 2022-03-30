import React from 'react'
import { useSelector } from 'react-redux'

export default function WaitIndicator () {
  const ShowIndicator = useSelector(state => state.loading)

  return ShowIndicator
    ? <p>Loading...</p>
    : null
}
