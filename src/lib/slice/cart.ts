import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type ICartItem = IProduct & { quantity: number };
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
      return state;
    },
  },
});

export const { addCartItem, removeCartItem } = cartSlice.actions;
