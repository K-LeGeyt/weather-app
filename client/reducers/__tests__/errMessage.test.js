import reducer from '../errMessage'

import { setError } from '../../actions/errMessage'

describe('checks the reducer', () => {
  it('should set the initital state as null', () => {
    const state = reducer(undefined, { type: 'INIT' })
    expect(state).toBeNull()
  })
  it('should SET_ERROR if state changed', () => {
    const state = reducer(null, setError('this is an error message'))
    expect(state).toEqual('this is an error message')
  })
})
