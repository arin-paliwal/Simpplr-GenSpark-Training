import React from "react";
import { Toggle } from "./compound-pattern/Toggle";
import { ToggleButton } from "./compound-pattern/ToggleButton";
import { ToggleStatus } from "./compound-pattern/ToggleStatus";
import withLoading from "./hoc-pattern/withLoading";
import UserProfile from "./hoc-pattern/userProfile";
import UserList from "./hooks-pattern/userList";
import UserListContainer from "./container-presentational/user-list-container";

const App: React.FC = () => {
  const UserProfileWithLoading = withLoading(UserProfile);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100vw",
        textAlign: "center",
      }}
    >
      <h1>React Design Patterns</h1>

      {/* Compound Component Pattern */}
      <section
        style={{
          width: "100%",
        }}
      >
        <h2>Compound Component Pattern</h2>
        <Toggle>
          <ToggleButton />
          <ToggleStatus />
        </Toggle>
      </section>

      {/* HOC Example */}
      <section>
        <h2>Higher-Order Component (HOC) Pattern</h2>
        <UserProfileWithLoading />
      </section>

      {/* Render Props Example */}
      <section>
        <h2>Render Props Pattern</h2>
        <UserList />
      </section>

      {/* Container-Presentation Pattern */}
      <section>
        <h1>Container/Presentational Pattern Example</h1>
        <UserListContainer />
      </section>
    </div>
  );
};

export default App;
