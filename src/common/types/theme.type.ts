type Theme = {
  primaryColor: string;
  secondaryColor: string;
  backgroundColor: string;
  textColor: string;
};

type ThemeContextType = {
  theme: Theme;
  value?: string;
  toggleTheme: () => void;
};

export type { ThemeContextType, Theme };
