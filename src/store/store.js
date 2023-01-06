// Import dependencies
import { configureStore } from "@reduxjs/toolkit";

// Import components
import cartSlice from "./shoppingCart/cartSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
  },
});

export default store;
