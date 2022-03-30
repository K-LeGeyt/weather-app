import React from 'react'
import { Provider } from 'react-redux'
import { render, screen } from '@testing-library/react'

import Weather from '../Weather'

import Activities from '../Activities'
import Clothes from '../Clothes'

jest.mock('../../actions/index')
jest.mock('../Activities')
jest.mock('../Clothes')

Activities.mockImplementation(() => <div>Activities</div>)
Clothes.mockImplementation(() => <div>Clothes</div>)

describe('<Weather />', () => {
  const fakeStore = {
    subscribe: jest.fn(),
    dispatch: jest.fn(),
    getState: jest.fn()
  }

  it('renders header elements with city weather', () => {
    fakeStore.getState.mockReturnValue({
      weather: {
        location: { name: 'Philly' },
        current: {
          condition: { text: 'Alway\'s Sunny' }
        }
      }
    })

    render(<Provider store={fakeStore}><Weather /></Provider>)
    const headers = screen.getAllByRole('heading')

    expect(headers).not.toBeNull()
    expect(headers[0].innerHTML).toContain('Philly')
    expect(headers[1].outerHTML).toContain('h4')
    expect(headers[2].outerHTML).toContain('h2')
    expect(headers[3].innerHTML).toContain('Alway\'s Sunny')
  })
})
