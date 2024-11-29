import React from "react";
import { Todo } from "../App";

interface TaskItemProps {
  todo: Todo;
  onRemoveTask: (id: number) => void;
}

export const TaskItem: React.FC<TaskItemProps> = ({ todo, onRemoveTask }) => {
  return (
    <li className="bg-gray-100 border rounded-md px-4 py-2 flex justify-between items-center">
      <span>{todo.task}</span>
      <button
        onClick={() => onRemoveTask(todo.id)}
        className="bg-red-500 text-white px-2 py-1 rounded-md hover:bg-red-600"
      >
        Remove
      </button>
    </li>
  );
};

