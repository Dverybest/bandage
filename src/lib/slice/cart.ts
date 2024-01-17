import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Storage } from "../enum";

const initialState: {
  cartItems: Array<ICartItem>;
} = { cartItems: [] };
export const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    addCartItem: (state, { payload }: PayloadAction<IProduct>) => {
      const index = state.cartItems.findIndex((item) => item.id === payload.id);
      if (index !== -1) {
        state.cartItems[index].quantity += 1;
      } else {
        state.cartItems.push({ ...payload, quantity: 1 });
      }
      localStorage.setItem(Storage.CART, JSON.stringify(state));
      return state;
    },
    removeCartItem: (state, { payload }: PayloadAction<IProduct>) => {
      const index = state.cartItems.findIndex((item) => item.id === payload.id);
      if (index !== -1) {
        state.cartItems[index].quantity -= 1;
        if (state.cartItems[index].quantity === 0) {
          state.cartItems = state.cartItems.filter(
            (item) => item.id !== payload.id
          );
        }
      }
      localStorage.setItem(Storage.CART, JSON.stringify(state));
      return state;
    },
    deleteCartItem: (state, { payload }: PayloadAction<IProduct>) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== payload.id
      );
      localStorage.setItem(Storage.CART, JSON.stringify(state));
      return state;
    },
    initializeCart: (state, { payload }: PayloadAction<ICartItem[]>) => {
      state.cartItems = payload;
      return state;
    },
  },
});

export const { addCartItem, removeCartItem, deleteCartItem, initializeCart } =
  cartSlice.actions;
