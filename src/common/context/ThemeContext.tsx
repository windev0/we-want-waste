import { createContext, useState, type ReactNode } from "react";

// internal imports
import { type ThemeContextType, type Theme } from "../types/theme.type";
import {
  darkTheme,
  DEFAULT_THEME,
  lightTheme,
  ThemeValues,
} from "../utils";

export const ThemeContext = createContext<ThemeContextType | null>(null);

// const ThemeProvider = ({ children }: { children: ReactNode }) => {
//   const [theme, setTheme] = useState<Theme>(darkTheme);
//   const [themeValue, setThemeValue] = useState<string>(DEFAULT_THEME);

//   const toggleTheme = () => {
//     setTheme((prev) => (prev === lightTheme ? darkTheme : lightTheme));
//     setThemeValue((prev) =>
//       prev === ThemeValues.LIGHT ? ThemeValues.DARK : ThemeValues.LIGHT
//     );
//   };

//   return (
//     <ThemeContext.Provider value={{ theme, toggleTheme, value: themeValue }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// };

// export default ThemeProvider;

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [themeValue, setThemeValue] = useState<string>(DEFAULT_THEME);
  const [theme, setTheme] = useState<Theme>(
    DEFAULT_THEME === ThemeValues.DARK ? darkTheme : lightTheme
  );

  const toggleTheme = () => {
    const newValue =
      themeValue === ThemeValues.LIGHT ? ThemeValues.DARK : ThemeValues.LIGHT;
    setThemeValue(newValue);
    setTheme(newValue === ThemeValues.DARK ? darkTheme : lightTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, value: themeValue }}>
      {children}
    </ThemeContext.Provider>
  );
};
export default ThemeProvider;
