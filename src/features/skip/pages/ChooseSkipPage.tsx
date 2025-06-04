// external imports
import { useEffect, useState } from "react";

// internal imports
import type { Skip } from "../types/skip.type";
import SkipCard from "../components/SkipCard";
import BottomBar from "../components/BottomBar";
import { useTheme } from "../../../common/hooks/useTheme";
import { useGetSkips } from "../services/useGetSkips";
import { ClipLoader } from "react-spinners";

const ChooseSkipPage = () => {
  const [skips, setSkips] = useState<Skip[]>([]);
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const { data, isError, error, isLoading, isSuccess } = useGetSkips();
  const { theme } = useTheme();

  useEffect(() => {
    if (isSuccess && data) {
      setSkips(data);
    } else if (isError) {
      console.error("Error fetching skips:", error);
    }
  }, [data, isSuccess, isLoading, isError]);

  const selectedSkip = skips.find((skip) => skip.id === selectedId) || null;

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <ClipLoader
          color={theme?.primaryColor}
          loading={isLoading}
          size={150}
          aria-label="Loading skips"
          data-testid="loader"
        />
      </div>
    );
  }
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
