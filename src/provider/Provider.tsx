"use client";
import theme from "@/theme";
import { ThemeProvider as EmotionThemeProvider } from "@emotion/react";
import { ThemeProvider } from "@mui/material/styles";
import { SnackbarProvider } from "notistack";
import { FC, ReactNode } from "react";
import { StoreProvider } from "./StoreProvider";

export const Provider: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <StoreProvider>
      <ThemeProvider theme={theme}>
        <SnackbarProvider maxSnack={3}>
          <EmotionThemeProvider theme={theme}>{children}</EmotionThemeProvider>
        </SnackbarProvider>
      </ThemeProvider>
    </StoreProvider>
  );
};
