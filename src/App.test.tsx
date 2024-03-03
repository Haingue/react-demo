import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it, test } from 'vitest'
import App from './App'

test('Vitest setup test', () => {
  expect(true).toBeTruthy()
})

describe('App', () => {
  it('Welcome message', () => {
    render(<App />)
    expect(screen.getByLabelText('welcome message')).toBeDefined()
  })

  it('Click counter', () => {
    render(<App />)
    const counter = screen.getByLabelText('add counter button')
    expect(counter).toBeDefined()
    const initialValue = parseInt(counter.textContent.replace('count is ', ''))
    expect(initialValue).toBe(0)
    fireEvent.click(counter)
    let newValue = parseInt(counter.textContent.replace('count is ', ''))
    expect(newValue).toBe(1)
    newValue = parseInt(counter.textContent.replace('count is ', ''))
    fireEvent.click(counter)
    expect(newValue).toBeGreaterThan(initialValue)
  })
})
