import { useContext } from "react";
import { Toaster, toast } from "react-hot-toast";
import { TodoContext } from "../context";
import { Category } from "../types/user-interface";

export default function PackagingTODO() {
  const { state, dispatch } = useContext(TodoContext);

  const { todos, newTodos, activeCategory, initialSuggestions } = state;

  const addTodo = (category: Category) => {
    const categoryTyped = category as Category;
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

  return (
    <div className="h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4 sm:p-6 md:p-8">
      <Toaster position="top-right" />
      <div className="flex h-full bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="md:flex">
          <div className="md:w-1/3 bg-gray-50">
            <div className="p-6">
              <h1 className="text-3xl font-bold mb-6 text-gray-800">
                Packing List
              </h1>
              <nav>
                {Object.keys(initialSuggestions).map((category) => (
                  <button
                    key={category}
                    onClick={() =>
                      dispatch({
                        type: "SET_ACTIVE_CATEGORY",
                        payload: { category: category as Category },
                      })
                    }
                    className={`w-full text-left py-3 px-4 rounded-lg transition-colors duration-200 ${
                      activeCategory === category
                        ? "bg-blue-500 text-white"
                        : "text-gray-600 hover:bg-gray-200"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </nav>
            </div>
          </div>
          <div className="md:w-2/3 p-6">
            <div className="mb-6">
              <h2 className="text-2xl font-semibold mb-4 text-gray-700">
                {activeCategory}
              </h2>
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
                  className="flex-grow px-4 py-2 text-gray-700 bg-gray-100 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder={`Add ${activeCategory} item...`}
                />
                <button
                  onClick={() => addTodo(activeCategory)}
                  className="px-6 py-2 text-white bg-blue-500 rounded-r-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Add
                </button>
              </div>
              <div className="flex flex-wrap gap-2">
                {initialSuggestions[activeCategory].map((suggestion) => (
                  <button
                    key={suggestion}
                    onClick={() => addSuggestion(suggestion, activeCategory)}
                    className="px-3 py-1 text-sm text-blue-500 bg-blue-100 rounded-full hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-700">
                  To Pack
                </h3>
                <ul className="space-y-2">
                  {todos
                    .filter(
                      (todo) =>
                        !todo.completed && todo.category === activeCategory
                    )
                    .map((todo) => (
                      <li
                        key={todo.id}
                        className="flex items-center justify-between p-3 bg-white border border-gray-200 rounded-lg shadow-sm transition-all duration-200 hover:shadow-md"
                      >
                        <span className="flex items-center">
                          <input
                            type="checkbox"
                            checked={todo.completed}
                            onChange={() => toggleTodo(todo.id)}
                            className="mr-3 form-checkbox h-5 w-5 text-blue-500 rounded focus:ring-blue-500"
                          />
                          <span>{todo.text}</span>
                        </span>
                      </li>
                    ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-700">
                  Packed
                </h3>
                <ul className="space-y-2">
                  {todos
                    .filter(
                      (todo) =>
                        todo.completed && todo.category === activeCategory
                    )
                    .map((todo) => (
                      <li
                        key={todo.id}
                        className="flex items-center justify-between p-3 bg-green-50 border border-green-200 rounded-lg shadow-sm transition-all duration-200 hover:shadow-md"
                      >
                        <span className="flex items-center">
                          <input
                            type="checkbox"
                            checked={todo.completed}
                            onChange={() => toggleTodo(todo.id)}
                            className="mr-3 form-checkbox h-5 w-5 text-green-500 rounded focus:ring-green-500"
                          />
                          <span className="line-through text-gray-500">
                            {todo.text}
                          </span>
                        </span>
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
