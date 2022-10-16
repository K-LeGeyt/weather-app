import React from 'react'
import { Provider } from 'react-redux'
import { render, screen } from '@testing-library/react'

import Weather from '../Weather'

import Activities from '../Activities'
import Clothes from '../Clothes'
import Forecast from '../Forecast'

jest.mock('../../actions/index')
jest.mock('../Activities')
jest.mock('../Clothes')
jest.mock('../Forecast')

Activities.mockImplementation(() => <div>Activities</div>)
Clothes.mockImplementation(() => <div>Clothes</div>)
Forecast.mockImplementation(() => <div>Forecast</div>)

describe('<Weather />', () => {
  const fakeStore = {
    subscribe: jest.fn(),
    dispatch: jest.fn(),
    getState: jest.fn()
  }

  it('renders header elements with city weather', () => {
    fakeStore.getState.mockReturnValue({
      weather: {
        location: { name: 'Philly', country: 'USA', localtime: '2022-10-16' },
        current: {
          condition: { text: "Alway's Sunny" },
          temp_c: 20
        }
      }
    })

    render(
      <Provider store={fakeStore}>
        <Weather />
      </Provider>
    )
    const city = screen.getByRole('heading', { name: /Philly/i })
    const country = screen.getByRole('heading', { name: /USA/i })
    const date = screen.getByRole('heading', { name: /Oct/i })
    const condition = screen.getByRole('heading', { name: /Sunny/i })

    expect(city).not.toBeNull()
    expect(city.innerHTML).toContain('Philly')
    expect(city.outerHTML).toContain('h1')
    expect(country).not.toBeNull()
    expect(country.outerHTML).toContain('h4')
    expect(date.outerHTML).toContain('h2')
    expect(condition.innerHTML).toContain("Alway's Sunny")
    expect(condition.outerHTML).toContain('h4')
  })
  it('renders text to prompt for search when nothing in state', () => {
    fakeStore.getState.mockReturnValue({ weather: null })

    render(
      <Provider store={fakeStore}>
        <Weather />
      </Provider>
    )

    const prompt = screen.getByText(/enter/i)

    expect(prompt).not.toBeNull()
  })
})
