import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import countReducer from "./countSlice";

const store = configureStore({
    reducer: {
        cart: cartReducer,
        count: countReducer
    }
})

export default store