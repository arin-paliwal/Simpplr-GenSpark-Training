import { Category, TodoItem } from "./user-interface";

export interface TodoContextProps {
  state: State;
  dispatch: React.Dispatch<Action>;
}

export interface State {
  todos: TodoItem[];
  activeCategory: Category;
  newTodos: Record<Category, string>; 
  initialSuggestions: Record<Category, string[]>;
}

export type Action =
  | { type: "ADD_TODO"; payload: { text: string; category: Category } }
  | { type: "TOGGLE_TODO"; payload: { id: number } }
  | { type: "SET_ACTIVE_CATEGORY"; payload: { category: Category } }
  | {
      type: "ADD_SUGGESTION";
      payload: { suggestion: string; category: Category };
    }
  | { type: "SET_NEW_TODO_TEXT"; payload: { category: Category; text: string } }; 
