import { create } from "zustand";

export const useStrore = create((set) => ({
   cart:0,
   productName:"asdas",
   price:"$2000",
   increment:() => set((state) => ({ cart: state.cart + 1 })),
   decrement:() => set((state) => ({ cart: state.cart - 1 })),
}))