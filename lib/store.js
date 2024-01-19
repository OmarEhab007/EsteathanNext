// store.js
import create from 'zustand';

const useStore = create(set => ({
  user: null,
  school: null,
  subscription: null,
  status: null,
  darkMode: false,
  setUser: user => set({ user }),
  setSchool: school => set({ school }),
  setSubscription: subscription => set({ subscription }),
  setStatus: status => set({ status }),
  toggleDarkMode: () => set(state => ({ darkMode: !state.darkMode })),
}));

export default useStore;