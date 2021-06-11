import create from "zustand";
type State = {
  bears: number;
  increasePopulation: () => void;
  removeAllBears: () => void;
  color?: string;
  changeColor?: (color?: string) => void;
  collapsed?: boolean;
  toggleCollapsed?: () => void;
};
const useStore = create<State>((set) => ({
  bears: 0,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
  color: localStorage.getItem("color") || "#1F6DED",
  changeColor: (val) => set(() => ({ color: val })),
  collapsed: false,
  toggleCollapsed: () => set((state) => ({ collapsed: !state.collapsed })),
}));

export default useStore;
