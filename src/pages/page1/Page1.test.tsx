import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import Page1 from './Page1'

describe('Page1', () => {
  it('renders headline', () => {
    render(<Page1 />)
    const headline = screen.getByText(/Page 1/i)
    expect(headline).toBeDefined()
    expect(headline.innerHTML).toContain('Page 1')
  })
})
