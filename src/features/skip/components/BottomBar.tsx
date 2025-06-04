// internal imports
import { useTheme } from "../../../common/hooks/useTheme";
import type { BottomBarProps } from "../types/skip.type";

const BottomBar = ({ skip }: BottomBarProps) => {
  const { theme } = useTheme();
  if (!skip) return null;

  const totalPrice = (skip.price_before_vat + skip.vat).toFixed(2);

  return (
    <div
      className="fixed bottom-0 left-0 w-full px-4 py-3 md:px-6 md:py-4 flex flex-col md:flex-row justify-between items-center gap-3 md:gap-0 z-50 shadow-lg transition-colors duration-300 font-bold"
      style={{
        backgroundColor: theme?.backgroundColor,
        color: theme?.textColor,
        borderTop: `1px solid ${theme?.borderColor || "#333"}`,
      }}
    >
      <div className="w-full md:w-auto text-center md:text-left">
        <p
          className="text-base font-semibold"
          style={{ color: theme?.textColor }}
        >
          {skip.size} Yard Skip – £{totalPrice} – {skip.hire_period_days} day
          hire
        </p>
        <p className="text-xs opacity-70">
          Imagery and information shown throughout this website may not reflect
          the exact shape or size specification, colours may vary, options
          and/or accessories may be featured at additional cost.
        </p>
      </div>
      <button
        className="w-full md:w-auto px-5 py-2 rounded-lg font-medium transition-colors"
        style={{
          backgroundColor: theme?.primaryColor,
          color: "#fff",
        }}
      >
        Continue →
      </button>
    </div>
  );
};
export default BottomBar;
