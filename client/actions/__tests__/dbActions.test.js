import { fetchActivities } from '../dbActions'
import { getActivities } from '../../apis/actClient'

jest.mock('../../apis/actClient')
const fakeDispatch = jest.fn()

beforeEach(() => jest.clearAllMocks())

describe('fetchActivities', () => {
  it('dispatches outdoor activities action', () => {
    getActivities.mockReturnValue(Promise.resolve(['swim', 'bike', 'run']))

    expect.assertions(4)
    return fetchActivities(1000)(fakeDispatch).then(() => {
      expect(fakeDispatch).toHaveBeenCalledTimes(2)
      expect(fakeDispatch.mock.calls[0][0].type).toEqual('SET_ACT_PENDING')
      expect(fakeDispatch.mock.calls[1][0].type).toEqual('SET_ACT_SUCCESS')
      expect(fakeDispatch.mock.calls[1][0].payload.activities).toEqual([
        'swim',
        'bike',
        'run'
      ])
      return null
    })
  })
  it('dispatches indoor activities action', () => {
    getActivities.mockReturnValue(Promise.resolve(['read', 'cook', 'sleep']))

    expect.assertions(1)
    return fetchActivities(1063)(fakeDispatch).then(() => {
      expect(fakeDispatch.mock.calls[1][0].payload.activities).toEqual([
        'read',
        'cook',
        'sleep'
      ])
      return null
    })
  })

  it('dispatches shelter activities action', () => {
    getActivities.mockReturnValue(Promise.resolve(['hide', 'hibernate']))

    expect.assertions(1)
    return fetchActivities(1200)(fakeDispatch).then(() => {
      expect(fakeDispatch.mock.calls[1][0].payload.activities).toEqual([
        'hide',
        'hibernate'
      ])
      return null
    })
  })

  it('sets error on failure', () => {
    getActivities.mockReturnValue(Promise.reject(new Error('Error')))

    expect.assertions(2)
    return fetchActivities()(fakeDispatch).then(() => {
      expect(fakeDispatch.mock.calls[1][0].type).toEqual('SET_ACT_ERROR')
      expect(fakeDispatch.mock.calls[1][0].payload.error).toEqual('Error')
      return null
    })
  })
})
