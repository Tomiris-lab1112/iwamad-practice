import { describe, it, expect } from 'vitest'
import { validateSignup } from './validateSignup'

const valid = { fullName: 'Aliya Nurlanova', email: 'aliya@example.com', tickets: '2' }

describe('validateSignup', () => {
  it('accepts valid values', () => {
    expect(validateSignup(valid, 10)).toEqual({})
  })

  it('rejects 0 tickets', () => {
    expect(validateSignup({ ...valid, tickets: '0' }, 10).tickets).toBe('Choose 1 to 4 tickets')
  })

  it('rejects 5 tickets', () => {
    expect(validateSignup({ ...valid, tickets: '5' }, 10).tickets).toBe('Choose 1 to 4 tickets')
  })

  it('rejects 1.5 tickets', () => {
    expect(validateSignup({ ...valid, tickets: '1.5' }, 10).tickets).toBe('Choose 1 to 4 tickets')
  })

  it('accepts 4 tickets', () => {
    expect(validateSignup({ ...valid, tickets: '4' }, 10)).toEqual({})
  })

  it('rejects more tickets than seats left', () => {
    expect(validateSignup({ ...valid, tickets: '3' }, 2).tickets).toBe('Only 2 seats left')
  })
})