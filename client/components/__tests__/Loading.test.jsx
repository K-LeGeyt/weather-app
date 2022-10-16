import React from 'react'
import { render, screen } from '@testing-library/react'

import Loading from '../Loading'

describe('<Loading />', () => {
  it('renders a paragraph element', () => {
    render(<Loading />)

    const paragraph = screen.getByText(/Loading/i)

    expect(paragraph).not.toBeNull()
  })
})
