import { useNavigate } from "react-router-dom";

import { useTheme } from "../hooks/useTheme";
import { ROUTES } from "../../configs/router";

const NotFound = () => {
  const navigate = useNavigate();
  const { theme } = useTheme();

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center text-center px-6 py-12"
      style={{
        backgroundColor: theme?.backgroundColor || "#fff",
        color: theme?.textColor || "#111",
      }}
    >
      <img
        src="/animations/404.gif"
        alt="404 not found"
        className="w-72 md:w-96 mb-8"
        loading="lazy"
      />

      {/* Titre et texte */}
      <h1 className="text-3xl font-bold mb-2">Page Not Found</h1>
      <p className="text-gray-500 dark:text-gray-400 mb-6">
        Sorry, we couldn't find the page you're looking for.
      </p>

      {/* return button*/}
      <button
        onClick={() => navigate(ROUTES.HOME)}
        style={{
          backgroundColor: theme?.secondaryColor || "#3b82f6",
          color: theme?.white,
        }}
        className="px-4 py-2 rounded-md hover:opacity-90 transition-colors duration-300 cursor-pointer"
      >
        Go Home
      </button>
    </div>
  );
};

export default NotFound;
