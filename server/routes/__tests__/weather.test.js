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
})
