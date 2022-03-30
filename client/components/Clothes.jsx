import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { fetchClothes } from '../actions/dbClothes'

export default function Clothes (props) {
  const dispatch = useDispatch()
  const clothes = useSelector(state => state.clothes)

  useEffect(() => {
    dispatch(fetchClothes(props.temp))
  }, [props.temp])

  return (
    <div className='clothes'>
      <h3>What to Wear</h3>
      {clothes.length > 0 &&
      <p data-testid='clothes'>
       It&apos;s <strong>{clothes[0].condition}</strong> out there so wear <strong>{clothes[0].layers}</strong> of clothing.
      </p>}
    </div>
  )
}
