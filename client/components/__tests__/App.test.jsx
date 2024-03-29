import React from 'react'
import { screen, render } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Provider } from 'react-redux'

import App from '../App'
import Header from '../Header'
import Search from '../Search'
import Weather from '../Weather'

jest.mock('../Header')
jest.mock('../Search')
jest.mock('../Weather')

Header.mockImplementation(() => <header>Header</header>)
Search.mockImplementation(() => <form>Search</form>)
Weather.mockImplementation(() => <div>Weather</div>)

describe('<App />', () => {
  const fakeStore = {
    subscribe: jest.fn(),
    dispatch: jest.fn(),
    getState: jest.fn()
  }

  it('renders the App with a class of app', () => {
    fakeStore.getState.mockReturnValue({
      weather: {}
    })

    render(
      <Provider store={fakeStore}>
        <App />
      </Provider>
    )
    expect(screen.getByTestId('apptest').outerHTML).toContain('class="app"')
  })
})
