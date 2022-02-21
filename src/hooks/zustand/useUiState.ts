import create from "zustand";

interface UiStateType {
  headerTitle: string;
  headerSubTitle: string;
  setHeaderTitle: (t: string) => void;
  setHeaderSubTitle: (t: string) => void;
}

export const useUiState = create<UiStateType>((set) => ({
  headerTitle: "Project",
  headerSubTitle: "",
  setHeaderTitle: (headerTitle) => set((state) => ({ ...state, headerTitle })),
  setHeaderSubTitle: (headerSubTitle) =>
    set((state) => ({ ...state, headerSubTitle })),
}));
