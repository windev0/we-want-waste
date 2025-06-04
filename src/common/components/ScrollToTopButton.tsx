import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";


import type { Theme } from "../types/theme.type";

const ScrollToTopButton = ({ theme }: { theme: Theme | null }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      color={theme?.primaryColor}
      className={`cursor-pointer z-400 fixed bottom-6 right-6 p-3 rounded-full shadow-lg transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      } hover:scale-110`}
      aria-label="Scroll to top"
    >
      <ArrowUp size={35} />
    </button>
  );
};

export default ScrollToTopButton;
