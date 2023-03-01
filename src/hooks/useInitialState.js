import { useState } from "react";
import initialState from "../initialState";

export default function useInitialState() {
   const [state, setState] = useState(initialState);

   const addToCart = payload => {
      // Assigning first a unique cart id to be able to delete only that element in the future
      const randomNumber = Math.floor(Math.random() * Date.now());
      const newItem = {...payload, cartId: `${payload.id}-${randomNumber}`};

      setState({
         ...state,
         cart: [...state.cart, newItem]
      });
   };
   const removeFromCart = payload => {
      setState({
         ...state,
         cart: state.cart.filter(item => item.cartId !== payload.cartId)
      });
   };

   return {
      addToCart,
      removeFromCart,
      state
   };
}