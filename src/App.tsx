import "./App.css";
import ThemeToggle from "./common/components/ThemeToggle";
import ChooseSkipPage from "./features/skip/pages/ChooseSkipPage";

function App() {
  return (
    <main className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-gray-100">
      <header className="p-4 flex justify-end">
        <ThemeToggle />
      </header>
      <ChooseSkipPage />;
    </main>
  );
}

export default App;
