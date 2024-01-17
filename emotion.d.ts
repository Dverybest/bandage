import theme from "@/theme";
import "@emotion/react";

type ITheme = typeof theme;
declare module "@emotion/react" {
  export interface Theme extends ITheme {}
}
