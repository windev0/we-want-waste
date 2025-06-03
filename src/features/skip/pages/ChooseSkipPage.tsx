// external imports
import { useEffect, useState } from "react";

// internal imports
import type { Skip } from "../types/skip.type";
import SkipCard from "../components/SkipCard";
import BottomBar from "../components/BottomBar";
import { useTheme } from "../../../common/hooks/useTheme";

const ChooseSkipPage = () => {
  const [skips, setSkips] = useState<Skip[]>([]);
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const { theme } = useTheme();

  useEffect(() => {
    fetch(
      "https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft"
    )
      .then((res) => res.json())
      .then((data) => setSkips(data))
      .catch((err) => console.error("Erreur chargement skips:", err));
  }, []);

  const selectedSkip = skips.find((skip) => skip.id === selectedId) || null;
  return (
    <>
      <div
        className="max-w-6xl mx-auto px-4 py-8 transition-colors duration-300"
        style={{
          backgroundColor: theme?.backgroundColor,
          color: theme?.textColor,
        }}
      >
        <h2
          className="text-3xl font-bold text-center mb-2"
          style={{ color: theme?.textColor }}
        >
          Choose Your Skip Size
        </h2>
        <p
          className="text-center mb-8"
          style={{ color: theme?.textColor + "AA" }}
        >
          Select the skip size that best suits your needs
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {skips.map((skip) => (
            <SkipCard
              key={skip.id}
              skip={skip}
              onSelect={setSelectedId}
              selected={skip.id === selectedId}
            />
          ))}
        </div>
      </div>

      {selectedId && <BottomBar skip={selectedSkip} />}
    </>
  );
};

export default ChooseSkipPage;
