import { useState, useEffect } from "react";

const Form = () => {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState<{ task: string; completed: boolean }[]>(
    JSON.parse(localStorage.getItem("todos") || "[]")
  );
  const [error, setError] = useState("");

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleAddTodo = (e: React.FormEvent) => {
    e.preventDefault();

    if (!task) {
      setError("Please fill out the task.");
      return;
    }

    setError("");
    const newTodo = { task, completed: false };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
    setTask("");
  };

  const markAsDone = (index: number) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo, i) =>
        i === index ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white shadow-md rounded-md p-6">
        <h1 className="text-2xl font-bold text-gray-800 text-center mb-6">
          Todo List
        </h1>
        <form onSubmit={handleAddTodo} className="space-y-4">
          <div>
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="task"
            >
              Task
            </label>
            <input
              type="text"
              id="task"
              value={task}
              onChange={(e) => setTask(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
              placeholder="Enter your task"
            />
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <button
            type="submit"
            className="w-full py-2 bg-blue-500 text-white font-medium rounded-md hover:bg-blue-600 transition"
          >
            Add Task
          </button>
        </form>

        {todos.length > 0 && (
          <div className="mt-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              To-Do List:
            </h2>
            <ul className="space-y-4">
              {todos.map((todo, index) => (
                <li
                  key={index}
                  className={`p-4 border rounded-md ${
                    todo.completed ? "bg-green-100" : "bg-gray-100"
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <p
                        className={`text-gray-700 ${
                          todo.completed ? "line-through" : ""
                        }`}
                      >
                        <span className="font-medium">Task:</span> {todo.task}
                      </p>
                    </div>
                    <button
                      onClick={() => markAsDone(index)}
                      className={`px-4 py-2 text-sm font-medium rounded-md ${
                        todo.completed
                          ? "bg-gray-400 text-white"
                          : "bg-green-500 text-white hover:bg-green-600"
                      }`}
                    >
                      {todo.completed ? "Undo" : "Done"}
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Form;
