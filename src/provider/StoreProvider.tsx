"use client";
import { AppStore, Storage, initializeCart, makeStore } from "@/lib";
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
    if (storeRef.current && cartList) {
      const cart: {
        cartItems: Array<ICartItem>;
      } = JSON.parse(cartList) ?? [];
      storeRef.current.dispatch(initializeCart(cart.cartItems));
    }
  }, []);
  return <Provider store={storeRef.current}>{children}</Provider>;
};
