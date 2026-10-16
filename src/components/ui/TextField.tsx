import type { InputHTMLAttributes } from 'react'

type TextFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string
  error?: string
}

export default function TextField({
  label,
  error,
  id,
  ...inputProps
}: TextFieldProps) {
  const inputId = id ?? inputProps.name
  const errorId = `${inputId}-error`

  return (
    <div className="form-field">
      <label htmlFor={inputId}>{label}</label>

      <input
        {...inputProps}
        id={inputId}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errorId : undefined}
      />

      {error && (
        <p id={errorId} className="field-error" role="alert">
          {error}
        </p>
      )}
    </div>
  )
}