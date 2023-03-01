import { useEffect, useState } from "react";
import initialState from "../initialState";

export default function useInitialState() {
   const [state, setState] = useState(initialState);

   // Using a useEffect to always re-sort our cart when it's updated
   useEffect(() => {
      const sortedCart = state.cart.sort((item, prevItem) => item.title > prevItem.title ? 1 : -1);
      setState({...state, cart: sortedCart});
   }, [state.cart]);

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

   const addToBuyer = payload => {
      setState({
         ...state,
         buyer: payload
      });
   };

   return {
      addToCart,
      removeFromCart,
      addToBuyer,
      state
   };
}