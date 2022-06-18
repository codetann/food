import create from "zustand";

interface State {
  room: string | null;
  setRoom: (room: string) => void;
}

const useStore = create<State>((set) => ({
  room: null,
  setRoom: (room: string) => set(() => ({ room })),
}));

export { useStore };
