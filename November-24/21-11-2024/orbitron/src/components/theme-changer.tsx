"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeChanger() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <button
      onClick={toggleTheme}
      className="relative h-8 w-14 rounded-full bg-gray-300 p-1 ring-1 ring-gray-900/5 transition-colors duration-300 ease-in-out dark:bg-gray-700"
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
    >
      <div
        className={`${
          theme === "light" ? "translate-x-0" : "translate-x-6"
        } h-6 w-6 rounded-full bg-white shadow-md ring-1 ring-gray-900/5 transition-transform duration-300 ease-in-out`}
      >
        <div className="grid h-full w-full place-items-center">
          {theme === "light" ? (
            <Sun className="h-4 w-4 text-yellow-500" />
          ) : (
            <Moon className="h-4 w-4 text-gray-900" />
          )}
        </div>
      </div>
    </button>
  );
}
