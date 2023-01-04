// Import dependencies
import { configureStore } from "@reduxjs/toolkit";

// Import components
import cartSlice from "./shopping-cart/cartSlice";
import cartUISlice from "./shopping-cart/cartUISlice";

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    cartUI: cartUISlice.reducer,
  },
});

export default store;
