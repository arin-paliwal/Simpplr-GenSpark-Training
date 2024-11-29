import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { TaskItem } from '../components/TaskItem'

describe('TaskItem', () => {
  it('renders task and remove button', () => {
    // Arrange
    const todo = { id: 1, task: 'Test Task' }
    const onRemoveTask = vi.fn()

    // Act
    render(<TaskItem todo={todo} onRemoveTask={onRemoveTask} />)

    // Assert
    expect(screen.getByText('Test Task')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Remove' })).toBeInTheDocument()
  })

  it('calls onRemoveTask with correct id when remove button is clicked', () => {
    // Arrange
    const todo = { id: 1, task: 'Test Task' }
    const onRemoveTask = vi.fn()
    render(<TaskItem todo={todo} onRemoveTask={onRemoveTask} />)
    const removeButton = screen.getByRole('button', { name: 'Remove' })

    // Act
    fireEvent.click(removeButton)

    // Assert
    expect(onRemoveTask).toHaveBeenCalledWith(1)
  })
})

