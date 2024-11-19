"use client";

import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import QuizContext from "../context/context";
import useFetchData from "../hooks/useFetchData";

const EnhancedQuiz = () => {
  const { state, dispatch } = useContext(QuizContext);
  const navigate = useNavigate();

  const { category, difficulty, currentQuestion, score } = state;
  const { questions, loading } = useFetchData(category, difficulty);

  useEffect(() => {
    if (questions.length > 0) {
      dispatch({ type: "SET_QUESTIONS", payload: questions });
    }
  }, [questions, dispatch]);

  const handleAnswer = (answer: string): void => {
    if (answer === questions[currentQuestion]?.correct_answer) {
      dispatch({ type: "UPDATE_SCORE" });
    }
    if (currentQuestion + 1 < questions.length) {
      dispatch({ type: "NEXT_QUESTION" });
    } else {
      navigate("/result");
    }
  };

  const decodeHTML = (html: string): string => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.documentElement.textContent || html;
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-100">
        <h2 className="text-2xl font-bold text-blue-800">
          Loading questions...
        </h2>
      </div>
    );
  }

  if (!questions.length) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-100">
        <h2 className="text-2xl font-bold text-red-600">
          No questions available
        </h2>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-100 to-purple-100">
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-3xl font-extrabold text-blue-800">QuizMaster</h1>
          <div className="text-lg font-semibold text-gray-700">
            Question {currentQuestion + 1} of {questions.length}
          </div>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-10 flex flex-col items-center justify-center">
        <div className="w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="bg-blue-600 p-6 text-white">
            <h2 className="text-xl font-semibold">
              Category: {questions[currentQuestion]?.category}
            </h2>
            <p className="text-sm mt-2">
              Difficulty: {questions[currentQuestion]?.difficulty}
            </p>
          </div>
          <div className="p-8">
            <h3 className="text-2xl font-bold mb-6 text-gray-800">
              {decodeHTML(questions[currentQuestion]?.question)}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {questions[currentQuestion]?.answers.map((answer, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(answer)}
                  className="relative p-6 bg-gray-100 rounded-lg text-gray-800 font-medium text-left hover:bg-blue-50 transition-colors duration-300 shadow-md focus:outline-none focus:ring-4 focus:ring-blue-300 group"
                >
                  <span className="absolute top-3 left-3 w-8 h-8 flex items-center justify-center bg-blue-600 text-white rounded-full text-lg font-bold">
                    {String.fromCharCode(65 + index)}
                  </span>
                  <span className="block pl-12">{decodeHTML(answer)}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-white shadow-md mt-auto">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <p className="text-gray-600">
            &copy; 2024 QuizMaster. All rights reserved.
          </p>
          <div className="text-blue-600 font-semibold">Score: {score}</div>
        </div>
      </footer>
    </div>
  );
};

export default EnhancedQuiz;
