import { createSlice } from "@reduxjs/toolkit";

const initialState: any = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {

      // here we are checking if the product is already in the cart or not

      const index = state.findIndex((product: any)=> product.id === action.payload.id);

      // if the product is already in the cart, we will just increase the quantity
      if(index === -1){
        state.push(action.payload);
      }

      // TODO : increase the quantity of the product
    },
    removeFromCart: (state, action) => {
      const index = state.findIndex(
        (product: any) => product.id === action.payload
      );
      state = state.splice(index, 1);
    },
    removeAll: (state) => {

      // this reducer will remove all items present in the arr 

      return state = [];
    }
  },
});

export const { addToCart, removeFromCart, removeAll } = cartSlice.actions;
export default cartSlice.reducer;
