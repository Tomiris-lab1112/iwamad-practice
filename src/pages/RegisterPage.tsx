import { useState, type ChangeEvent, type FormEvent } from 'react'
import TextField from '../components/ui/TextField'
import {
  validateRegistration,
  type RegistrationValues,
  type RegistrationErrors,
} from '../lib/validateRegistration'

const initialValues: RegistrationValues = {
  fullName: '',
  email: '',
  password: '',
  confirmPassword: '',
  acceptTerms: false,
}

export function RegisterPage() {
  const [values, setValues] = useState<RegistrationValues>(initialValues)
  const [errors, setErrors] = useState<RegistrationErrors>({})
  const [touched, setTouched] = useState<Partial<Record<keyof RegistrationValues, boolean>>>({})
  const [submitted, setSubmitted] = useState(false)
  const [successMessage, setSuccessMessage] = useState('')

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value, checked, type } = event.target

    setValues((previous) => ({
      ...previous,
      [name]: type === 'checkbox' ? checked : value,
    }))

    setSuccessMessage('')
  }

  function handleBlur(name: keyof RegistrationValues) {
    setTouched((previous) => ({ ...previous, [name]: true }))
    setErrors(validateRegistration(values))
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitted(true)

    const validationErrors = validateRegistration(values)
    setErrors(validationErrors)
    setTouched({
      fullName: true,
      email: true,
      password: true,
      confirmPassword: true,
      acceptTerms: true,
    })

    if (Object.keys(validationErrors).length === 0) {
      setSuccessMessage(
        `Thanks, ${values.fullName.trim()}. You are registered.`
      )
    } else {
      setSuccessMessage('')
    }
  }

  function visibleError(name: keyof RegistrationValues) {
    return touched[name] || submitted ? errors[name] : undefined
  }

  return (
    <main className="register-page">
      <h1>Register</h1>

      <form onSubmit={handleSubmit} noValidate>
        <TextField
          label="Full name"
          name="fullName"
          type="text"
          autoComplete="name"
          value={values.fullName}
          onChange={handleChange}
          onBlur={() => handleBlur('fullName')}
          error={visibleError('fullName')}
          required
        />

        <TextField
          label="Email"
          name="email"
          type="email"
          autoComplete="email"
          value={values.email}
          onChange={handleChange}
          onBlur={() => handleBlur('email')}
          error={visibleError('email')}
          required
        />

        <TextField
          label="Password"
          name="password"
          type="password"
          autoComplete="new-password"
          value={values.password}
          onChange={handleChange}
          onBlur={() => handleBlur('password')}
          error={visibleError('password')}
          required
        />

        <TextField
          label="Confirm password"
          name="confirmPassword"
          type="password"
          autoComplete="new-password"
          value={values.confirmPassword}
          onChange={handleChange}
          onBlur={() => handleBlur('confirmPassword')}
          error={visibleError('confirmPassword')}
          required
        />

        <div className="form-field">
          <label>
            <input
              type="checkbox"
              name="acceptTerms"
              checked={values.acceptTerms}
              onChange={handleChange}
              onBlur={() => handleBlur('acceptTerms')}
              aria-invalid={Boolean(visibleError('acceptTerms'))}
              aria-describedby={
                visibleError('acceptTerms') ? 'acceptTerms-error' : undefined
              }
            />
            I accept the terms and conditions
          </label>

          {visibleError('acceptTerms') && (
            <p id="acceptTerms-error" className="field-error" role="alert">
              {visibleError('acceptTerms')}
            </p>
          )}
        </div>

        <button type="submit">Register</button>
      </form>

      {successMessage && (
        <p role="status" className="success-message">
          {successMessage}
        </p>
      )}
    </main>
  )
}

export default RegisterPage