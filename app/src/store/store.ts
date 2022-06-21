import create from "zustand";

export interface State {
  code: string | null;
  name: string | null;
  users: string[];
  setUsers: (users: string[]) => void;
  setName: (name: string) => void;
  setCode: (code: string) => void;
  clear: () => void;
}

const useStore = create<State>((set) => ({
  code: null,
  name: null,
  users: [],
  setUsers: (users: string[]) => set((state) => ({ ...state, users })),
  setName: (name) => set((state) => ({ ...state, name })),
  setCode: (code: string) => set((state) => ({ ...state, code })),
  clear: () => {
    set((state) => ({ ...state, code: null, name: null, users: [] }));
  },
}));

export { useStore };
