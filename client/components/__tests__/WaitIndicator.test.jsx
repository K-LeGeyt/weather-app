import React from 'react'
import { Provider } from 'react-redux'
import { render, screen } from '@testing-library/react'

import WaitIndicator from '../WaitIndicator'

describe('<WaitIndicator />', () => {
  const fakeStore = {
    subscribe: jest.fn(),
    dispatch: jest.fn(),
    getState: jest.fn()
  }

  it('renders loading paragraph', () => {
    fakeStore.getState.mockReturnValue({ loading: true })

    render(
      <Provider store={fakeStore}>
        <WaitIndicator />
      </Provider>
    )

    expect(screen.getAllByText(/Fetching/)[0].outerHTML).toContain('p')
  })
  it('renders nothing when loading is finished', () => {
    fakeStore.getState.mockReturnValue({ loading: false })

    render(
      <Provider store={fakeStore}>
        <WaitIndicator />
      </Provider>
    )

    expect(screen.queryAllByText(/Fetching/i)).toHaveLength(0)
  })
})
