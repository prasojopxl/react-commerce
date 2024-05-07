import { create } from "zustand";
import _ from 'lodash';


export const useStore = create((set) => ({
    cart:[],    
    // updateCart: (itemId, cartValue, Name, total) => set((state) =>{
    //     return {
    //         cart: [
    //             ...state.cart,
    //             {
    //                 id: itemId,
    //                 name: Name,
    //                 price: cartValue,
    //                 total:total
    //             }
    //         ]
    //     }
    // }),
    updateCart: (itemId, cartValue, Name, total) => set((state) => {
        const itemIndex = _.findIndex(state.cart, { id: itemId });

        if (itemIndex !== -1) {
            const updatedCart = [...state.cart];
            updatedCart[itemIndex] = {
                id: itemId,
                name: Name,
                price: cartValue,
                total: total
            };

            return {
                cart: updatedCart
            }
        }

        return {
            cart: [
                ...state.cart,
                {
                    id: itemId,
                    name: Name,
                    price: cartValue,
                    total: total
                }
            ]
        }
    }),
    
}))