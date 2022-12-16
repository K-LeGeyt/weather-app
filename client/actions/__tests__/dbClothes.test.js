import { fetchClothes, getCondition } from '../dbClothes'
import { getClothes } from '../../apis/clothesClient'

jest.mock('../../apis/clothesClient')
const fakeDispatch = jest.fn()

beforeEach(() => jest.clearAllMocks())

describe('fetchClothes', () => {
  it('dispatches clothes action', () => {
    getClothes.mockReturnValue(
      Promise.resolve([{ layers: 'grow fur', condition: 'below freezing' }])
    )

    expect.assertions(4)
    return fetchClothes(-10)(fakeDispatch).then(() => {
      expect(fakeDispatch).toHaveBeenCalledTimes(2)
      expect(fakeDispatch.mock.calls[0][0].type).toEqual('SET_CLOTHES_PENDING')
      expect(fakeDispatch.mock.calls[1][0].type).toEqual('SET_CLOTHES_SUCCESS')
      expect(fakeDispatch.mock.calls[1][0].payload.clothes).toEqual([
        { layers: 'grow fur', condition: 'below freezing' }
      ])
      return null
    })
  })

  it('sets error on failure', () => {
    getClothes.mockReturnValue(Promise.reject(new Error('Error')))

    expect.assertions(2)
    return fetchClothes()(fakeDispatch).then(() => {
      expect(fakeDispatch.mock.calls[1][0].type).toEqual('SET_CLOTHES_ERROR')
      expect(fakeDispatch.mock.calls[1][0].payload.error).toEqual('Error')
      return null
    })
  })
})

describe('getCondition', () => {
  it('returns a condition based on temperature', () => {
    const belowFreezing = getCondition(-10)
    const freezing = getCondition(0)
    const chilly = getCondition(12)
    const moderate = getCondition(17)
    const pleasant = getCondition(23)
    const hot = getCondition(30)
    const tooHot = getCondition(40)

    expect(belowFreezing).toEqual('below freezing')
    expect(freezing).toEqual('freezing')
    expect(chilly).toEqual('chilly')
    expect(moderate).toEqual('moderate')
    expect(pleasant).toEqual('pleasant')
    expect(hot).toEqual('hot')
    expect(tooHot).toEqual('too hot')
  })
})
