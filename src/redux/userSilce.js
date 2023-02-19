// manage action add to card, remove product, checkout...
import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    cart: [],
    quantity: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      state.quantity += 1;
      const index = state.cart.findIndex((e) => e.id === action.payload.id);
      if (index < 0) {
        let newProduct = action.payload;
        state.cart.push({ ...newProduct, count: 1 });
      } else {
        state.cart[index].count += 1;
      }
    },

    subProduct: (state, action) => {
      state.quantity -= 1;
      const index = state.cart.findIndex((e) => e.id == action.payload.id);
      if (state.cart[index].count > 1) {
        state.cart[index].count -= 1;
      } else {
        const newCart = state.cart.filter(
          (each) => each.id != action.payload.id
        );
        state.cart = newCart;
      }
    },

    removeProduct: (state, action) => {
      const index = state.cart.findIndex((e) => e.id === action.payload.id);
      state.quantity -= state.cart[index].count;
      const newProducts = state.cart.filter(
        (each) => each.id !== action.payload.id
      );
      state.cart = newProducts;
    },

    checkout: (state, action) => {
      state.cart = [];
      state.quantity = 0;
    },
  },
});

export default userSlice;
