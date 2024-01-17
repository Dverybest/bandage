import { Footer, Navbar } from "@/component";
import { Provider } from "@/provider";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import CssBaseline from "@mui/material/CssBaseline";

import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Bandage",
  description: "Bandage ecommerce website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin={"anonymous"}
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,500;0,600;0,700;1,400&display=swap"
          rel="stylesheet"
        ></link>
      </head>
      <body>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <CssBaseline />
          <Provider>
            <Navbar />
            {children}
            <Footer />
          </Provider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
