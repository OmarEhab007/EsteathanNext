// store.js
import create from 'zustand';

const useStore = create(set => ({
  user: null,
  school: null,
  subscription: null,
  status: null,
  darkMode: false,
  forms: [],
  teachers: [],
  students: [],
  setUser: user => set({ user }),
  setSchool: school => set({ school }),
  setSubscription: subscription => set({ subscription }),
  setStatus: status => set({ status }),
  toggleDarkMode: () => set(state => ({ darkMode: !state.darkMode })),
  setForms: forms => set({ forms }),
  setTeachers: teachers => set({ teachers }),
  setStudents: students => set({ students }),
}));

export default useStore;