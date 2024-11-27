import { render, screen, fireEvent } from '@testing-library/react';
import { Counter } from './Counter';

describe('Counter Component', () => {
  test('increments count when the button is clicked', () => {
    // Arrange
    render(<Counter />);
    const button = screen.getByRole('button', { name: /increment/i });
    const counterText = screen.getByText(/count:/i);

    // Act
    fireEvent.click(button);
    fireEvent.click(button);

    // Assert
    expect(counterText).toHaveTextContent('Count: 2');
  });
});
