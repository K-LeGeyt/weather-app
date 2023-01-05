const knex = require('knex')
const config = require('../knexfile').test
const testDb = knex(config)
const db = require('../db')

beforeAll(() => testDb.migrate.latest())
beforeEach(() => testDb.seed.run())
afterAll(() => testDb.migrate.rollback())

describe('getActivities', () => {
  it('returns a list of activities based on type', () => {
    expect.assertions(3)
    return db.getActivities('outdoor', testDb).then((activities) => {
      expect(activities).toHaveLength(3)
      expect(activities[0].id).toEqual(1)
      expect(activities[1].activity).toEqual('running')
      return null
    })
  })
})

describe('getClothes', () => {
  it('returns a clothes object based on weather condition', () => {
    expect.assertions(2)
    return db.getClothes('chilly', testDb).then((clothes) => {
      expect(clothes.id).toEqual(4)
      expect(clothes.layers).toEqual('2-3 layers')
      return null
    })
  })
})
