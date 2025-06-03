// external imports
import { CheckCircle, Truck, Weight } from "lucide-react";
import clsx from "clsx";

// internal imports
import type { SkipCardProps } from "../types/skip.type";
import { useTheme } from "../../../common/hooks/useTheme";
import { useRef } from "react";

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
  const cardRef = useRef(null as HTMLDivElement | null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = cardRef?.current?.getBoundingClientRect();
    if (!rect) return;
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    if (!cardRef.current) return;
    cardRef.current.style.transformOrigin = `${x}px ${y}px`;
  };

  return (
    <div
      ref={cardRef}
      onClick={() => onSelect(id)}
      onMouseMove={handleMouseMove}
      className={clsx(
        "relative p-4 rounded-2xl cursor-pointer transition-all duration-300 ease-out group",
        selected ? "ring-2 shadow-xl" : "hover:shadow-lg"
      )}
      style={{
        backgroundColor: theme?.backgroundColor,
        color: theme?.textColor,
        border: `2px solid ${
          selected ? theme?.primaryColor : theme?.borderColor || "#ccc"
        }`,
        boxShadow: selected ? `0 0 0 4px ${theme?.primaryColor}40` : undefined,
        transition: "transform 0.2s ease, box-shadow 0.2s ease",
      }}
    >
      {/* Hover effect */}
      <div className="absolute inset-0 rounded-2xl transition-transform duration-300 group-hover:scale-[1.015]"></div>

      {/* Badge taille */}
      <div
        className="absolute top-2 right-2 text-xs font-semibold px-2 py-1 rounded-full z-10"
        style={{
          backgroundColor: theme?.primaryColor,
          color: "#fff",
        }}
      >
        {size} Yards
      </div>

      {/* Image */}
      <img
        src={imageUrl}
        alt={`${size} Yard Skip`}
        className="w-full h-32 object-contain mb-4 transition-transform duration-300 group-hover:scale-105"
      />

      {/* Titre */}
      <h3 className="text-lg font-semibold">{size} Yard Skip</h3>
      <p className="text-sm" style={{ color: theme?.textColor, opacity: 0.7 }}>
        {hire_period_days} day hire period
      </p>

      {/* Prix */}
      <p
        className="mt-2 text-lg font-bold"
        style={{ color: theme?.primaryColor }}
      >
        £{totalPrice.toFixed(2)}
      </p>

      {/* Badges */}
      <div className="flex flex-wrap gap-2 mt-3 text-xs">
        {allowed_on_road && (
          <span
            className="flex items-center gap-1 px-2 py-1 rounded"
            style={{
              backgroundColor: theme?.secondaryColor + "22",
              color: theme?.textColor,
            }}
          >
            <Truck className="w-4 h-4" />
            On-road OK
          </span>
        )}
        {allows_heavy_waste && (
          <span
            className="flex items-center gap-1 px-2 py-1 rounded"
            style={{
              backgroundColor: theme?.secondaryColor + "22",
              color: theme?.textColor,
            }}
          >
            <Weight className="w-4 h-4" />
            Heavy waste
          </span>
        )}
      </div>

      {/* Action */}
      {selected ? (
        <div
          className="mt-4 w-full flex items-center justify-center gap-2 font-semibold"
          style={{ color: theme?.primaryColor }}
        >
          <CheckCircle className="w-5 h-5" />
          Selected
        </div>
      ) : (
        <button
          className="mt-4 w-full py-2 rounded-lg font-medium transition-colors duration-200"
          style={{
            backgroundColor: theme?.primaryColor,
            color: "#fff",
          }}
        >
          Select This Skip
        </button>
      )}
    </div>

    // <div
    //   onClick={() => onSelect(id)}
    //   className={clsx(
    //     "relative p-4 rounded-2xl cursor-pointer transition-all duration-300",
    //     selected ? "ring-2 shadow-xl" : "hover:shadow-lg"
    //   )}
    //   style={{
    //     backgroundColor: theme?.backgroundColor,
    //     color: theme?.textColor,
    //     border: `2px solid ${selected ? theme?.primaryColor : "#ccc"}`,
    //     boxShadow: selected ? `0 0 0 4px ${theme?.primaryColor}40` : undefined,
    //   }}
    // >
    //   {/* Badge de taille */}
    //   <div
    //     className="absolute top-2 right-2 text-xs font-semibold px-2 py-1 rounded-full"
    //     style={{
    //       backgroundColor: theme?.primaryColor,
    //       color: "#fff",
    //     }}
    //   >
    //     {size} Yards
    //   </div>

    //   {/* Image */}
    //   <img
    //     src={imageUrl}
    //     alt={`${size} Yard Skip`}
    //     className="w-full h-32 object-contain mb-4"
    //   />

    //   {/* Infos principales */}
    //   <h3 className="text-lg font-semibold">{size} Yard Skip</h3>
    //   <p className="text-sm" style={{ color: "#888" }}>
    //     {hire_period_days} day hire period
    //   </p>
    //   <p
    //     className="mt-2 text-lg font-bold"
    //     style={{ color: theme?.primaryColor }}
    //   >
    //     £{totalPrice.toFixed(2)}
    //   </p>

    //   {/* Badges infos */}
    //   <div className="flex gap-2 mt-3 text-xs">
    //     {allowed_on_road && (
    //       <span
    //         className="flex items-center gap-1 px-2 py-1 rounded"
    //         style={{
    //           backgroundColor: "#e0e0e0",
    //           color: theme?.textColor,
    //         }}
    //       >
    //         <Truck className="w-4 h-4" />
    //         On-road OK
    //       </span>
    //     )}
    //     {allows_heavy_waste && (
    //       <span
    //         className="flex items-center gap-1 px-2 py-1 rounded"
    //         style={{
    //           backgroundColor: "#e0e0e0",
    //           color: theme?.textColor,
    //         }}
    //       >
    //         <Weight className="w-4 h-4" />
    //         Heavy waste
    //       </span>
    //     )}
    //   </div>

    //   {/* Bouton ou icône */}
    //   {selected ? (
    //     <div
    //       className="mt-4 w-full flex items-center justify-center gap-2 font-semibold"
    //       style={{ color: theme?.primaryColor }}
    //     >
    //       <CheckCircle className="w-5 h-5" />
    //       Selected
    //     </div>
    //   ) : (
    //     <button
    //       className="mt-4 w-full py-2 rounded-lg transition"
    //       style={{
    //         backgroundColor: theme?.primaryColor,
    //         color: "#fff",
    //       }}
    //     >
    //       Select This Skip
    //     </button>
    //   )}
    // </div>
  );
};

export default SkipCard;
