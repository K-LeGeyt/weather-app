import React from 'react'
import { render, screen } from '@testing-library/react'

import Header from '../Header'

describe('<Header />', () => {
  it('renders a h1 element', () => {
    render(<Header />)
    const header = screen.getByRole('heading')

    expect(header).not.toBeNull()
    expect(header.outerHTML).toContain('h1')
  })
})
