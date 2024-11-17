import { QuizAction, QuizState } from "../types";

export const initialState: QuizState = {
  category: "14",
  difficulty: "easy",
  questions: [],
  currentQuestion: 0,
  score: 0,
};

export const quizReducer = (
  state: QuizState,
  action: QuizAction,
): QuizState => {
  switch (action.type) {
    case "SET_SETTINGS":
      return {
        ...state,
        category: action.payload.category,
        difficulty: action.payload.difficulty,
      };
    case "SET_QUESTIONS":
      return { ...state, questions: action.payload };
    case "UPDATE_SCORE":
      return { ...state, score: state.score + 1 };
    case "NEXT_QUESTION":
      return { ...state, currentQuestion: state.currentQuestion + 1 };
    default:
      throw new Error(`Unhandled action type: ${(action as any).type}`);
  }
};
