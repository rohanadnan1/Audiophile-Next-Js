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

      if (index === -1) {
        state.cart.push(action.payload);
      }

      // if the product is already in the cart, we will just increase the quantity
      // this will increase the quantity of the product
      if (index !== -1) {
        state.cart[index].count += 1;
      }
    },
    removeFromCart: (state, action) => {
      const index = state.cart.findIndex(
        (product: any) => product.id === action.payload.id
      );
      const billIndex = state.bill.findIndex(
        (bill) =>{
          return bill.price === action.payload.price
        }
      );
      console.log(billIndex, 'billIndex');

      if (index !== -1) {
        if (state.cart[index].count === 1) {
          state.cart.splice(index, 1);
        } else {
          state.cart[index].count -= 1;
        }
      }

      if (billIndex !== -1) {
        state.bill.splice(billIndex, 1);
      }
    },
    removeAll: (state) => {
      // this reducer will remove all items present in the arr

      state.cart = [];
      state.bill = [];
      return state;
    },

    addBill: (state, action) => {
      // this reducer will add the bill to the state
      state.bill.push(action.payload);
    },
  },
});

export const { addToCart, removeFromCart, removeAll, addBill } =
  cartSlice.actions;
export default cartSlice.reducer;
