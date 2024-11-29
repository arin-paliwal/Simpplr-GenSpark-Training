import React from "react";
import { TaskItem } from "./TaskItem";
import { Todo } from "../App";

export interface TaskListProps {
  todos: Todo[];
  onRemoveTask: (id: number) => void;
}

export const TaskList: React.FC<TaskListProps> = ({ todos, onRemoveTask }) => {
  return (
    <div className="mt-6">
      <h2 className="text-xl font-bold mb-4">Tasks</h2>
      <ul className="space-y-2">
        {todos.length > 0 ? (
          todos.map((todo) => (
            <TaskItem key={todo.id} todo={todo} onRemoveTask={onRemoveTask} />
          ))
        ) : (
          <li className="text-gray-500">No tasks available.</li>
        )}
      </ul>
    </div>
  );
};

