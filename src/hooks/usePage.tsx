import { create } from "zustand";

interface TypeState {
  page: number;
  prePage: () => void;
  nextPage: () => void;
}

//Export ra de dung chung
//set là set trạng thái mặc định
const usePage = create<TypeState>((set) => ({
  page: 1,
  prePage: () => set((state) => ({ page: state.page - 1 })),
  nextPage: () => set((state) => ({ page: state.page + 1 })),
}));

export default usePage;
