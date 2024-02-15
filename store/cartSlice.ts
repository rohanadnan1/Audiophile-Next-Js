import { createSlice } from "@reduxjs/toolkit";

interface CartState {
  id: number;
  name: string;
  price: number;
  image: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
  count: number;
  category: string;
}

interface BillState {
  price: number;
}

interface Cart {
  cart: CartState[];
  bill: BillState[];
}

const initialState: Cart = {
  cart: [],
  bill: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      // here we are checking if the product is already in the cart or not

      const index = state.cart.findIndex(
        (product: any) => product.id === action.payload.id
      );

      // if the product is already in the cart, we will just increase the quantity
      if (index === -1) {
        state.cart.push(action.payload);
      }

      // TODO : increase the quantity of the product

      // this will increase the quantity of the product
      if (index !== -1) {
        state.cart[index].count += 1;
      }
    },
    removeFromCart: (state, action) => {
      const index = state.cart.findIndex(
        (product: any) => product.id === action.payload
      );
      state.cart = state.cart.splice(index, 1);
    },
    removeAll: (state) => {
      // this reducer will remove all items present in the arr

      state.cart = [];
      state.bill = [];
      return state;
    },
  },
});

export const { addToCart, removeFromCart, removeAll } = cartSlice.actions;
export default cartSlice.reducer;
