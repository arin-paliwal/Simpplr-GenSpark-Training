import { Toaster } from "react-hot-toast";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { routesConfig } from "./routes/config";
import PrivateRoute from "./routes/protected";

function App() {
  return (
    <>
      <Toaster />
      <Router>
        <Routes>
          {routesConfig.map(({ path, Component, isPrivate }) => (
            <Route
              key={path}
              path={path}
              element={
                isPrivate ? (
                  <PrivateRoute>
                    <Component />
                  </PrivateRoute>
                ) : (
                  <Component />
                )
              }
            />
          ))}
        </Routes>
      </Router>
    </>
  );
}

export default App;
