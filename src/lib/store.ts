import { configureStore } from "@reduxjs/toolkit";
import { baseApi } from "./api";
import { cartSlice, wishListSlice } from "./slice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      api: baseApi.reducer,
      cart: cartSlice.reducer,
      wishList: wishListSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({}).concat(baseApi.middleware),
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
