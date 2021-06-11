import create from "zustand";
type State = {
  bears: number;
  increasePopulation: () => void;
  removeAllBears: () => void;
  color?: string;
  changeColor?: (color?: string) => void;
};
const useStore = create<State>((set) => ({
  bears: 0,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
  color: localStorage.getItem("color") || "#1F6DED",
  changeColor: (val) => set(() => ({ color: val })),
}));

export default useStore;
