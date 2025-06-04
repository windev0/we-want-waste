import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import type { Skip } from "../types/skip.type";

const postcode = "NR32";
const area = "Lowestoft";

export const useGetSkips = () => {
  return useQuery({
    queryKey: ["skips"],
    queryFn: async () => {
      const { data } = await axios.get<Skip[]>(
        `${import.meta.env.VITE_API_BASE_URL}`,
        {
          params: {
            postcode,
            area,
          },
        }
      );
      return data;
    },
  });
};
