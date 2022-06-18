import create from "zustand";

interface State {
  code: string | null;
  setCode: (code: string) => void;
}

const useStore = create<State>((set) => ({
  code: null,
  setCode: (code: string) => set(() => ({ code })),
}));

export { useStore };
