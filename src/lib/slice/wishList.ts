import { PayloadAction, createSlice } from "@reduxjs/toolkit";

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
      return state;
    },
  },
});

export const { addListItem } = wishListSlice.actions;
