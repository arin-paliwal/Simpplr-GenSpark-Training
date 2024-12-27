import { useState } from "react";

const Login = ({
  onLogin,
}: {
  onLogin: (username: string, password: string) => void;
}) => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleLoginClick = () => {
    onLogin(username, password);
  };

  return (
    <div className="w-full max-w-sm p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Login Form</h2>
      <form className="flex flex-col gap-4">
        <input
          className="px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          type="text"
          placeholder="Username"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className="px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          type="password"
          placeholder="Password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="mt-4 bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition duration-200 font-semibold"
          onClick={handleLoginClick}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
