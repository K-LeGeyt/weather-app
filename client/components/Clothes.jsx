import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { fetchClothes } from '../actions/dbClothes'
import Loading from './Loading'

export default function Clothes(props) {
  const dispatch = useDispatch()
  const { clothes, loading, error } = useSelector((state) => state.clothes)

  useEffect(() => {
    dispatch(fetchClothes(props.temp))
  }, [props.temp])

  return (
    <div className="clothes">
      <h3>What to Wear</h3>
      {loading ? (
        <Loading />
      ) : error ? (
        <>
          <p>Not sure what your should wear but definitely something.</p>
          <p className="error">{error}</p>
        </>
      ) : (
        <p data-testid="clothes">
          It&apos;s <strong>{clothes?.condition}</strong> out there so wear{' '}
          <strong>{clothes?.layers}</strong> of clothing.
        </p>
      )}
    </div>
  )
}
