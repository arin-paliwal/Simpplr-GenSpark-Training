import React, { useContext } from "react";
import QuizContext from "../context/context";

const Result: React.FC = () => {
  const { state } = useContext(QuizContext);
  const { score } = state;

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-50">
      <div className="bg-white p-10 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
        <h1 className="text-6xl font-extrabold text-gray-800 mb-6 tracking-wide">
          Your Score
        </h1>
        <div className="text-5xl text-center font-semibold text-gray-900 bg-gradient-to-r from-gray-700 via-gray-800 to-black p-1 text-transparent bg-clip-text">
          {score}
        </div>
      </div>
    </div>
  );
};

export default Result;
