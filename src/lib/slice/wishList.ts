import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Storage } from "../enum";

const initialState: {
  list: Array<IProduct>;
} = { list: [] };
export const wishListSlice = createSlice({
  name: "wishListSlice",
  initialState,
  reducers: {
    addListItem: (state, { payload }: PayloadAction<IProduct>) => {
      const index = state.list.findIndex((item) => item.id === payload.id);
      if (index === -1) {
        state.list.push(payload);
      } else {
        state.list = state.list.filter((item) => item.id !== payload.id);
      }
      localStorage.setItem(Storage.WISHLIST, JSON.stringify(state));
      return state;
    },
    initializeList: (state, { payload }: PayloadAction<IProduct[]>) => {
      state.list = payload;
      return state;
    },
  },
});

export const { addListItem, initializeList } = wishListSlice.actions;
