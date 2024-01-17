"use client";
import theme from "@/theme";
import { ThemeProvider as EmotionThemeProvider } from "@emotion/react";
import { ThemeProvider } from "@mui/material/styles";
import { FC, ReactNode } from "react";
import StoreProvider from "./StoreProvider";

export const Provider: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <StoreProvider>
      <ThemeProvider theme={theme}>
        <EmotionThemeProvider theme={theme}>{children}</EmotionThemeProvider>
      </ThemeProvider>
    </StoreProvider>
  );
};
