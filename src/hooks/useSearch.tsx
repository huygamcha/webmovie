import { create } from "zustand";

interface Data {
  value_movie: string;
  onchange: (newMovie: string) => void;
}

const useSearch = create<Data>((set) => ({
  value_movie: "",
  onchange: (newMovie) => set({ value_movie: newMovie }),
}));
export default useSearch;
