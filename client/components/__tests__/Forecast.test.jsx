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
  it('displays a loading state', () => {
    fakeStore.getState.mockReturnValue({
      forecast: {
        forecast: null,
        loading: true,
        error: null
      }
    })

    render(
      <Provider store={fakeStore}>
        <Forecast />
      </Provider>
    )

    const loader = screen.getAllByText(/Fetching/i)

    expect(loader).not.toBeNull()
  })
  it('displays an error message if error', () => {
    fakeStore.getState.mockReturnValue({
      forecast: {
        forecast: null,
        loading: false,
        error: 'Error message'
      }
    })

    render(
      <Provider store={fakeStore}>
        <Forecast />
      </Provider>
    )

    const error = screen.getByText(/Error/i)

    expect(error).not.toBeNull()
    expect(error.innerHTML).toContain('Error message')
    expect(error.outerHTML).toContain('error')
  })
  it('renders a h3 element and forecast condition', () => {
    fakeStore.getState.mockReturnValue({
      forecast: {
        forecast: {
          forecast: {
            forecastday: [
              {
                date: 'today',
                day: { avgtemp_c: 20, condition: { text: 'sunny' } }
              },
              {
                date: 'tomorrow',
                day: { avgtemp_c: 20, condition: { text: 'sunny' } }
              },
              {
                date: 'the next day',
                day: { avgtemp_c: 20, condition: { text: 'sunny' } }
              }
            ]
          }
        },
        loading: false,
        error: null
      }
    })

    render(
      <Provider store={fakeStore}>
        <Forecast />
      </Provider>
    )
    const header = screen.getByRole('heading', { name: /Forecast/i })
    const day1Condition = screen.getByTestId('condition')

    expect(header).not.toBeNull()
    expect(header.outerHTML).toContain('h3')
    expect(day1Condition.innerHTML).toContain('sunny')
  })
})
