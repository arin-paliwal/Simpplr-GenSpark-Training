import { useState } from "react";
import Form from "./components/Form";
import Login from "./components/Login";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState<string>(
    localStorage.getItem("isLoggedIn") ?? ""
  );

  const handleLogout = () => {
    setIsLoggedIn("false");
    localStorage.setItem("isLoggedIn", "false");
  };

  const handleLogin = (username: string, password: string) => {
    if (username === "user" && password === "password") {
      setIsLoggedIn("true");
      localStorage.setItem("isLoggedIn", "true");
    }
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center bg-gray-100">
      {isLoggedIn === "true" ? (
        <div className="relative w-full max-w-lg p-6 bg-white rounded-lg shadow-lg">
          <button
            className="absolute top-4 right-6 text-white bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-200"
            onClick={handleLogout}
          >
            Logout
          </button>
          <Form />
        </div>
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;
