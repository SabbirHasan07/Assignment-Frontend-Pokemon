import { QueryKeys } from "@/models/enums";
import { getAllSets } from "pokemon-tcg-sdk-typescript/dist/sdk";
import { useQuery } from "@tanstack/react-query";

import { Set } from "pokemon-tcg-sdk-typescript/dist/sdk";
import { getSetById } from "@/service/pokemon.service";

export const useSets = () => {
  return useQuery<Set[]>({
    queryKey: [QueryKeys.sets],
    queryFn: async () => {
      const sets = await getAllSets();
      return sets;
    },
    refetchOnWindowFocus: false,
    refetchOnMount: true,
    enabled: true,
    retry: 1,
    retryDelay: 3000,
  });
};

export const useSet = (setid: string) => {
  return useQuery<Set>({
    queryKey: [QueryKeys.set, setid],
    queryFn: async () => {
      const set = await getSetById(setid);
      return set;
    },
    refetchOnWindowFocus: false,
    refetchOnMount: true,
    enabled: true,
    retry: 1,
    retryDelay: 3000,
  });
};
