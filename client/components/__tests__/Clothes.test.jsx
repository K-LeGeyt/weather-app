import React from 'react'
import { Provider } from 'react-redux'
import { render, screen } from '@testing-library/react'

import Clothes from '../Clothes'

jest.mock('../../actions/dbClothes')

describe('<Clothes />', () => {
  const fakeStore = {
    subscribe: jest.fn(),
    dispatch: jest.fn(),
    getState: jest.fn(() => {
      return {
        clothes: [
          {
            id: 100,
            layers: 'a swimsuit layer',
            condition: 'global warming'
          }
        ]
      }
    })
  }

  it('displays clothing suggestions based on condition', () => {
    render(<Provider store={fakeStore}><Clothes /></Provider>)
    expect(screen.getAllByRole('heading')[0].innerHTML).toContain('What to Wear')
    expect(screen.getByTestId('clothes').innerHTML).toContain('a swimsuit layer')
    expect(screen.getByTestId('clothes').innerHTML).toContain('global warming')
  })
})
