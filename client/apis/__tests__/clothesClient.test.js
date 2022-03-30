import nock from 'nock'

import { getClothes } from '../clothesClient'

describe('getClothes', () => {
  it('returns clothing layers based on condition', () => {
    nock('http://localhost')
      .get('/api/v1/clothes/chilly')
      .reply(200, { layers: '2-3 layers' })

    expect.assertions(2)
    return getClothes('chilly')
      .then(layersObj => {
        expect(layersObj.layers).toEqual('2-3 layers')
        expect(nock.isDone()).toEqual(true)
        return null
      })
  })
})
