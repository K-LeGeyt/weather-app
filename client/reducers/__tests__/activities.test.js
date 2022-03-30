import reducer from '../activities'
import { setActivities } from '../../actions/dbActions'

it('sets empty array as initial state', () => {
  const newState = reducer(undefined, { type: 'INIT' })
  expect(newState).toEqual([])
})

it('replaces state with SET_ACT_SUCCESS', () => {
  const oldState = []
  const activities = ['swim', 'bike', 'run']

  const newState = reducer(oldState, setActivities(activities))
  expect(newState).toEqual(activities)
})
