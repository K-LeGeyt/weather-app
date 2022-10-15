const express = require('express')

const db = require('../db/db')

const router = express.Router()

router.get('/:type', (req, res) => {
  db.getActivities(req.params.type)
    .then((results) => {
      return res.json(results)
    })
    .catch((err) => {
      console.log(err)
      res.sendStatus(500)
    })
})

module.exports = router
