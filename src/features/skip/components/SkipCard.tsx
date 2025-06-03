// external imports
import { CheckCircle, Truck, Weight } from "lucide-react";
import clsx from "clsx";

// internal imports
import type { SkipCardProps } from "../types/skip.type";
import { useTheme } from "../../../common/hooks/useTheme";

const SkipCard = ({ skip, onSelect, selected }: SkipCardProps) => {
  const {
    id,
    size,
    hire_period_days,
    price_before_vat,
    vat,
    allowed_on_road,
    allows_heavy_waste,
  } = skip;
  const totalPrice = price_before_vat + vat;
  const imageUrl = `/images/${size}-yarder-skip.jpg`;
  const { theme } = useTheme();

  return (
    <div
      onClick={() => onSelect(id)}
      className={clsx(
        "relative p-4 rounded-2xl border cursor-pointer transition-all duration-300",
        selected
          ? "border-blue-600 ring-2 ring-blue-400/50 shadow-xl"
          : "border-gray-300 hover:shadow-lg"
      )}
    >
      {/* Badge de taille */}
      <div className="absolute top-2 right-2 bg-blue-600 text-white text-xs font-semibold px-2 py-1 rounded-full">
        {size} Yards
      </div>

      {/* Image */}
      <img
        src={imageUrl}
        alt={`${size} Yard Skip`}
        className="w-full h-32 object-contain mb-4"
      />

      {/* Infos principales */}
      <h3 className="text-lg font-semibold">{size} Yard Skip</h3>
      <p className="text-sm text-gray-500">
        {hire_period_days} day hire period
      </p>
      <p className="mt-2 text-lg font-bold text-blue-600">
        £{totalPrice.toFixed(2)}
      </p>

      {/* Badges infos */}
      <div className="flex gap-2 mt-3 text-xs text-gray-600">
        {allowed_on_road && (
          <span className="flex items-center gap-1 bg-gray-100 px-2 py-1 rounded">
            <Truck className="w-4 h-4" />
            On-road OK
          </span>
        )}
        {allows_heavy_waste && (
          <span className="flex items-center gap-1 bg-gray-100 px-2 py-1 rounded">
            <Weight className="w-4 h-4" />
            Heavy waste
          </span>
        )}
      </div>

      {/* Bouton ou icône */}
      {selected ? (
        <div className="mt-4 w-full flex items-center justify-center gap-2 text-blue-600 font-semibold">
          <CheckCircle className="w-5 h-5" />
          Selected
        </div>
      ) : (
        <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
          Select This Skip
        </button>
      )}
    </div>
  );
};

export default SkipCard;
