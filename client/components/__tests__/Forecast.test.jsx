import React from 'react'
import { Provider } from 'react-redux'
import { render, screen } from '@testing-library/react'

import Forecast from '../Forecast'

jest.mock('../../actions/index')

describe('<Forecast />', () => {
  const fakeStore = {
    subscribe: jest.fn(),
    dispatch: jest.fn(),
    getState: jest.fn()
  }

  it('renders a h3 element and forecast condition', () => {
    fakeStore.getState.mockReturnValue({
      forecast: {
        forecast: {
          forecastday: [
            { date: 'today', day: { avgtemp_c: 20, condition: { text: 'sunny' } } },
            { date: 'tomorrow', day: { avgtemp_c: 20, condition: { text: 'sunny' } } },
            { date: 'the next day', day: { avgtemp_c: 20, condition: { text: 'sunny' } } }
          ]
        }
      }
    })

    render(<Provider store={fakeStore}><Forecast /></Provider>)
    const header = screen.getByRole('heading')
    const day1Condition = screen.getByTestId('condition')

    expect(header).not.toBeNull()
    expect(header.outerHTML).toContain('h3')
    expect(day1Condition.innerHTML).toContain('sunny')
  })
})
