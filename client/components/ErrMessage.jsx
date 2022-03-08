import React from 'react'
import { useSelector } from 'react-redux'

export default function ErrMessage () {
  const errMessage = useSelector(state => state.errMessage)

  return (
    <>{errMessage}</>
  )
}
