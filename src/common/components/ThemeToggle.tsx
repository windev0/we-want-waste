import { MoonIcon, SunIcon } from "lucide-react";
import {ThemeValues}  from "../utils/constants/theme.constants";
import { useTheme } from "../hooks/useTheme";

const ThemeToggle = () => {
  const { value: theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      title="Toggle theme"
      style={{
        transition: "background-color 0.3s ease",
        backgroundColor: theme === ThemeValues.DARK ? "#1a202c" : "#f7fafc",
        color: theme === ThemeValues.DARK ? "#f7fafc" : "#1a202c",
        borderColor: theme === ThemeValues.DARK ? "#4a5568" : "#cbd5e0",
        boxShadow:
          theme === ThemeValues.DARK
            ? "0 1px 3px rgba(0, 0, 0, 0.1)"
            : "0 1px 3px rgba(0, 0, 0, 0.05)",
        cursor: "pointer",
      }}
      type="button"
      data-testid="theme-toggle"
      className="p-2 border rounded-lg text-sm hover:bg-gray-100 dark:hover:bg-gray-800"
    >
      {theme === ThemeValues.DARK ? (
        // Sun icon for light mode
        <SunIcon className="w-5 h-5 text-yellow-500" />
      ) : (
        // Moon icon for dark mode
        <MoonIcon className="w-5 h-5 text-gray-800 dark:text-white" />
      )}
    </button>
  );
};

export default ThemeToggle;
