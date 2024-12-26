import { useNavigate } from "react-router-dom";

type Props = {};

const Home = (props: Props) => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate("/todolist");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">
          Welcome to the Home Page
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          Explore our features and navigate to the form page to get started.
        </p>
        <button
          onClick={handleNavigation}
          className="px-6 py-2 bg-blue-500 text-white font-medium rounded-md hover:bg-blue-600 transition"
        >
          Go to Form Page
        </button>
      </div>
    </div>
  );
};

export default Home;
