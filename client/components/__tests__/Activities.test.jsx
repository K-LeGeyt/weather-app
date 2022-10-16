import React from 'react'
import { Provider } from 'react-redux'
import { render, screen } from '@testing-library/react'

import Activities from '../Activities'
import Loading from '../Loading'

jest.mock('../../actions/dbActions')
jest.mock('../Loading')

Loading.mockImplementation(() => <div>Loading</div>)

describe('<Activities />', () => {
  const fakeStore = {
    subscribe: jest.fn(),
    dispatch: jest.fn(),
    getState: jest.fn()
  }
  it('displays a loading state', () => {
    fakeStore.getState.mockReturnValue({
      activities: {
        activities: [],
        loading: true,
        error: null
      }
    })

    render(
      <Provider store={fakeStore}>
        <Activities />
      </Provider>
    )

    const loader = screen.getAllByText(/Loading/i)

    expect(loader).not.toBeNull()
  })
  it('displays an error message if error', () => {
    fakeStore.getState.mockReturnValue({
      activities: {
        activities: [],
        loading: false,
        error: 'Error message'
      }
    })

    render(
      <Provider store={fakeStore}>
        <Activities />
      </Provider>
    )

    const error = screen.getByText(/Error/i)

    expect(error).not.toBeNull()
    expect(error.innerHTML).toContain('Error message')
    expect(error.outerHTML).toContain('error')
  })
  it('displays a list of suggested activities', () => {
    fakeStore.getState.mockReturnValue({
      activities: {
        activities: [
          {
            id: 1,
            activity: 'swim'
          },
          {
            id: 2,
            activity: 'bike'
          },
          {
            id: 3,
            activity: 'run'
          }
        ],
        loading: false,
        error: null
      }
    })

    render(
      <Provider store={fakeStore}>
        <Activities />
      </Provider>
    )
    const listItems = screen.getAllByRole('listitem')

    expect(listItems).toHaveLength(3)
    expect(listItems[0].innerHTML).toEqual('swim')
  })
})
