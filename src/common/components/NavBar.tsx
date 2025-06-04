import { useState } from "react";
import {
  Calendar,
  CreditCard,
  MapPin,
  ShieldCheck,
  Trash2,
  Truck,
} from "lucide-react";

import ThemeToggle from "./ThemeToggle";
import { useTheme } from "../hooks/useTheme";
import { ThemeValues } from "../utils/constants/theme.constants";
import StepChip from "./StepChip";
import Brand from "./Brand";

const steps = [
  { label: "Postcode", href: "#", icon: MapPin },
  { label: "Waste Type", href: "#", icon: Trash2 },
  { label: "Select Skip", href: "#", icon: Truck },
  { label: "Permit Check", href: "#", icon: ShieldCheck },
  { label: "Choose Date", href: "#", icon: Calendar },
  { label: "Payment", href: "#", icon: CreditCard },
];

// Simule l’étape actuelle (ex: 1 = "Pricing")
const currentStep = 1;

const NavBar = () => {
  const { theme, value: themeValue } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  const getLinkStyle = (index: number): any => {
    if (index < currentStep) {
      return {
        color: themeValue == ThemeValues.DARK ? theme?.white : "#333",
        fontWeight: 600,
        // fontSize: "1rem",
      };
    } else if (index === currentStep) {
      return {
        color: themeValue == ThemeValues.DARK ? theme?.white : "#333",
        textDecoration: "underline",
        // fontSize: "1rem",
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
      <Brand theme={theme} style="hidden text-xl font-bold xl:inline" />

      {/* Hamburger - visible on mobile */}
      <div className="md:hidden flex items-center justify-between w-full">
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

        {/* Brand for mobile */}
        <Brand theme={theme} style="font-bold xl:inline" />
      </div>

      {/* Desktop Nav */}
      <ul className="hidden md:flex items-center gap-6 text-sm font-medium list-none m-0 p-0">
        {steps.map((step, index) => {
          const Icon = step.icon;
          return (
            <li key={step.label} className="list-none">
              <a
                href={step.href}
                style={getLinkStyle(index)}
                className="flex items-center gap-2"
              >
                <StepChip index={index} theme={theme} />
                <Icon
                  size={18}
                  style={{
                    color:
                      themeValue == ThemeValues.DARK ? theme?.white : "#333",
                  }}
                  className="hidden lg:inline"
                />
                <span>{step.label}</span>
              </a>
            </li>
          );
        })}
      </ul>

      {/* Desktop ThemeToggle */}
      <div className="hidden md:block ml-3">
        <ThemeToggle />
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
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
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <li key={step.label} className="list-none">
                <a
                  href={step.href}
                  style={getLinkStyle(index)}
                  className="flex items-center gap-2"
                >
                  <StepChip index={index} theme={theme} />
                  <Icon
                    size={18}
                    style={{ color: theme?.white }}
                    className="hidden md:w-full"
                  />
                  <span>{step.label}</span>
                </a>
              </li>
            );
          })}
          <ThemeToggle />
        </ul>
      )}
    </nav>
  );
};

export default NavBar;
