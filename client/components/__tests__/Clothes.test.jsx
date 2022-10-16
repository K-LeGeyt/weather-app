import React from 'react'
import { Provider } from 'react-redux'
import { render, screen } from '@testing-library/react'

import Clothes from '../Clothes'
import Loading from '../Loading'

jest.mock('../../actions/dbClothes')
jest.mock('../Loading')

Loading.mockImplementation(() => <div>Loading</div>)

describe('<Clothes />', () => {
  const fakeStore = {
    subscribe: jest.fn(),
    dispatch: jest.fn(),
    getState: jest.fn()
  }
  it('displays a loading state', () => {
    fakeStore.getState.mockReturnValue({
      clothes: {
        clothes: {},
        loading: true,
        error: null
      }
    })

    render(
      <Provider store={fakeStore}>
        <Clothes />
      </Provider>
    )

    const loader = screen.getAllByText(/Loading/i)

    expect(loader).not.toBeNull()
  })
  it('displays an error message if error', () => {
    fakeStore.getState.mockReturnValue({
      clothes: {
        clothes: {},
        loading: false,
        error: 'Error message'
      }
    })

    render(
      <Provider store={fakeStore}>
        <Clothes />
      </Provider>
    )

    const error = screen.getByText(/Error/i)

    expect(error).not.toBeNull()
    expect(error.innerHTML).toContain('Error message')
    expect(error.outerHTML).toContain('error')
  })
  it('displays clothing suggestions based on condition', () => {
    fakeStore.getState.mockReturnValue({
      clothes: {
        clothes: {
          id: 100,
          layers: 'a swimsuit layer',
          condition: 'global warming'
        },
        loading: false,
        error: null
      }
    })

    render(
      <Provider store={fakeStore}>
        <Clothes />
      </Provider>
    )

    expect(screen.getAllByRole('heading')[0].innerHTML).toContain(
      'What to Wear'
    )
    expect(screen.getByTestId('clothes').innerHTML).toContain(
      'a swimsuit layer'
    )
    expect(screen.getByTestId('clothes').innerHTML).toContain('global warming')
  })
})
