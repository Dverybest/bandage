"use client";
import {
  AppStore,
  Storage,
  initializeCart,
  initializeList,
  makeStore,
} from "@/lib";
import { FC, ReactNode, useEffect, useRef } from "react";
import { Provider } from "react-redux";

export const StoreProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const storeRef = useRef<AppStore>();
  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = makeStore();
  }
  useEffect(() => {
    const cartList = localStorage.getItem(Storage.CART);
    const wishList = localStorage.getItem(Storage.WISHLIST);
    if (storeRef.current) {
      if (cartList) {
        const cart: {
          cartItems: Array<ICartItem>;
        } = JSON.parse(cartList) ?? [];
        storeRef.current.dispatch(initializeCart(cart.cartItems));
      }
      if (wishList) {
        const savedList: {
          list: Array<IProduct>;
        } = JSON.parse(wishList) ?? [];
        storeRef.current.dispatch(initializeList(savedList.list));
      }
    }
  }, []);
  return <Provider store={storeRef.current}>{children}</Provider>;
};
