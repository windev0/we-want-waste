import { useContext, useEffect } from "react";
import { DEFAULT_THEME, ThemeValues } from "../utils/constants/theme.constants";
import { ThemeContext } from "../context/ThemeContext";

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context)
    return { theme: null, toggleTheme: () => {}, value: DEFAULT_THEME };

  const { value: themeValue } = context;

  useEffect(() => {
    const root = window.document.documentElement;

    if (themeValue === ThemeValues.DARK) {
      root.classList.add(ThemeValues.DARK);
    } else {
      root.classList.remove(ThemeValues.DARK);
    }
  }, [themeValue]);

  return context;
};
