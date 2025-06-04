import { Moon, Sun } from "lucide-react";
import { ThemeValues } from "../utils";
import { useTheme } from "../hooks/useTheme";

const ThemeToggle = () => {
  const { value: themeValue, toggleTheme, theme } = useTheme();

  return (
    <li className="list-none">
      <button
        onClick={toggleTheme}
        className="p-2 rounded-full hover:scale-105 transition cursor-pointer"
        style={{
          backgroundColor: theme?.primaryColor,
          color: "#fff",
        }}
      >
        {themeValue === ThemeValues.DARK ? (
          <Sun size={22} />
        ) : (
          <Moon size={22} />
        )}
      </button>
    </li>
  );
};

export default ThemeToggle;
