import reducer from '../errMessage'

import { setError } from '../../actions/errMessage'

describe('error reducer', () => {
  it('sets the initial state as null', () => {
    const state = reducer(undefined, { type: 'INIT' })

    expect(state).toBeNull()
  })
  it('should SET_ERROR if state changed', () => {
    const errMessage = 'this is an error message'

    const state = reducer(null, setError(errMessage))

    expect(state).toEqual(errMessage)
  })
})
