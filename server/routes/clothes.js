const express = require('express')

const db = require('../db/db')

const router = express.Router()

router.get('/:condition', (req, res) => {
  db.getClothes(req.params.condition)
    .then(results => {
      return res.json(results)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ message: 'Something went wrong' })
    })
})

module.exports = router
