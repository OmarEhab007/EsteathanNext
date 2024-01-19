// store.js
import { create } from "zustand";

const useStore = create((set) => ({
  user: null,
  school: null,
  subscription: null,
  status: null,
  darkMode: typeof window !== 'undefined' ? JSON.parse(localStorage.getItem("darkMode") || "false") : false,
  toggleDarkMode: () =>
    set((state) => {
      const newDarkMode = !state.darkMode;
      if (typeof window !== 'undefined') {
        localStorage.setItem("darkMode", JSON.stringify(newDarkMode));
      }
      return { darkMode: newDarkMode };
    }),
  forms: [],
  teachers: [],
  students: [],
  bill: null,
  loading : false,
  setUser: (user) => set({ user }),
  setSchool: (school) => set({ school }),
  setSubscription: (subscription) => set({ subscription }),
  setStatus: (status) => set({ status }),
  // toggleDarkMode: () => set((state) => ({ darkMode: !state.darkMode })),
  setForms: (forms) => set({ forms }),
  setTeachers: (teachers) => set({ teachers }),
  setStudents: (students) => set({ students }),
  setBill: (bill) => set({ bill }),
  setLoading: (loading) => set({ loading }),
}));

export default useStore;
