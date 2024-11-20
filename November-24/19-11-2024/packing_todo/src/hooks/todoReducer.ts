import { initialSuggestions } from "../helper/suggestions";
import { Action, State } from "../types/context-reducer";
import { Category, TodoItem } from "../types/user-interface";

let nextId = 1;

export const defaultTodos: TodoItem[] = Object.entries(
  initialSuggestions
).flatMap(([category, suggestions]) =>
  suggestions.slice(0, 3).map((text) => ({
    id: nextId++,
    text,
    category: category as Category,
    completed: false,
  }))
);

export const initialState: State = {
  todos: defaultTodos,
  activeCategory: "Mountains",
  newTodos: {
    Mountains: "",
    Beaches: "",
    "College Trip": "",
    "Wedding Function": "",
    "Space Trip": "",
    "ALL": "",
  },
  initialSuggestions,
  editingTodoId: null,
};

export const todoReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "ADD_TODO": {
      const newTodo: TodoItem = {
        id: nextId++,
        text: action.payload.text,
        category: action.payload.category,
        completed: false,
      };
      return { ...state, todos: [...state.todos, newTodo] };
    }
    case "TOGGLE_TODO": {
      const updatedTodos = state.todos.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, completed: !todo.completed }
          : todo
      );
      return { ...state, todos: updatedTodos };
    }
    case "SET_ACTIVE_CATEGORY": {
      return { ...state, activeCategory: action.payload.category };
    }
    case "SET_NEW_TODO_TEXT": {
      return {
        ...state,
        newTodos: {
          ...state.newTodos,
          [action.payload.category]: action.payload.text,
        },
      };
    }
    case "ADD_SUGGESTION": {
      const newSuggestion: TodoItem = {
        id: nextId++,
        text: action.payload.suggestion,
        category: action.payload.category,
        completed: false,
      };
      return { ...state, todos: [...state.todos, newSuggestion] };
    }
    case "START_EDITING_TODO": {
      return { ...state, editingTodoId: action.payload.id };
    }
    case "FINISH_EDITING_TODO": {
      const updatedTodos = state.todos.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, text: action.payload.text }
          : todo
      );
      return { ...state, todos: updatedTodos, editingTodoId: null };
    }
    case "DELETE_TODO": {
      const updatedTodos = state.todos.filter(
        (todo) => todo.id !== action.payload.id
      );
      return { ...state, todos: updatedTodos };
    }
    case "ADD_CATEGORY": {
      return {
        ...state,
        newTodos: {
          ...state.newTodos,
          [action.payload.category]: "",
        },
        initialSuggestions: {
          ...state.initialSuggestions,
          [action.payload.category]: [],
        },
      };
    }
    default:
      return state;
  }
};