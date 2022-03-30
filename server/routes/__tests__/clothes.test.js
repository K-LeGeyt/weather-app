const request = require('supertest')
const server = require('../../server')
const db = require('../../db/db')

jest.mock('../../db/db')

beforeEach(() => jest.clearAllMocks())

describe('GET /api/v1/clothes/:condition', () => {
  it('returns clothes suggestions from db', () => {
    db.getClothes.mockReturnValue(Promise.resolve([{ id: 1, layers: 'space suit', condition: 'outer-space' }]))
    expect.assertions(2)
    return request(server)
      .get('/api/v1/clothes/outer-space')
      .then(res => {
        expect(res.status).toEqual(200)
        expect(res.body[0].layers).toEqual('space suit')
        return null
      })
  })
  it('returns 500 if error', () => {
    db.getClothes.mockImplementation(() => Promise.reject(new Error('Something went wrong')))
    jest.spyOn(console, 'log')
    console.log.mockImplementation(() => {})
    expect.assertions(3)
    return request(server)
      .get('/api/v1/clothes/outer-space')
      .then(res => {
        expect(res.status).toEqual(500)
        expect(res.text).toContain('Something went wrong')
        expect(console.log).toHaveBeenCalled()
        console.log.mockRestore()
        return null
      })
  })
})
