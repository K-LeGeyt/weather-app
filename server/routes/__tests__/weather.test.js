const request = require('supertest')
const server = require('../../server')
const nock = require('nock')

describe('GET /api/v1/weather/:city', () => {
  it('returns weather in city from external API', () => {
    const apiResponse = { weather: "It's Always Sunny in Philadelphia" }
    const scope = nock('http://api.weatherapi.com/v1')
      .get('/current.json')
      .query(true)
      .reply(200, apiResponse)

    expect.assertions(1)
    return request(server)
      .get('/api/v1/weather/philadelphia')
      .then((response) => {
        expect(response.body.weather).toContain('Sunny')
        scope.done()
        return null
      })
  })
  it('returns 500 if error', () => {
    const scope = nock('http://api.weatherapi.com/v1')
      .get('/current.json')
      .query(true)
      .reply(500)
    jest.spyOn(console, 'log')
    console.log.mockImplementation(() => {})
    expect.assertions(3)
    return request(server)
      .get('/api/v1/weather/philly')
      .then((response) => {
        expect(response.status).toEqual(500)
        expect(response.text).toContain('Internal Server Error')
        expect(console.log).toHaveBeenCalled()
        console.log.mockRestore()
        scope.done()
        return null
      })
  })
})
