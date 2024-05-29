import {create} from 'zustand';

const useCandidate = create((set) => ({
  selectedCandidate: '',
  setSelectedCandidate: (candidate) =>
    set(() => ({selectedCandidate: candidate})),
}));

export default useCandidate;
