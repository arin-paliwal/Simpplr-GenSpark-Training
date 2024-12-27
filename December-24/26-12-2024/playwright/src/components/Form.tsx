import axios from "axios";
import { useEffect, useState } from "react";

type TodoItem = {
  id: number;
  value: string;
};

export default function Form() {
  const [todos, setTodos] = useState<TodoItem[]>([]);
  const [newTodo, setNewTodo] = useState<TodoItem | null>(null);

  useEffect(() => {
    fetchToDoData();
  }, []);

  const fetchToDoData = async () => {
    const response = await axios.get(`http://localhost:5000/todos`);
    setTodos(response.data);
  };

  const handleAddTodo = async () => {
    if (newTodo && newTodo.value.trim() !== "") {
      const response = await axios.post(
        `http://localhost:3500/addToDo`,
        newTodo,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setTodos(response.data);
      setNewTodo(null);
    }
  };

  const handleDelete = async (id: number) => {
    try {
      const response = await axios.delete(`http://localhost:5000/delete/${id}`);
      console.log(response);
      setTodos(response.data);
    } catch (error) {
      console.error(`Error detected : `, error);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-3xl font-semibold mb-6 text-center text-gray-800">Todo List</h2>
      <div className="flex items-center mb-4">
        <input
          className="p-3 flex-1 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          type="text"
          placeholder="Add a new todo"
          value={newTodo?.value ?? ""}
          onChange={(e) =>
            setNewTodo({ id: new Date().getTime(), value: e.target.value })
          }
        />
        <button
          onClick={handleAddTodo}
          className="ml-3 bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition duration-200"
        >
          Add Todo
        </button>
      </div>
      <ul className="space-y-3">
        {todos.map((todo) => {
          return (
            <li
              className="px-4 py-2 bg-gray-100 rounded-lg shadow hover:bg-red-500 hover:text-white transition duration-200 cursor-pointer"
              key={todo.id}
              onClick={() => handleDelete(todo.id)}
            >
              {todo.value}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
