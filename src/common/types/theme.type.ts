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

  //   extends colors
  red?: string;
  redBg?: string;
  green?: string;
  greenBg?: string;
  grayText?: string;
  grayMuted?: string;
  grayBg?: string;
  grayMedium?: string;
  grayBorder?: string;
  orange?: string;
  orangeBg?: string;
  white?: string;
  purple?: string;
  purpleBg?: string;
};

type ThemeContextType = {
  theme: Theme;
  value?: string;
  toggleTheme: () => void;
};

export type { ThemeContextType, Theme };
