import { useContext, useEffect } from "react";
import { DEFAULT_THEME, ThemeValues } from "../utils/constants/theme.constants";
import { ThemeContext } from "../context/ThemeContext";

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context)
    return { theme: null, toggleTheme: () => {}, value: DEFAULT_THEME };

  const { theme, toggleTheme, value: themeValue } = context;

  useEffect(() => {
    const root = window.document.documentElement;
    if (themeValue === ThemeValues.DARK) {
      toggleTheme(); // Ensure the theme is toggled to dark
      root.classList.add(ThemeValues.DARK);
    } else {
      toggleTheme(); // Ensure the theme is toggled to light
      root.classList.remove(ThemeValues.DARK);
    }
  }, [theme]);

  return context;
};
