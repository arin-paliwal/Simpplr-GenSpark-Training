import { createContext, useReducer, ReactNode } from "react";
import { QuizContextType } from "../types";
import { initialState, quizReducer } from "../hooks/reducer";

type QuestionProviderProps = {
  children: ReactNode;
};

export const QuizContext = createContext<QuizContextType>({
  state: initialState,
} as QuizContextType);

export const QuizProvider = ({ children }: QuestionProviderProps) => {
  const [state, dispatch] = useReducer(quizReducer, initialState);

  return (
    <QuizContext.Provider value={{ state, dispatch }}>
      {children}
    </QuizContext.Provider>
  );
};

export default QuizContext;
