import { useState } from "react";
import Login from "../components/login";
import Register from "../components/register";
export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="relative h-screen overflow-hidden">
      <div
        className={`transition-opacity duration-300 ease-in-out ${
          isLogin ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <Login />
      </div>
      <div
        className={`absolute inset-0 transition-opacity duration-300 ease-in-out ${
          isLogin ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <Register />
      </div>
      <button
        onClick={toggleForm}
        className="absolute top-4 right-4 bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition duration-150 ease-in-out transform hover:scale-105"
      >
        {isLogin ? "Switch to Register" : "Switch to Login"}
      </button>
    </div>
  );
}
