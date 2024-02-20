import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

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


export const updateCount = createAsyncThunk(
  'cart/updateCount',
  async ({ productId, newCount }: { productId: string; newCount: number }) => {
    // Here, you would typically make an API call to update the count on the server
    // For simplicity, we'll just return the new count
    return newCount;
  }
);

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
        state.cart.push({ ...action.payload, count: 1 });
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

      if (index !== -1) {
        if (state.cart[index].count === 1) {
          state.cart.splice(index, 1);
        } else {
          state.cart[index].count -= 1;
        }
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

    removeBill: (state, action) => {
      const item = state.bill.lastIndexOf(action.payload);
      if (item !== -1) {
        state.bill.splice(item, 1);
      }
    },

    incrementCount: (state, action) => {
      // Find the item in the state
      const item = state.cart.find(i => i.id === action.payload.id);
    
      // Check if item exists
      if (item) {
        // Return a new state with the updated count
        return {
          ...state,
          items: state.cart.map(i => 
            i.id === action.payload.id ? { ...i, count: i.count + 1 } : i
          )
        };
      } else {
        console.error('Item not found');
      }
    },

    decrementCount: (state, action) => {
      const item = state.cart.find(
        (product) => product.id === action.payload.id
      );
      if (item) {
        item.count -= 1;
        action.payload.count = item.count;
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(updateCount.fulfilled, (state, action) => {
      const { productId, newCount } = action.meta.arg;
      const product = state.cart.find((product) => product.id.toString() === productId);
      if (product) {
        product.count = newCount;
      }
    });
  },
});

export const {
  addToCart,
  removeFromCart,
  removeAll,
  addBill,
  removeBill,
  incrementCount,
  decrementCount,
} = cartSlice.actions;
export default cartSlice.reducer;
