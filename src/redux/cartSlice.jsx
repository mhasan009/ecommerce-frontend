import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  totalQuantity: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const newItem = action.payload;
      const quantity = Number(newItem.quantity) || 1;
      const price = Number(newItem.price) || 0;

      const existingItem = state.products.find(
        (item) => item.id === newItem.id,
      );

      if (existingItem) {
        existingItem.quantity += quantity;
        existingItem.totalPrice = existingItem.quantity * existingItem.price;
      } else {
        state.products.push({
          id: newItem.id,
          name: newItem.name,
          price: price,
          quantity: quantity,
          totalPrice: price * quantity,
          image: newItem.image,
        });
      }

      // Recalculate totals
      state.totalQuantity = state.products.reduce(
        (sum, item) => sum + item.quantity,
        0,
      );
      state.totalPrice = state.products.reduce(
        (sum, item) => sum + item.totalPrice,
        0,
      );
    },

    removeFromCart(state, action) {
      const id = action.payload;
      state.products = state.products.filter((item) => item.id !== id);

      // Recalculate totals
      state.totalQuantity = state.products.reduce(
        (sum, item) => sum + item.quantity,
        0,
      );
      state.totalPrice = state.products.reduce(
        (sum, item) => sum + item.totalPrice,
        0,
      );
    },

    increaseQuantity(state, action) {
      const item = state.products.find((p) => p.id === action.payload);
      if (item) {
        item.quantity += 1;
        item.totalPrice = item.quantity * item.price;

        // Recalculate totals
        state.totalQuantity = state.products.reduce(
          (sum, i) => sum + i.quantity,
          0,
        );
        state.totalPrice = state.products.reduce(
          (sum, i) => sum + i.totalPrice,
          0,
        );
      }
    },

    decreaseQuantity(state, action) {
      const item = state.products.find((p) => p.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
        item.totalPrice = item.quantity * item.price;

        // Recalculate totals
        state.totalQuantity = state.products.reduce(
          (sum, i) => sum + i.quantity,
          0,
        );
        state.totalPrice = state.products.reduce(
          (sum, i) => sum + i.totalPrice,
          0,
        );
      }
    },

    clearCart(state) {
      state.products = [];
      state.totalQuantity = 0;
      state.totalPrice = 0;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
