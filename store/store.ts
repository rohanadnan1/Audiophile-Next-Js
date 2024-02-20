import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import countReducer from "./countSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    count: countReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export default store;
