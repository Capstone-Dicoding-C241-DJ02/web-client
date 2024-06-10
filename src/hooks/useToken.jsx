import {create} from 'zustand';

const useToken = create((set) => ({
  token: '',
  setToken: (token) => set(() => ({token})),
}));

export default useToken;
