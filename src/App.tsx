import "./App.css";
import ThemeToggle from "./common/components/ThemeToggle";
import { useTheme } from "./common/hooks/useTheme";
import ChooseSkipPage from "./features/skip/pages/ChooseSkipPage";

const App = () => {
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
        <ThemeToggle />
      </header>
      <ChooseSkipPage />
    </body>
  );
};

export default App;
