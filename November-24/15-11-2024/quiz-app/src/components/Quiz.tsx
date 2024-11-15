import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import QuizContext from "../context/context";
import useFetchData from "../hooks/useFetchData";

const Quiz: React.FC = () => {
  const { state, dispatch } = useContext(QuizContext);
  const navigate = useNavigate();

  const { category, difficulty, currentQuestion } = state;
  const { questions, loading } = useFetchData(category, difficulty);

  useEffect(() => {
    if (questions.length > 0 && !state.questions) {
      dispatch({ type: "SET_QUESTIONS", payload: questions });
    }
  }, [questions, dispatch, state.questions]);

  const handleAnswer = (answer: string) => {
    if (answer === questions[currentQuestion]?.correct_answer) {
      dispatch({ type: "UPDATE_SCORE" });
    }
    if (currentQuestion + 1 < questions.length) {
      dispatch({ type: "NEXT_QUESTION" });
    } else {
      navigate("/result");
    }
  };

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center bg-gray-100">
        <h2 className="text-2xl font-bold text-primary">
          Loading questions...
        </h2>
      </div>
    );
  }

  if (!questions.length) {
    return (
      <div className="h-screen flex items-center justify-center bg-gray-100">
        <h2 className="text-2xl font-bold text-primary">
          No questions available
        </h2>
      </div>
    );
  }
  const decodeHTML = (html: string) => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.documentElement.textContent || html;
  };
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <header className="bg-gray-100 border-2">
        <div className="container mx-auto px-6 py-6 flex justify-between items-center">
          <h1 className="text-3xl font-extrabold ">QuizMaster</h1>
          <div className="text-lg font-semibold ">
            Question {currentQuestion + 1} of {questions.length}
          </div>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-10 flex flex-col items-center justify-center bg-gray-800 rounded-lg shadow-lg mt-10 mb-16">
        <div className="w-full max-w-2xl">
          <h2 className="text-3xl font-semibold mb-8 text-center text-gray-100">
            {decodeHTML(questions[currentQuestion]?.question)}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {questions[currentQuestion]?.answers.map((answer, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(answer)}
                className="relative p-6 bg-gray-700 rounded-lg text-white font-medium text-left hover:scale-105 transition-transform duration-300 shadow-xl focus:outline-none focus:ring-4 focus:ring-gray-600"
              >
                <span className="absolute top-1 left-3 text-lg font-bold text-white opacity-75">
                  {String.fromCharCode(65 + index)}.
                </span>
                <span className="block pl-12">{decodeHTML(answer)}</span>
              </button>
            ))}
          </div>
        </div>
      </main>
      <footer className="bg-gray-100 p-4 text-center ">
        <p>&copy; 2024 QuizMaster. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Quiz;
