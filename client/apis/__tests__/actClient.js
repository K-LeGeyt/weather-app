import nock from 'nock'

import { getActivities } from '../actClient'

describe('getActivities', () => {
  it('returns activities based on type', () => {
    nock('http://localhost')
      .get('/api/v1/activities/outdoor')
      .reply(200, ['swim', 'bike', 'run'])

    expect.assertions(1)
    return getActivities('outdoor')
      .then(activities => {
        expect(activities).toContain('swim')
        return null
      })
  })
})
