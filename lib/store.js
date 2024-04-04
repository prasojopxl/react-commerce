import { create } from 'zustand'

export const useStore = create((set) => ({
    cart: [],
        updateCart: (itemId, cartValue, NewName) => set((state) =>{
            return {
                cart: [
                    ...state.cart,
                    {   
                        id: itemId, 
                        quantity: cartValue, 
                        name: NewName
                    }]
            }
        }),
    }))