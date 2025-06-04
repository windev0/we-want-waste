import type { ReactNode } from "react";
import { useTheme } from "../common/hooks/useTheme";
import NavBar from "../common/components/NavBar";
import ScrollToTopButton from "../common/components/ScrollToTopButton";

const MainLayout = ({ children }: { children: ReactNode }) => {
  const { theme } = useTheme();

  return (
    <body
      className="min-h-screen transition-colors duration-300"
      style={{
        backgroundColor: theme?.backgroundColor,
        color: theme?.textColor,
      }}
    >
      <header className="p-4 flex justify-end">
        {/* Navigation} */}
        <NavBar />
      </header>
      <main>{children}</main>
      <ScrollToTopButton theme={theme} />
    </body>
  );
};
export default MainLayout;
