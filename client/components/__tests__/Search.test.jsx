import React from 'react'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { Provider } from 'react-redux'

import Search from '../Search'
import { fetchCityForecast, fetchCityWeather } from '../../actions'

jest.mock('../../actions')

describe('<Search />', () => {
  const fakeStore = {
    subscribe: jest.fn(),
    getState: jest.fn(),
    dispatch: jest.fn()
  }
  it('city input field dispatches weather search', async () => {
    fetchCityWeather.mockReturnValue(Promise.resolve())
    render(<Provider store={fakeStore}><Search /></Provider>)
    const input = screen.getByRole('textbox')
    fireEvent.change(input, { target: { value: 'Philly' } })
    const button = screen.getByRole('button')
    fireEvent.click(button)

    await waitFor(() => expect(fetchCityWeather).toHaveBeenCalled())
    expect(fetchCityWeather.mock.calls[0][0]).toEqual('Philly')
  })

  it('city input field dispatches forecast search', async () => {
    fetchCityForecast.mockReturnValue(Promise.resolve())
    render(<Provider store={fakeStore}><Search /></Provider>)
    const input = screen.getByRole('textbox')
    fireEvent.change(input, { target: { value: 'Auckland' } })
    const button = screen.getByRole('button')
    fireEvent.click(button)

    await waitFor(() => expect(fetchCityForecast).toHaveBeenCalled())
    expect(fetchCityWeather.mock.calls[1][0]).toEqual('Auckland')
  })
})
