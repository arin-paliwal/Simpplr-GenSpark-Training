import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { TaskList } from "../components/TaskList";
import { Todo } from "../App";

describe("TaskList", () => {
  it('renders "No tasks available" when todos is empty', () => {
    // Arrange
    const todos: Todo[] = [];
    const onRemoveTask = vi.fn();

    // Act
    render(<TaskList todos={todos} onRemoveTask={onRemoveTask} />);

    // Assert
    expect(screen.getByText("No tasks available.")).toBeInTheDocument();
  });

  it("renders TaskItem components for each todo", () => {
    // Arrange
    const todos = [
      { id: 1, task: "Task 1" },
      { id: 2, task: "Task 2" },
    ];
    const onRemoveTask = vi.fn();

    // Act
    render(<TaskList todos={todos} onRemoveTask={onRemoveTask} />);

    // Assert
    expect(screen.getAllByRole("listitem")).toHaveLength(2);
    expect(screen.getByText("Task 1")).toBeInTheDocument();
    expect(screen.getByText("Task 2")).toBeInTheDocument();
  });

  it("calls onRemoveTask when a task's remove button is clicked", async () => {
    // Arrange
    const todos = [
      { id: 1, task: "Task 1" },
      { id: 2, task: "Task 2" },
    ];
    const onRemoveTask = vi.fn();

    // Act
    render(<TaskList todos={todos} onRemoveTask={onRemoveTask} />);
    const removeButtons = screen.getAllByText("Remove");
    removeButtons[0].click(); 

    // Assert
    expect(onRemoveTask).toHaveBeenCalledWith(1);
  });
});
