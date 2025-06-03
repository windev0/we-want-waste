import type { Theme } from "../../types/theme.type";

const ThemeValues = {
  LIGHT: "light",
  DARK: "dark",
  SYSTEM: "system",
};
const DEFAULT_THEME = ThemeValues.DARK;

const lightTheme: Theme = {
  primaryColor: "#3498db",
  secondaryColor: "#2ecc71",
  backgroundColor: "#fff",
  textColor: "#333",
};

const darkTheme: Theme = {
  primaryColor: "#2980b9",
  secondaryColor: "#27ae60",
  backgroundColor: "#121212",
  textColor: "#eee",
};

export { lightTheme, darkTheme, DEFAULT_THEME, ThemeValues };
