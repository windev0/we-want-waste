// external imports
import { useState } from "react";

// internal imports
import SkipCard from "../components/SkipCard";

const skips = [
  {
    id: 17933,
    size: 4,
    hire_period_days: 14,
    price_before_vat: 278,
    vat: 20,
    allowed_on_road: true,
    allows_heavy_waste: true,
  },
  {
    id: 17934,
    size: 6,
    hire_period_days: 14,
    price_before_vat: 290,
    vat: 20,
    allowed_on_road: false,
    allows_heavy_waste: true,
  },
];

const ChooseSkipPage = () => {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-2">
        Choose Your Skip Size
      </h2>
      <p className="text-center text-gray-500 mb-8">
        Select the skip size that best suits your needs
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skips.map((skip) => (
          <SkipCard
            key={skip.id}
            {...skip}
            selected={selectedId === skip.id}
            onSelect={setSelectedId}
          />
        ))}
      </div>
    </div>
  );
};

export default ChooseSkipPage;
