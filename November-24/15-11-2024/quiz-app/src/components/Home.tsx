import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import QuizContext from "../context/context";
import { BookOpen, Brain, Trophy } from "lucide-react";

const Home: React.FC = () => {
  const { dispatch } = useContext(QuizContext);
  const navigate = useNavigate();

  const startQuiz = () => {
    dispatch({
      type: "SET_SETTINGS",
      payload: { category: "9", difficulty: "easy" },
    });
    navigate("/quiz");
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <header className="container mx-auto px-4 py-6">
        <nav className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">QuizMaster</h1>
          <button className="px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md transition-colors">
            Login
          </button>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-12">
        <section className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Challenge Your Mind</h2>
          <p className="text-xl text-gray-600 mb-8">
            Expand your knowledge with our diverse range of quizzes
          </p>
          <button
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md transition-colors"
            onClick={startQuiz}
          >
            Start Quiz Now
          </button>
        </section>

        <section className="grid md:grid-cols-3 gap-8 mb-16">
          {[{
            icon: BookOpen,
            title: "Learn",
            description: "Gain knowledge on various topics",
          },
          {
            icon: Brain,
            title: "Challenge",
            description: "Test your skills and improve",
          },
          {
            icon: Trophy,
            title: "Achieve",
            description: "Earn badges and track progress",
          }].map((feature, index) => (
            <div
              key={index}
              className="bg-white border border-gray-300 p-6 rounded-lg text-center"
            >
              <feature.icon className="w-12 h-12 mx-auto mb-4 text-blue-600" />
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold text-center mb-8">
            Popular Quiz Categories
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "Science",
              "History",
              "Literature",
              "Geography",
              "Music",
              "Art",
              "Sports",
              "Technology",
            ].map((category, index) => (
              <button
                key={index}
                className="h-20 text-lg font-medium border border-gray-300 rounded-md hover:bg-gray-100 transition-colors"
              >
                {category}
              </button>
            ))}
          </div>
        </section>
      </main>

      <footer className="bg-gray-100 py-6">
        <div className="container mx-auto px-4 text-center text-gray-600">
          <p>&copy; 2024 QuizMaster. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
