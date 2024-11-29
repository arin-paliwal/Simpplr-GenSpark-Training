import React, { useState } from "react";

interface TaskInputProps {
  onAddTask: (task: string) => void;
}

export const TaskInput: React.FC<TaskInputProps> = ({ onAddTask }) => {
  const [taskInput, setTaskInput] = useState("");

  const handleAddTask = () => {
    if (taskInput.trim()) {
      onAddTask(taskInput.trim());
      setTaskInput("");
    }
  };

  return (
    <div className="mb-4">
      <label htmlFor="taskInput" className="block text-lg font-medium mb-2">
        Add a Task
      </label>
      <input
        type="text"
        id="taskInput"
        value={taskInput}
        onChange={(e) => setTaskInput(e.target.value)}
        className="border border-gray-300 rounded-md w-full px-3 py-2"
        placeholder="Enter your task here"
      />
      <button
        onClick={handleAddTask}
        className="bg-blue-500 text-white font-semibold px-4 py-2 mt-3 w-full rounded-md hover:bg-blue-600"
      >
        Add Task
      </button>
    </div>
  );
};

