// internal imports
import type { BottomBarProps } from "../types/skip.type";

const BottomBar = ({ skip }: BottomBarProps) => {
  if (!skip) return null;

  const totalPrice = (skip.price_before_vat + skip.vat).toFixed(2);

  return (
    <div className="fixed bottom-0 left-0 w-full bg-zinc-900 text-white px-4 py-3 md:px-6 md:py-4 flex flex-col md:flex-row justify-between items-center gap-3 md:gap-0 z-50 shadow-lg">
      <div className="w-full md:w-auto text-center md:text-left">
        <p className="text-sm font-medium">
          {skip.size} Yard Skip – £{totalPrice} – {skip.hire_period_days} day hire
        </p>
        <p className="text-xs text-gray-400">
          Imagery and information may not reflect exact size/spec. Options may vary.
        </p>
      </div>
      <button className="w-full md:w-auto bg-blue-600 px-5 py-2 text-white rounded-lg hover:bg-blue-700 transition">
        Continue →
      </button>
    </div>
  );
};

export default BottomBar;
