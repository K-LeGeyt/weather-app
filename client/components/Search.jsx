import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { fetchCityForecast, fetchCityWeather } from '../actions'

export default function SearchBox () {
  const [formData, setFormData] = useState({
    city: ''
  })

  const dispatch = useDispatch()

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch(fetchCityWeather(formData.city))
    dispatch(fetchCityForecast(formData.city))
  }

  return (
    <div className='city-form'>
      <form onSubmit={handleSubmit}>
        <input name='city'
          className='form-control'
          value={formData.city}
          placeholder='Search by city name...'
          onChange={handleChange}
        />
        <button>Search</button>
      </form>
    </div>
  )
}
