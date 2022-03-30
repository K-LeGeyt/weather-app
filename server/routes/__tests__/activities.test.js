const request = require('supertest')
const server = require('../../server')
const db = require('../../db/db')

jest.mock('../../db/db')

beforeEach(() => jest.clearAllMocks())

describe('GET /api/v1/activities/:type', () => {
  it('returns activities from db', () => {
    db.getActivities.mockReturnValue(Promise.resolve([{ id: 1, activity: 'go to pub', type: 'indoor' }]))
    expect.assertions(1)
    return request(server)
      .get('/api/v1/activities/indoor')
      .expect(200)
      .then(res => {
        expect(res.body[0].activity).toEqual('go to pub')
        return null
      })
      .catch(err => {
        console.log(err)
      })
  })
  it('returns 500 if error', () => {
    db.getActivities.mockImplementation(() => Promise.reject(new Error('Something went wrong')))
    jest.spyOn(console, 'log')
    console.log.mockImplementation(() => {})
    expect.assertions(3)
    return request(server)
      .get('/api/v1/activities/outer-space')
      .then(res => {
        expect(res.status).toEqual(500)
        expect(res.text).toContain('Something went wrong')
        expect(console.log).toHaveBeenCalled()
        console.log.mockRestore()
        return null
      })
  })
})
