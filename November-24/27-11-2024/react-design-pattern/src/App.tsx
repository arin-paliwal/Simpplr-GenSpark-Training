import React from "react";
import { Toggle } from "./compound-pattern/Toggle";
import { ToggleButton } from "./compound-pattern/ToggleButton";
import { ToggleStatus } from "./compound-pattern/ToggleStatus";
import withLoading from "./hoc-pattern/withLoading";
import UserProfile from "./hoc-pattern/userProfile";
import UserList from "./hooks-pattern/userList";
import UserListContainer from "./container-presentational/user-list-container";
import MouseTracker from "./render-props-pattern/MouseTracker";

const App: React.FC = () => {
  const UserProfileWithLoading = withLoading(UserProfile);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">React Design Patterns</h1>

      {/* Compound Component Pattern */}
      <section className="w-full mb-8 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Compound Component Pattern</h2>
        <Toggle>
          <ToggleButton />
          <ToggleStatus />
        </Toggle>
      </section>

      {/* HOC Example */}
      <section className="w-full mb-8 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Higher-Order Component (HOC) Pattern</h2>
        <UserProfileWithLoading />
      </section>

      {/* Render Props Example */}
      <section className="w-full mb-8 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Hooks Pattern</h2>
        <UserList />
      </section>

      {/* Container-Presentation Pattern */}
      <section className="w-full mb-8 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Container/Presentational Pattern</h2>
        <UserListContainer />
      </section>

      {/* Render Props Pattern */}
      <section className="w-full mb-8 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Render Props Pattern Example</h2>
        <MouseTracker
          render={(mousePosition) => (
            <div>
              <h2 className="text-xl font-medium">Mouse Position</h2>
              <p className="text-lg">X: {mousePosition.x}</p>
              <p className="text-lg">Y: {mousePosition.y}</p>
            </div>
          )}
        />
      </section>
    </div>
  );
};

export default App;
