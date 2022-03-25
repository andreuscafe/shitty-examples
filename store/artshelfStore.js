import create from 'zustand'

export const useArtStore = create((set) => ({
  selectedPiece: null,
  setSelectedPiece: (piece) => set((state) => ({ selectedPiece: piece })),
}))
