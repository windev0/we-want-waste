import { useState } from "react";
import ThemeToggle from "./ThemeToggle";
import { useTheme } from "../hooks/useTheme";
import { ThemeValues } from "../utils/constants/theme.constants";
import StepChip from "./StepChip";

const steps = [
  { label: "Skips", href: "/skips" },
  { label: "Pricing", href: "#" },
  { label: "Contact", href: "#" },
  { label: "Contact", href: "#" },
];

// Simule l’étape actuelle (ex: 1 = "Pricing")
const currentStep = 1;

const NavBar = () => {
  const { theme, value: themeValue } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  const getLinkStyle = (index: number): any => {
    if (index < currentStep) {
      return {
        color: theme?.primaryColor,
        fontWeight: 600,
      };
    } else if (index === currentStep) {
      return {
        color: theme?.primaryColor,
        textDecoration: "underline",
      };
    } else {
      return {
        color: "#999",
        pointerEvents: "none",
        opacity: 0.5,
      };
    }
  };

  return (
    <nav
      className="w-full flex items-center justify-between px-6 py-4 shadow-md relative"
      style={{
        backgroundColor:
          themeValue === ThemeValues.DARK ? "#2d323b" : theme?.backgroundColor,
        color: theme?.textColor,
      }}
    >
      {/* Brand */}
      <a
        href="/"
        className="text-xl font-bold"
        style={{ color: theme?.primaryColor }}
      >
        WeWantWaste
      </a>

      {/* Hamburger */}
      <div className="md:hidden">
        <button
          type="button"
          className="focus:outline-none"
          aria-label="Open menu"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Desktop Nav */}
      <ul className="hidden md:flex items-center gap-6 text-sm font-medium list-none m-0 p-0">
        {steps.map((step, index) => (
          <li key={step.label}>
            <a href={step.href} style={getLinkStyle(index)}>
              <StepChip index={index} theme={theme} />
              {step.label}
            </a>
          </li>
        ))}
        <ThemeToggle />
      </ul>

      {/* Mobile Nav */}
      {menuOpen && (
        <>
          <ul
            className="absolute top-16 left-0 w-full flex flex-col gap-4 text-sm font-medium list-none m-0 p-6 md:hidden z-50"
            style={{
              backgroundColor:
                themeValue === ThemeValues.DARK
                  ? "#2d323b"
                  : theme?.backgroundColor,
              color: theme?.textColor,
            }}
          >
            {steps.map((step, index) => (
              <li key={step.label}>
                <a href={step.href} style={getLinkStyle(index)}>
                  <StepChip index={index} theme={theme} />
                  {step.label}
                </a>
              </li>
            ))}
            <ThemeToggle />
          </ul>
        </>
      )}
    </nav>
  );
};

export default NavBar;
