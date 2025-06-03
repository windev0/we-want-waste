type Theme = {
  primaryColor: string;
  secondaryColor: string;
  backgroundColor: string;
  textColor: string;
  cardBackgroundColor: string;
  borderColor: string;
  hoverShadowColor: string;
  surfaceColor: string;
  mutedTextColor: string;
  successColor: string;
  warningColor: string;
  dangerColor: string;
  glowColor: string;
};

type ThemeContextType = {
  theme: Theme;
  value?: string;
  toggleTheme: () => void;
};

export type { ThemeContextType, Theme };
