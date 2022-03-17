import React from 'react'
import { Provider } from 'react-redux'
import { render, screen } from '@testing-library/react'

import { fetchActivities } from '../../actions/dbActions'
import Activities from '../Activities'

jest.mock('../../actions/dbActions')

describe('<Activities />', () => {
  const fakeStore = {
    subscribe: jest.fn(),
    dispatch: jest.fn(),
    getState: jest.fn(() => {
      return {
        activities: [
          {
            id: 1,
            activity: 'swim',
            type: 'outdoor'
          },
          {
            id: 2,
            activity: 'bike',
            type: 'outdoor'
          },
          {
            id: 3,
            activity: 'run',
            type: 'outdoor'
          }
        ]
      }
    })
  }

  it('displays a list of suggested activities', () => {
    render(<Provider store={fakeStore}><Activities /></Provider>)
    const listItems = screen.getAllByRole('listitem')
    expect(listItems).toHaveLength(3)
    expect(listItems[0].innerHTML).toEqual('swim')
  })
})
