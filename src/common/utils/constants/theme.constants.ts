import type { Theme } from "../../types/theme.type";

const ThemeValues = {
  LIGHT: "light",
  DARK: "dark",
  SYSTEM: "system",
};
const DEFAULT_THEME = ThemeValues.DARK;

const lightTheme: Theme = {
  primaryColor: "#007bff",
  secondaryColor: "#17a2b8",
  backgroundColor: "#ffffff",
  cardBackgroundColor: "#f9f9f9",
  textColor: "#212529",
  borderColor: "#dee2e6",
  hoverShadowColor: "#007bff33",
  surfaceColor: "#ffffff",
  mutedTextColor: "#6c757d",
  successColor: "#28a745",
  warningColor: "#ffc107",
  dangerColor: "#dc3545",
  glowColor: "#007bff66",

  // extends colors
  red: "#d9534f",
  redBg: "#fdecea",
  green: "#28a745",
  greenBg: "#e6f4ea",
  grayText: "#6c757d",
  grayMuted: "#adb5bd",
  grayBg: "#f8f9fa",
  grayMedium: "#dee2e6",
  grayBorder: "#ced4da",
  orange: "#fd7e14",
  orangeBg: "#fff3cd",
  white: "#ffffff",
  purple: "#6f42c1",
  purpleBg: "#f3e8ff",
};

const darkTheme: Theme = {
  primaryColor: "#007bff",
  secondaryColor: "#00bcd4",
  backgroundColor: "#23272f", // moins noir, plus gris foncé
  cardBackgroundColor: "#2f343c", // moins noir
  textColor: "#f1f1f1",
  borderColor: "#5a5f69", // plus clair
  hoverShadowColor: "#66b2ff33",
  surfaceColor: "#353a42", // moins noir
  mutedTextColor: "#b0b3b8", // plus clair
  successColor: "#28d17c",
  warningColor: "#f1c40f",
  dangerColor: "#e74c3c",
  glowColor: "#66b2ff55",

  // extends colors
  red: "#ff6b6b",
  redBg: "#442727",
  green: "#6df2b4",
  greenBg: "#1b2e24",
  grayText: "#a0a0a0",
  grayMuted: "#7d7d7d",
  grayBg: "#1f1f1f",
  grayMedium: "#2c2c2c",
  grayBorder: "#3a3a3a",
  orange: "#ff8c00",
  orangeBg: "#3f2b00",
  white: "#ffffff",
  purple: "#9b59b6",
  purpleBg: "#2c1a3d",
};

export { lightTheme, darkTheme, DEFAULT_THEME, ThemeValues };
