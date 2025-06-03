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
};

const darkTheme: Theme = {
  // primaryColor: "#66b2ff",
  primaryColor: "#007bff",

  secondaryColor: "#00bcd4",
  backgroundColor: "#1e1e1e",
  cardBackgroundColor: "#2a2a2a",
  textColor: "#f1f1f1",
  borderColor: "#444",
  hoverShadowColor: "#66b2ff33",
  surfaceColor: "#2e2e2e",
  mutedTextColor: "#aaa",
  successColor: "#28d17c",
  warningColor: "#f1c40f",
  dangerColor: "#e74c3c",
  glowColor: "#66b2ff55",
};

export { lightTheme, darkTheme, DEFAULT_THEME, ThemeValues };
