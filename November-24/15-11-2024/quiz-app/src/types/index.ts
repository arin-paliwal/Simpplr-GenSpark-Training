export interface Question {
    question: string;
    correct_answer: string;
    incorrect_answers: string[];
    answers: string[];
  }
  
  export interface QuizState {
    category: string;
    difficulty: string;
    questions: Question[];
    currentQuestion: number;
    score: number;
  }
  
  export type QuizAction =
    | { type: "SET_SETTINGS"; payload: { category: string; difficulty: string } }
    | { type: "SET_QUESTIONS"; payload: Question[] }
    | { type: "UPDATE_SCORE" }
    | { type: "NEXT_QUESTION" };
  
  export interface QuizContextType {
    state: QuizState;
    dispatch: React.Dispatch<QuizAction>;
  }
  