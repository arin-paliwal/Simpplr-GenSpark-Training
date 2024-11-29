import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { TaskInput } from "../components/TaskInput";

describe("TaskInput", () => {
  it("renders input and button", () => {
    // Arrange
    const onAddTask = vi.fn();

    // Act
    render(<TaskInput onAddTask={onAddTask} />);

    // Assert
    expect(screen.getByLabelText("Add a Task")).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText("Enter your task here")
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Add Task" })
    ).toBeInTheDocument();
  });

  it("calls onAddTask with input value when button is clicked", () => {
    // Arrange
    const onAddTask = vi.fn();
    render(<TaskInput onAddTask={onAddTask} />);
    const input = screen.getByLabelText("Add a Task");
    const button = screen.getByRole("button", { name: "Add Task" });

    // Act
    fireEvent.change(input, { target: { value: "New Task" } });
    fireEvent.click(button);

    // Assert
    expect(onAddTask).toHaveBeenCalledWith("New Task");
  });

  it("clears input after adding a task", () => {
    // Arrange
    const onAddTask = vi.fn();
    render(<TaskInput onAddTask={onAddTask} />);
    const input = screen.getByLabelText("Add a Task");
    const button = screen.getByRole("button", { name: "Add Task" });

    // Act
    fireEvent.change(input, { target: { value: "New Task" } });
    fireEvent.click(button);

    // Assert
    expect(input).toHaveValue("");
  });
});
