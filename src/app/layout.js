"use client";

import { NextUIProvider } from "@nextui-org/react";
import { darkTheme } from "./styles/theme";
import { Montserrat } from "next/font/google";
import CustomNavbar from "./components/NavBar";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <NextUIProvider theme={darkTheme}>
          <CustomNavbar /> {/* Use NextUI Navbar */}
          {children}
        </NextUIProvider>
      </body>
    </html>
  );
}
