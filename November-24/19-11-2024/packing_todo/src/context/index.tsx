import React, { createContext, useReducer, ReactNode } from "react";
import { TodoContextProps } from "../types/context-reducer";
import { initialState, todoReducer } from "../hooks/todoReducer";

export const TodoProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};
export const TodoContext = createContext<TodoContextProps>({
  state: initialState,
} as TodoContextProps);
