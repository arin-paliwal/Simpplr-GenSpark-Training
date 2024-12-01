/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import { AppContextType, childrenInterface } from "../types/globals";

const AppContext = createContext<AppContextType>({
  state: "",
  setState: () => {},
});

export function AppProvider({ children }: childrenInterface) {
  const [state, setState] = useState("");
  return (
    <AppContext.Provider
      value={{
        state,
        setState,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
