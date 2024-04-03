import { create } from 'zustand'

export const useStore = create((set) => ({
    cart: 0,
    increasePopulation: () => set((state) => ({ cart: state.cart + 1 })),
    removeAllBears: () => set({ cart: 0 }),
    updateBears: (newCart) => set({ cart: newCart }),
  }))