import {create} from 'zustand';

const useAuth = create((set) => {
  return {
    isLoggedIn: false,
    setIsLoggedIn: (state) => set(() => ({isLoggedIn: state})),
  };
});

export default useAuth;
