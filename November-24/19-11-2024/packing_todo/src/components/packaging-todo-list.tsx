import { useContext, useEffect, useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import { TodoContext } from "../context";
import { Category, TodoItem } from "../types/user-interface";
import Loader from "./loader";

export default function PackagingTODO() {
  const { state, dispatch } = useContext(TodoContext);
  const [editText, setEditText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [hoveredTodoId, setHoveredTodoId] = useState<number | null>(null);
  const [newCategoryName, setNewCategoryName] = useState("");

  const { todos, newTodos, activeCategory, initialSuggestions, editingTodoId } =
    state;

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, [activeCategory]);

  const addTodo = (category: Category) => {
    const categoryTyped = category;
    if (newTodos[categoryTyped].trim() !== "") {
      dispatch({
        type: "ADD_TODO",
        payload: { category: categoryTyped, text: newTodos[categoryTyped] },
      });
      toast.success(`✅ Item added to ${categoryTyped}!`, { icon: "🎒" });
    } else {
      toast.error("Please enter an item before adding.", { icon: "❌" });
    }
  };

  const toggleTodo = (id: number) => {
    dispatch({ type: "TOGGLE_TODO", payload: { id } });
    console.log("id", id);
    const todo = todos.find((t) => t.id === id);
    if (todo) {
      toast.success(
        todo.completed
          ? `📦 ${todo.text} unpacked!`
          : `✅ ${todo.text} packed!`,
        { icon: todo.completed ? "🔓" : "🔒" }
      );
    }
  };
  const addNewCategory = () => {
    if (newCategoryName.trim() !== "") {
      dispatch({
        type: "ADD_CATEGORY",
        payload: { category: newCategoryName as Category },
      });
      setNewCategoryName("");
      toast.success(`✅ New category "${newCategoryName}" added!`, {
        icon: "📁",
      });
    } else {
      toast.error("Please enter a category name.", { icon: "❌" });
    }
  };
  const addSuggestion = (suggestion: string, category: Category) => {
    if (todos.some((todo) => todo.text === suggestion)) {
      toast.error("This suggestion is already added to the list.", {
        icon: "❌",
      });
      return;
    }
    dispatch({
      type: "ADD_TODO",
      payload: { category, text: suggestion },
    });
    toast.success(`✅ Suggestion added to ${category}!`, { icon: "💡" });
  };

  const startEditingTodo = (id: number, text: string) => {
    dispatch({ type: "START_EDITING_TODO", payload: { id } });
    setEditText(text);
  };

  const finishEditingTodo = (id: number) => {
    if (editText.trim() !== "") {
      dispatch({
        type: "FINISH_EDITING_TODO",
        payload: { id, text: editText },
      });
      toast.success("✏️ Task updated successfully!", { icon: "✅" });
    } else {
      dispatch({ type: "START_EDITING_TODO", payload: { id } });
      toast.error("Task text cannot be empty.", { icon: "❌" });
    }
  };

  const deleteTodo = (id: number) => {
    dispatch({ type: "DELETE_TODO", payload: { id } });
    toast.success("🗑️ Task deleted successfully!", { icon: "✅" });
  };

  const renderTodoItem = (todo: TodoItem) => (
    <li
      key={todo.id}
      className={`flex items-center justify-between p-3 w-full ${
        todo.completed
          ? "bg-green-50 border border-green-200"
          : "bg-white border border-gray-200"
      } rounded-lg shadow-sm transition-all duration-300 ${
        hoveredTodoId === todo.id
          ? "scale-105 shadow-lg z-10"
          : hoveredTodoId === null
            ? "hover:shadow-md"
            : "blur-sm"
      }`}
      onMouseEnter={() => setHoveredTodoId(todo.id)}
      onMouseLeave={() => setHoveredTodoId(null)}
    >
      <span className="flex items-center">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleTodo(todo.id)}
          className={`mr-3 form-checkbox h-5 w-5 ${
            todo.completed ? "text-green-500" : "text-blue-500"
          } rounded focus:ring-blue-500 transition-colors duration-200`}
        />
        {editingTodoId === todo.id ? (
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            onBlur={() => finishEditingTodo(todo.id)}
            onKeyUp={(e) => e.key === "Enter" && finishEditingTodo(todo.id)}
            className="px-2 py-1 w-[20rem] border rounded transition-all duration-200 focus:ring-2 focus:ring-blue-500"
            autoFocus
          />
        ) : (
          <span
            className={`${
              todo.completed ? "line-through text-gray-500" : ""
            } transition-all duration-200`}
          >
            {todo.text}
          </span>
        )}
      </span>
      <div className="flex items-center gap-4">
        <button
          onClick={() => startEditingTodo(todo.id, todo.text)}
          className="flex border px-2 py-1 w-[4rem] justify-center items-center rounded-md text-blue-500 hover:text-blue-700 transition-colors duration-200"
        >
          Edit
        </button>
        <button
          onClick={() => deleteTodo(todo.id)}
          className="flex border px-2 py-1 w-[4rem] justify-center items-center rounded-md text-red-500 hover:text-red-700 transition-colors duration-200"
        >
          Delete
        </button>
      </div>
    </li>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4 sm:p-6 md:p-8">
      <Toaster position="top-right" />
      <div className="flex h-full bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="flex w-full">
          <div className="w-[20rem] bg-gray-50">
            <div className="p-6">
              <h1 className="text-3xl font-bold mb-6 text-gray-800">
                Packing List
              </h1>
              <nav className="space-y-2">
                {Object.keys(initialSuggestions).map((category) => (
                  <button
                    key={category}
                    onClick={() =>
                      dispatch({
                        type: "SET_ACTIVE_CATEGORY",
                        payload: { category: category as Category },
                      })
                    }
                    className={`w-full text-left py-3 px-4 rounded-lg transition-all duration-300 ${
                      activeCategory === category
                        ? "bg-blue-500 text-white"
                        : "text-gray-600 hover:bg-gray-200"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </nav>
              <div className="mt-6">
                <h2 className="text-xl font-semibold mb-2 text-gray-700">
                  Add New Category
                </h2>
                <div className="flex">
                  <input
                    type="text"
                    value={newCategoryName}
                    onChange={(e) => setNewCategoryName(e.target.value)}
                    className="flex-grow px-4 py-2 text-gray-700 bg-gray-100 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
                    placeholder="New category name..."
                  />
                  <button
                    onClick={addNewCategory}
                    className="px-4 py-2 text-white bg-blue-500 rounded-r-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200"
                  >
                    Add
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-full p-6">
            {isLoading ? (
              <div className="flex justify-center items-center h-full w-full">
                <Loader />
              </div>
            ) : (
              <div
                className="transition-opacity duration-300 ease-in-out"
                style={{ opacity: isLoading ? 0 : 1 }}
              >
                <div className="mb-6">
                  <h2 className="text-2xl font-semibold mb-4 text-gray-700">
                    {activeCategory}
                  </h2>
                  {activeCategory !== "ALL" && (
                    <>
                      <div className="flex mb-4">
                        <input
                          type="text"
                          value={newTodos[activeCategory]}
                          onChange={(e) =>
                            dispatch({
                              type: "SET_NEW_TODO_TEXT",
                              payload: {
                                category: activeCategory,
                                text: e.target.value,
                              },
                            })
                          }
                          className="flex-grow px-4 py-2 text-gray-700 bg-gray-100 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
                          placeholder={`Add ${activeCategory} item...`}
                        />
                        <button
                          onClick={() => addTodo(activeCategory)}
                          className="px-6 py-2 text-white bg-blue-500 rounded-r-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200"
                        >
                          Add
                        </button>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {initialSuggestions[activeCategory]?.map(
                          (suggestion) => (
                            <button
                              key={suggestion}
                              onClick={() =>
                                addSuggestion(suggestion, activeCategory)
                              }
                              className="px-3 py-1 text-sm text-blue-500 bg-blue-100 rounded-full hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200"
                            >
                              {suggestion}
                            </button>
                          )
                        )}
                      </div>
                    </>
                  )}
                </div>

                <div className="flex gap-6">
                  <div className="w-1/2">
                    <h3 className="text-xl font-semibold mb-4 text-gray-700">
                      To Pack
                    </h3>
                    <ul className="space-y-2">
                      {todos
                        .filter(
                          (todo) =>
                            !todo.completed &&
                            (activeCategory === "ALL" ||
                              todo.category === activeCategory)
                        )
                        .map(renderTodoItem)}
                    </ul>
                  </div>

                  <div className="w-1/2">
                    <h3 className="text-xl font-semibold mb-4 text-gray-700">
                      Packed
                    </h3>
                    <ul className="space-y-2">
                      {todos
                        .filter(
                          (todo) =>
                            todo.completed &&
                            (activeCategory === "ALL" ||
                              todo.category === activeCategory)
                        )
                        .map(renderTodoItem)}
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
