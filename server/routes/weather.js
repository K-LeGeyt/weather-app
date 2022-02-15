require('dotenv').config()
const express = require('express')
const request = require('superagent')

const router = express.Router()

// setup for city parameters
router.get('/:city', (req, res) => {
  const city = req.params.city
  return request.get(`http://api.weatherapi.com/v1/current.json?key=${process.env.WEATHER_API_KEY}&q=${city}&aqi=no`)
    .then(response => {
      return res.json(response.body)
    })
  console.log(err)
  res.status(500).json({ message: 'Something went wrong' })
})

// forecast api
router.get('/:city/forecast', (req, res) => {
  const city = req.params.city
  return request.get(`http://api.weatherapi.com/v1/forecast.json?key=${process.env.WEATHER_API_KEY}&q=${city}&days=3&aqi=no&alerts=no`)
    .then(response => {
      return res.json(response.body)
    })
    .catch((err) => {
      res.status(500).send(err.message)
    })
})

module.exports = router
