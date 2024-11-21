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
      className="relative h-8 w-14 rounded-full bg-white dark:bg-black p-1 ring-1 ring-gray-900/5 transition-colors duration-300 ease-in-out "
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
    >
      <div
        className={`${
          theme === "light" ? "translate-x-0" : "translate-x-6"
        } h-6 w-6 rounded-full bg-white border transition-transform duration-300 ease-in-out`}
      >
        <div className="grid h-full w-full place-items-center">
          {theme === "light" ? (
            <Sun className="h-4 w-4 text-gray-900" />
          ) : (
            <Moon className="h-4 w-4 text-gray-900" />
          )}
        </div>
      </div>
    </button>
  );
}
