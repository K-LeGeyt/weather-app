const express = require('express')

const db = require('../db/db')

const router = express.Router()

router.get('/:condition', (req, res) => {
  db.getClothes(req.params.condition)
    .then((results) => {
      return res.json(results)
    })
    .catch((err) => {
      console.log(err)
      res.sendStatus(500)
    })
})

module.exports = router
