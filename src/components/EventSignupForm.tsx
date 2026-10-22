import { useState } from 'react'
import type { ChangeEvent, FormEvent } from 'react'
import type { CampusEvent } from '../data/events'
import { validateSignup } from '../lib/validateSignup'
import type { SignupValues } from '../lib/validateSignup'
import TextField from './ui/TextField'
import { Button } from './ui/Button'
type Props = { event: CampusEvent }

const emptyValues: SignupValues = { fullName: '', email: '', tickets: '1' }

export function EventSignupForm({ event }: Props) {
  const [values, setValues] = useState<SignupValues>(emptyValues)
  const [touched, setTouched] = useState<Record<string, boolean>>({})
  const [submitAttempted, setSubmitAttempted] = useState(false)
  const [seatsLeft, setSeatsLeft] = useState(event.seats)
  const [message, setMessage] = useState('')

  const errors = validateSignup(values, seatsLeft)

  const showError = (field: keyof SignupValues) =>
    touched[field] || submitAttempted ? errors[field] : undefined

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target
    setValues((prev) => ({ ...prev, [name]: value }))
    setTouched((prev) => ({ ...prev, [name]: true }))
    setMessage('')
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setSubmitAttempted(true)
    if (Object.keys(errors).length > 0) return

    const tickets = Number(values.tickets)
    setSeatsLeft((s) => s - tickets)
    setMessage(`Booked: ${tickets} for ${values.fullName.trim()}.`)
    setValues(emptyValues)
    setTouched({})
    setSubmitAttempted(false)
  }

  return (
    <>
      <p>Seats left: {seatsLeft}</p>
      <form onSubmit={handleSubmit} noValidate>
        <TextField
          label="Full name"
          name="fullName"
          value={values.fullName}
          onChange={handleChange}
          error={showError('fullName')}
        />
        <TextField
          label="Email"
          name="email"
          value={values.email}
          onChange={handleChange}
          error={showError('email')}
        />
        <TextField
          label="Tickets"
          name="tickets"
          type="number"
          min={1}
          max={4}
          value={values.tickets}
          onChange={handleChange}
          error={showError('tickets')}
        />
        <Button type="submit">Book</Button>
      </form>
      {message && <p role="status">{message}</p>}
    </>
  )
}