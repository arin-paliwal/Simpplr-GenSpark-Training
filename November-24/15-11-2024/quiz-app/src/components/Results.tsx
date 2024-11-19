import { useContext, useState } from "react";
import { ArrowLeft, CheckCircle, XCircle } from "lucide-react";
import QuizContext from "../context/context";
import { useNavigate } from "react-router-dom";

export default function QuizResults() {
  const [showAnswers, setShowAnswers] = useState(false);
  const { state } = useContext(QuizContext);
  const { questions, score } = state;
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-blue-200 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="bg-blue-600 px-6 py-4">
            <h1 className="text-3xl font-bold text-white">Quiz Results</h1>
          </div>
          <div className="px-6 py-4">
            <div className="mb-6">
              <h2 className="text-2xl font-semibold text-gray-800">
                Your Score
              </h2>
              <div className="mt-2 flex items-center">
                <div className="text-5xl font-bold text-blue-600">{score}</div>
                <div className="ml-2 text-2xl text-gray-600">/ 10</div>
              </div>
              <div className="mt-2 text-sm text-gray-600">
                You answered {score} out of 10 questions correctly.
              </div>
            </div>
            <div className="mb-6">
              <button
                onClick={() => setShowAnswers(!showAnswers)}
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300"
              >
                {showAnswers ? "Hide Answers" : "Show Answers"}
              </button>
            </div>
            {showAnswers && (
              <div className="space-y-6">
                {questions.map((question, index) => (
                  <div key={index} className="border-b border-gray-200 pb-4">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                      Question {index + 1}:
                    </h3>
                    <p
                      className="text-gray-700 mb-2"
                      dangerouslySetInnerHTML={{ __html: question.question }}
                    ></p>
                    <div className="flex items-center">
                      <CheckCircle className="text-green-500 mr-2" size={20} />
                      <span
                        className="text-green-600 font-medium"
                        dangerouslySetInnerHTML={{
                          __html: question.correct_answer,
                        }}
                      ></span>
                    </div>
                    {question.incorrect_answers.map((answer, answerIndex) => (
                      <div key={answerIndex} className="flex items-center mt-1">
                        <XCircle className="text-red-500 mr-2" size={20} />
                        <span
                          className="text-red-600"
                          dangerouslySetInnerHTML={{ __html: answer }}
                        ></span>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="bg-gray-100 px-6 py-4">
            <button
              onClick={() => navigate("/")}
              className="flex items-center text-blue-600 hover:text-blue-800 transition duration-300"
            >
              <ArrowLeft className="mr-2" size={20} />
              Back to Home
            </button>
          </div>
        </div>
        <div className="mt-8 text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            How did you do?
          </h2>
          <div className="flex justify-center space-x-4">
            <div className="bg-white rounded-lg shadow p-4 flex flex-col items-center">
              <span className="text-3xl font-bold text-yellow-500">🌟</span>
              <span className="mt-2 text-sm font-medium text-gray-600">
                Excellent
              </span>
            </div>
            <div className="bg-white rounded-lg shadow p-4 flex flex-col items-center">
              <span className="text-3xl font-bold text-blue-500">👍</span>
              <span className="mt-2 text-sm font-medium text-gray-600">
                Good Job
              </span>
            </div>
            <div className="bg-white rounded-lg shadow p-4 flex flex-col items-center">
              <span className="text-3xl font-bold text-green-500">📚</span>
              <span className="mt-2 text-sm font-medium text-gray-600">
                Keep Learning
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
