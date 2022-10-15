const connection = require('./connection')

function getActivities(type, db = connection) {
  return db('activities').select().where('type', type)
}

function getClothes(condition, db = connection) {
  return db('clothes').select().where('condition', condition).first()
}

module.exports = {
  getActivities,
  getClothes
}
