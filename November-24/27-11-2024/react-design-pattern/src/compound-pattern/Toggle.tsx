// The Component Pattern is a React design pattern that helps build flexible and reusable components by grouping related components that work together. Instead of hardcoding logic into a single component, this pattern allows the parent component to provide shared context to child components, giving more control to the developer.

import React, { createContext, useContext, useState, ReactNode } from "react";

interface ToggleContextProps {
  isOn: boolean;
  toggle: () => void;
}

const ToggleContext = createContext<ToggleContextProps | undefined>(undefined);

export const useToggleContext = (): ToggleContextProps => {
  const context = useContext(ToggleContext);
  if (!context) {
    throw new Error("useToggleContext must be used within a Toggle Provider");
  }
  return context;
};

interface ToggleProps {
  children: ReactNode;
}
export const Toggle: React.FC<ToggleProps> = ({ children }) => {
  const [isOn, setIsOn] = useState(false);

  const toggle = () => setIsOn((prev) => !prev);

  return (
    <ToggleContext.Provider value={{ isOn, toggle }}>
      {children}
    </ToggleContext.Provider>
  );
};
