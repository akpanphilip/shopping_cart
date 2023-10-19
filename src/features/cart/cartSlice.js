import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../../cartItems";
// import { openModal } from "../modal/modalSlice";
const initialState = {
  cartItems: cartItems,
  amount: 0,
  total: 0,
  isLoading: true,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCart: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => item.id === payload.id);
      cartItem.amount = cartItem.amount + 1;
    },
    // clearCart: (state) => {
    //   state.cartItems = [];
    // },
    clearCart: (state) => {
      state.cartItems = state.cartItems.map((item) => ({
        ...item,
        amount: 0,
      }));
    },
    // removeItem: (state, action) => {
    //   const itemId = action.payload;
    //   state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
    // },
    removeItem: (state, action) => {
      const itemId = action.payload;
      state.cartItems = state.cartItems.map((item) => ({
        ...item,
        amount: item.id === itemId ? 0 : item.amount,
      }));
    },
    increase: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => item.id === payload.id);
      cartItem.amount = cartItem.amount + 1;
    },
    decrease: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => item.id === payload.id);
      cartItem.amount = cartItem.amount - 1;
    },
    calculateTotals: (state) => {
      let amount = 0;
      let total = 0;
      state.cartItems.forEach((item) => {
        amount += item.amount;
        total += item.amount * item.price;
      });
      state.amount = amount;
      state.total = total;
    },
  },
});

console.log(cartSlice);

export const {
  addCart,
  clearCart,
  removeItem,
  increase,
  decrease,
  calculateTotals,
} = cartSlice.actions;
export default cartSlice.reducer;
