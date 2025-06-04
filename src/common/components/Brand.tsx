import type { Theme } from "../types/theme.type";

const Brand = ({ theme, style }: { theme: Theme | null; style?: string }) => {
  return (
    <a href="/" className={style} style={{ color: theme?.primaryColor }}>
      WeWantWaste
    </a>
  );
};

export default Brand;
