import reducer from '../activities'
import { setActivities } from '../../actions/dbActions'

describe('activities reducer', () => {
  const fakeState = {
    activities: [],
    loading: '',
    error: ''
  }
  it('sets an initial state with activities as an empty array', () => {
    const initialState = reducer(undefined, { type: 'INIT' })

    expect(initialState.activities).toEqual([])
  })

  it('sets pending state with SET_ACT_PENDING', () => {
    const newState = reducer(fakeState, { type: 'SET_ACT_PENDING' })

    expect(newState.loading).toEqual(true)
  })

  it('replaces state with SET_ACT_SUCCESS', () => {
    const activities = ['swim', 'bike', 'run']
    const newState = reducer(fakeState, setActivities(activities))

    expect(newState.activities).toEqual(activities)
  })

  it('sets error state with SET_ACT_ERROR', () => {
    const errMessage = { error: 'error message' }
    const errorState = reducer(fakeState, {
      type: 'SET_ACT_ERROR',
      payload: errMessage
    })

    expect(errorState.error).toEqual(errMessage.error)
  })
})
