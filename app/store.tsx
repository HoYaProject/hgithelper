import { create } from "zustand";

interface SidePanelState {
  isExpanded: boolean;
  toggle: () => void;
}

const useStore = create<SidePanelState>((set) => ({
  isExpanded: true,
  toggle: () => {
    console.log("clicked");
    set((state) => ({ isExpanded: !state.isExpanded }));
  },
}));

export default useStore;
