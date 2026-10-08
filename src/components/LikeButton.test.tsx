// @vitest-environment jsdom
import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import LikeButton from './LikeButton'
import { LikesProvider } from '../context/LikesContext'

describe('LikeButton Component', () => {
  it('renders like button and increments count on click', () => {
    render(
      <LikesProvider>
        <LikeButton />
      </LikesProvider>
    )

    // Находим кнопку по aria-label="Like"
    const button = screen.getByRole('button', { name: /like/i })
    expect(button).not.toBeNull()

    // Проверяем клик и увеличение счетчика
    fireEvent.click(button)
    expect(button.textContent).toContain('1')
  })
})