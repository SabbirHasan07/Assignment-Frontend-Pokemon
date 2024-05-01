import { Set } from "pokemon-tcg-sdk-typescript/dist/sdk";
import { create } from "zustand";

interface SetStore {
    data: Set[];
    fetchData: (allsets: Set[]) => void; 
}

 const useSetStore = create<SetStore>((set) => ({
    data: [],
    fetchData: (allsets) => set({ data: allsets }), 
}));

export default useSetStore;