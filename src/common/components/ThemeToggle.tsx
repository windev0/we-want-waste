import { MoonIcon, SunIcon } from "lucide-react";
import { ThemeValues } from "../utils/constants/theme.constants";
import { useTheme } from "../hooks/useTheme";

const ThemeToggle = () => {
  const { value: themeValue, toggleTheme, theme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      title="Toggle theme"
      style={{
        transition: "background-color 0.3s ease",
        backgroundColor:
          themeValue === ThemeValues.DARK ? "#1a202c" : "#f7fafc",
        color: themeValue === ThemeValues.DARK ? "#f7fafc" : "#1a202c",
        borderColor: themeValue === ThemeValues.DARK ? "#4a5568" : "#cbd5e0",
        boxShadow:
          themeValue === ThemeValues.DARK
            ? "0 1px 3px rgba(0, 0, 0, 0.1)"
            : "0 1px 3px rgba(0, 0, 0, 0.05)",
        cursor: "pointer",
      }}
      type="button"
      data-testid="theme-toggle"
      className="p-2 border rounded-lg text-sm hover:bg-gray-100 dark:hover:bg-gray-800"
    >
      {themeValue === ThemeValues.DARK ? (
        // Sun icon for light mode
        <div className="flex items-center space-x-2">
          <SunIcon className="w-5 h-5" color={theme?.white} size={80} />
          <span style={{ color: theme?.white }}>Light</span>
        </div>
      ) : (
        // Moon icon for dark mode
        <div className="flex items-center space-x-2">
          <MoonIcon className="w-5 h-5" size={80} />
          <span>Dark</span>
        </div>
      )}
    </button>
  );
};

export default ThemeToggle;
